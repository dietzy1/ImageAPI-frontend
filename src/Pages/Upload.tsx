import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";
import { useState } from "react";

import { useGlobalState } from "../logic/context";

function Leaderboard() {
  const [state, dispatch] = useGlobalState();

  /*   onFileUpload = (e) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "upload");
    formData.append("cloud_name", "davide");
    fetch("https://api.cloudinary.com/v1_1/davide/image/upload", {
        method: "post",
        body: formData,
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setUrl(data.url);
        })
        .catch((err) => {
            console.log(err);
        });
    }; */

  if (state.user) {
    return (
      <div>
        <Navbar />

        <div className="mx-auto h-fit  w-full max-w-[400px] flex-col justify-center pt-[96px] text-center text-white  lg:mt-20 lg:mb-12 lg:max-w-[800px]">
          okokok
        </div>

        <div className="mb-24" />
        <Footer />
      </div>
    );
  }
  //if not logged in deny the ability to upload images
  else
    return (
      <div>
        <Navbar />

        <div className="text-center text-white">
          <div className="mx-auto  mt-20 mb-12 h-fit w-full max-w-[800px] flex-col justify-center  text-center lg:pt-[96px]">
            {/*   <p className="p-2 font-bold text-[#00df9a]">High quality images</p> */}
            <h1 className="mb-4 py-2 text-7xl font-bold">
              You are not logged in
            </h1>
            <h1 className="mb-2 text-5xl font-bold">
              Only logged in users can upload!
            </h1>
            <h1 className=" text-2xl font-bold text-gray-500">
              Navigate to the login page at the top right corner of the screen!
            </h1>
            <img
              src="https://ik.imagekit.io/imageAPI/pepes/0cddd5aa-185f-4d57-8264-db93eff2afc9.jpg"
              alt=""
              className="mx-auto mt-10 h-80 w-80 rounded-3xl"
            />
          </div>
        </div>

        <div className="mb-24" />
        <Footer />
      </div>
    );
}

export default Leaderboard;
