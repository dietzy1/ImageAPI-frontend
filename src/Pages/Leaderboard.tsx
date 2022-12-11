import Footer from "../Components/Footer";

import { imageType } from "../Pages/Home";
import { useState, useEffect, useCallback } from "react";
import Leaderboardcard from "../Components/Leaderboardcard";
import Navbar from "../Components/Navbar";

//should be a top 3 leaderboard and then everyone else below that
//top 3 should be built as image cards
//Rest should be built as a table perhabs

//Should apply hover effects to the cards
function Leaderboard() {
  const [images, setImages] = useState<imageType[]>({} as imageType[]);
  const [loading, setLoading] = useState(true);

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
      <Navbar />

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
            <Leaderboardcard
              image={image}
              key={image.uuid}
              counter={index + 1}
            />
          ))}
        </div>
      )}
      <div className="mb-24" />
      <Footer />
    </div>
  );
}

export default Leaderboard;
