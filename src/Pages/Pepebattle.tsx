import React from "react";
import Footer from "../Components/Footer";
import { NavbarNoSearch } from "../Components/Navbar";
import { imageType } from "../Pages/Home";
import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

//I need to make a request to the backend for 2 images which are displayed on screen

//Then based on a button a winner is decided and the winner ID is marked as Winner and the looser ID is marked as looser

/* const getImagesNoQuery = useCallback(async () => {
  try {
    const res = await fetch(
      // `https://imageapi-production.up.railway.app/api/v0/images/random/?quantity=40&key=${process.env.REACT_APP_API_KEY}`,
      `http://localhost:8000/api/v0/images/random/?quantity=40&key=${process.env.REACT_APP_API_KEY}`,
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
}, [setImages, setLoading]); */

function Pepebattle() {
  const [images, setImages] = useState<imageType[]>({} as imageType[]);
  const [loading, setLoading] = useState(true);

  const requestMatch = async () => {
    console.log("requesting match");
    try {
      const res = await fetch(
        //`http://localhost:8000/api/v0/elo/requestmatch/`,
        `https://imageapi-production.up.railway.app/api/v0/elo/requestmatch/?key=${process.env.REACT_APP_API_KEY}`,
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
  };

  const matchResult = async (winner: string, looser: string) => {
    try {
      const res = await fetch("http://localhost:8000/api/v0/matchresult/", {
        method: "POST",
        body: JSON.stringify({
          winner: winner,
          looser: looser,
        }),
      });
      setImages(await res.json());
    } catch (error) {
      console.log(error);
      setImages([]);
    }
  };

  useEffect(() => {
    try {
      requestMatch();
      console.log(images);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <NavbarNoSearch />
      <div className="text-white text-center">
        <div className="max-w-[800px]  w-full h-fit mx-auto text-center flex-col justify-center pt-[96px] mt-20 mb-12">
          <p className="text-greeny font-bold p-2">Pepe battle</p>
          <h1 className="text-5xl font-bold py-2">
            Choose your favorite pepe!
          </h1>
          <h1 className="text-2xl font-bold text-gray-500">
            And help decide which pepe is the best!
          </h1>
        </div>

        {/**Should output name of the pepe ontop**/}
        <div className="flex flex-row justify-center mb-6">
          <button className="bg-greeny w-[200px] mx-44 rounded-md font-medium mt-6 py-3 text-black hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30">
            I like this one!
          </button>
          <button className="bg-greeny w-[200px] mx-44 rounded-md font-medium mt-6 py-3 text-black hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30">
            This one is better!
          </button>
        </div>

        {loading ? (
          <div> Loading... </div>
        ) : (
          <div className="flex flex-row justify-center">
            <div>
              <h1 className="text-2xl">{images[0].title}</h1>

              <img
                src={images[0].filepath}
                alt=""
                className="w-96 mb-12 rounded-lg mx-20"
              />
            </div>

            <div className="p-4 m-3 absolute my-auto rounded-full bg-white border-blacky text-blacky font-bold">
              VS
            </div>

            <div>
              <h1 className="text-2xl">{images[1].title}</h1>
              <img
                src={images[1].filepath}
                alt=""
                className="w-96 mb-12 rounded-lg mx-20"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mb-40" />
      <Footer />
    </div>
  );
}

export default Pepebattle;
