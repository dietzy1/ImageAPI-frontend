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
        className="text-center text-white"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="mx-auto  mt-20 mb-6 h-fit w-full max-w-[800px] flex-col justify-center pt-6 text-center lg:mb-12 lg:pt-[96px]">
          <p className="p-2 font-bold text-greeny">Pepe battle</p>
          <h1 className="py-2 text-5xl font-bold">
            Choose your favorite pepe!
          </h1>
          <h1 className="text-2xl font-bold text-gray-500">
            And help decide which pepe is the best!
          </h1>
        </div>

        {/**Should output name of the pepe ontop**/}
        <div className="mb-6 hidden flex-row justify-center lg:flex">
          <button
            className="mx-12 mt-6 w-32 rounded-md bg-greeny py-1 font-medium text-black shadow-lg shadow-greeny/50 hover:bg-white hover:shadow-greeny/30 lg:mx-32 lg:w-[200px] lg:py-3"
            onClick={onsubmitLeft}
          >
            I like this one!
          </button>
          <button
            className="mx-12 mt-6 w-32 rounded-md bg-greeny py-1 font-medium text-black shadow-lg shadow-greeny/50 hover:bg-white hover:shadow-greeny/30 lg:mx-32 lg:w-[200px] lg:py-3"
            onClick={onsubmitRight}
          >
            This one is better!
          </button>
        </div>

        <div className="flex-row justify-center font-semibold text-greeny antialiased lg:hidden ">
          Swipe in the direction of your favorite pepe!
        </div>
        <div className="m-3 mx-auto my-auto w-16 max-w-md justify-center rounded-full border-blacky bg-white p-4 font-bold text-blacky">
          VS
        </div>
        <hr className="mt-3 mb-3 w-full sm:mx-auto" />

        {loading ? (
          <div> Loading... </div>
        ) : (
          <div className="flex flex-row justify-center">
            <div>
              <h1 className="text-lg lg:text-2xl">{images[0].title}</h1>

              <img
                src={images[0].filepath}
                alt=""
                className="mx-4 mb-6 w-40 rounded-lg lg:mx-10 lg:w-96"
              />
            </div>

            <div>
              <h1 className="text-lg lg:text-2xl">{images[1].title}</h1>
              <img
                src={images[1].filepath}
                alt=""
                className="mx-4 mb-6 w-40 rounded-lg lg:mx-10 lg:w-96"
              />
            </div>
          </div>
        )}
        <hr className="w-full sm:mx-auto" />
        <div className="mb-40" />
      </div>
      <Footer />
    </div>
  );
}

export default Pepebattle;
