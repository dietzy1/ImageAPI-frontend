import React from "react";

import { imageType } from "../Pages/Home";

function Leaderboardcard({
  image,
  counter,
}: {
  image: imageType;
  counter: number;
}) {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg lg:w-[50%] w-[90%] mx-auto mb-4">
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

              <div className="ml-auto my-auto flex flex-col pl-3">
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

export default Leaderboardcard;
