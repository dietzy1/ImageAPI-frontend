import React, { useCallback } from "react";
import Footer from "../Components/Footer";

import { imageType } from "../Pages/Home";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

//I need to make a request to the backend for 2 images which are displayed on screen

//Then based on a button a winner is decided and the winner ID is marked as Winner and the looser ID is marked as looser

function Pepebattle() {
  const [images, setImages] = useState<imageType[]>({} as imageType[]);
  const [loading, setLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 70; //standart is 50 testing with higher values

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      isLeftSwipe
        ? matchResult(images[1], images[0])
        : matchResult(images[0], images[1]);

    //wait for the matchresult function to finish before calling requestMatch
    requestMatch();
  };

  const requestMatch = useCallback(async () => {
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
  }, [setImages, setLoading]);

  const matchResult = useCallback(
    async (winner: imageType, looser: imageType) => {
      //Just change it to formdata and send it as a post request
      const formData = new FormData();
      formData.set("winneruuid", winner.uuid);
      formData.set("looseruuid", looser.uuid);
      formData.set("winnerelo", winner.elo.toString());
      formData.set("looserelo", looser.elo.toString());

      try {
        const res = await fetch(
          //"http://localhost:8000/api/v0/elo/matchresult/",
          `https://imageapi-production.up.railway.app/api/v0/elo/matchresult/?key=${process.env.REACT_APP_API_KEY}`,
          {
            method: "POST",
            body: formData,
          }
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
        setImages([]);
      }
    },
    [setImages, setLoading]
  );

  const onsubmitLeft = (e: any) => {
    //Needs to call matchresult function
    matchResult(images[0], images[1]);
    //wait for the matchresult function to finish before calling requestMatch
    requestMatch();
  };

  const onsubmitRight = (e: any) => {
    //Needs to call matchresult function
    matchResult(images[1], images[0]);
    //wait for the matchresult function to finish before calling requestMatch
    requestMatch();
  };

  useEffect(() => {
    try {
      requestMatch();
    } catch (error) {
      console.log(error);
    }
  }, [requestMatch]);

  return (
    <div>
      <Navbar />

      <div
        className="text-white text-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="max-w-[800px]  w-full h-fit mx-auto text-center flex-col justify-center lg:pt-[96px] pt-6 mt-20 mb-6 lg:mb-12">
          <p className="text-greeny font-bold p-2">Pepe battle</p>
          <h1 className="text-5xl font-bold py-2">
            Choose your favorite pepe!
          </h1>
          <h1 className="text-2xl font-bold text-gray-500">
            And help decide which pepe is the best!
          </h1>
        </div>

        {/**Should output name of the pepe ontop**/}
        <div className="flex-row justify-center mb-6 hidden lg:flex">
          <button
            className="bg-greeny lg:w-[200px] w-32 mx-12 lg:mx-32 rounded-md font-medium mt-6 lg:py-3 py-1 text-black hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30"
            onClick={onsubmitLeft}
          >
            I like this one!
          </button>
          <button
            className="bg-greeny lg:w-[200px] w-32 mx-12 lg:mx-32 rounded-md font-medium mt-6 lg:py-3 py-1 text-black hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30"
            onClick={onsubmitRight}
          >
            This one is better!
          </button>
        </div>

        <div className="flex-row justify-center lg:hidden text-greeny antialiased font-semibold ">
          Swipe in the direction of your favorite pepe!
        </div>
        <div className="p-4 m-3 mx-auto max-w-md w-16 justify-center my-auto rounded-full bg-white border-blacky text-blacky font-bold">
          VS
        </div>
        <hr className="mt-3 sm:mx-auto w-full mb-3" />

        {loading ? (
          <div> Loading... </div>
        ) : (
          <div className="flex flex-row justify-center">
            <div>
              <h1 className="lg:text-2xl text-lg">{images[0].title}</h1>

              <img
                src={images[0].filepath}
                alt=""
                className="lg:w-96 w-40 mb-6 rounded-lg lg:mx-10 mx-4"
              />
            </div>

            <div>
              <h1 className="lg:text-2xl text-lg">{images[1].title}</h1>
              <img
                src={images[1].filepath}
                alt=""
                className="lg:w-96 w-40 mb-6 rounded-lg lg:mx-10 mx-4"
              />
            </div>
          </div>
        )}
        <hr className="sm:mx-auto w-full" />
        <div className="mb-40" />
      </div>
      <Footer />
    </div>
  );
}

export default Pepebattle;
