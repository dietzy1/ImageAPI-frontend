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
    <div className="mx-auto mb-4 w-[90%] overflow-x-auto shadow-md sm:rounded-lg lg:w-[90%]">
      <table className="w-full text-left text-base text-gray-400">
        <tbody>
          <tr className=" h-20  bg-hybrid">
            <th className="flex flex-row whitespace-nowrap py-4 px-1 font-medium text-gray-900 dark:text-white lg:px-6 ">
              <img
                className="h-24 w-24 rounded-full lg:mr-4 lg:h-48 lg:w-48"
                key={image.uuid}
                src={image.filepath}
                alt=""
              />
              <div className="flex flex-col">
                <span className="text-base font-bold lg:text-4xl ">
                  {image.title}
                </span>

                <div className="my-auto flex flex-row flex-wrap">
                  {image.tags.map((tag) => (
                    <span className=" mx-1 my-1 rounded-xl border border-greeny p-1 text-center text-xs font-bold lg:my-2 lg:w-28 lg:p-2 lg:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="my-auto ml-auto flex flex-col pl-3">
                <span className="mr-0 text-xs lg:mr-2 lg:text-3xl">
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
