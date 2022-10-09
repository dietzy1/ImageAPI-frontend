import Footer from "../Components/Footer";
import { NavbarNoSearch } from "../Components/Navbar";
import { imageType } from "../Pages/Home";
import { useState, useEffect, useCallback } from "react";

//should be a top 3 leaderboard and then everyone else below that
//top 3 should be built as image cards
//Rest should be built as a table perhabs

//Should apply hover effects to the cards
function Leaderboard() {
  const [images, setImages] = useState<imageType[]>({} as imageType[]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  const getLeaderboard = useCallback(async () => {
    try {
      const res = await fetch(
        `https://imageapi-production.up.railway.app/api/v0/elo/leaderboard/?key=${process.env.REACT_APP_API_KEY}`,
        //`http://localhost:8000/api/v0/elo/leaderboard/?key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "GET",
        }
      );
      setImages(await res.json());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setImages([]);
    }
  }, [setImages, setLoading]);

  useEffect(() => {
    try {
      getLeaderboard();
    } catch (error) {
      console.log(error);
    }
  }, [getLeaderboard]);

  //I can hard code first 3 to the podium and then the rest to a table

  return (
    <div>
      <NavbarNoSearch />

      <div className="lg:max-w-[800px] max-w-[400px]  w-full h-fit mx-auto flex-col justify-center pt-[96px] lg:mt-20  lg:mb-12 text-white text-center">
        <p className="text-greeny font-bold p-2">Leaderboard</p>
        <h1 className="text-5xl font-bold py-2">The most popular pepes!</h1>
        <h1 className="text-2xl font-bold text-gray-500">
          See which pepes are the most popular!
        </h1>
      </div>

      {loading ? (
        <div></div>
      ) : (
        <div>
          {images.map((image, index) => (
            <PepeCard image={image} key={image.uuid} counter={index + 1} />
          ))}
        </div>
      )}
      <div className="mb-24" />
      <Footer />
    </div>
  );
}

export default Leaderboard;

function PepeCard({ image, counter }: { image: imageType; counter: number }) {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg lg:w-[50%] w-[85%] mx-auto mb-4">
      <table className="w-full text-base text-left text-gray-400">
        <tbody>
          <tr className=" bg-hybrid  h-20">
            <th className="py-4 lg:px-6 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row ">
              <img
                className="lg:w-48 lg:h-48 w-24 h-24 rounded-full lg:mr-4"
                key={image.uuid}
                src={image.filepath}
                alt=""
              />
              <div className="flex flex-col">
                <span className="lg:text-4xl text-base font-bold ">
                  {image.title}
                </span>

                <div className="flex flex-row flex-wrap my-auto">
                  {image.tags.map((tag) => (
                    <span className=" lg:text-sm text-xs font-bold border border-greeny rounded-xl lg:w-28 lg:p-2 p-1 mx-1 text-center lg:my-2 my-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="ml-auto my-auto flex flex-col">
                <span className="lg:text-3xl text-xs lg:mr-2 mr-0">
                  {"Rank " + counter}
                </span>
                <span className="text-xs">{"Elo " + image.elo}</span>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
