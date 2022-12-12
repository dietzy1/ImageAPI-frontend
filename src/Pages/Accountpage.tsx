import { useState } from "react";
import { createPortal } from "react-dom";
import { Logoutfunc } from "../logic/fetch";

export function Accountpage({ open, onClose }: any) {
  const [apiKey, setAPIKey] = useState("");
  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle(!toggle);
    FetchAPIKey({ setAPIKey });
  };

  if (!open) return null;
  return createPortal(
    <div
      className="shadow-3xl fixed top-0 bottom-0 right-0 left-0 z-[2000] backdrop-blur-lg lg:p-40"
      onClick={onClose}
    >
      <div
        className="mx-auto flex w-[60vh] flex-col justify-center  "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="mx-auto h-[800px] w-full max-w-[650px] rounded-lg border-2 border-gray-800  bg-hybrid p-8 px-8 text-[#fff]">
          <p
            className="text-bold flex justify-end text-xl text-white"
            onClick={onClose}
          >
            x
          </p>
          <h2 className="pb-2 text-center text-5xl font-bold text-white lg:pb-4">
            Personal account settings
          </h2>

          <div className="relative overflow-x-auto pb-4 shadow-md sm:rounded-lg"></div>
          {/*Show API key*/}
          <div className="relative mb-4 overflow-x-auto shadow-md sm:rounded-lg lg:mb-10">
            <table className="w-full border-2 border-gray-800 text-left text-base text-gray-400">
              <tbody>
                <tr className=" h-20 border-b bg-black dark:border-gray-700">
                  <th className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    <h1 className="mb-4 text-2xl">Show your api key</h1>
                    <th>Press the button below to see your API key.</th>
                    <span className="w-20 border border-gray-800 p-1 px-3">
                      {toggle && apiKey.length === 0
                        ? "Your API key has been deleted, pls generate a new one."
                        : ""}
                      {toggle ? apiKey : "****************"}
                    </span>
                  </th>
                </tr>
              </tbody>
              <tbody className="h-12 border border-gray-700 bg-[#111] text-xs uppercase">
                <tr>
                  <th className="pr-8 text-right">
                    <button
                      onClick={() => triggerToggle()}
                      className="text-semibold rounded-lg bg-greeny p-2 px-3 text-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30"
                    >
                      Show API key
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          {/*Generate APIkey section*/}
          <div className="relative mb-4 overflow-x-auto shadow-md sm:rounded-lg lg:mb-10">
            <table className="w-full border-2 border-gray-800 text-left text-base text-gray-400">
              <tbody>
                <tr className=" h-20 border-b bg-black dark:border-gray-700">
                  <th className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    <h1 className="mb-4 text-2xl">Generate fresh API key</h1>
                    <span>
                      Press the button below to generate a new API key.
                    </span>
                  </th>
                </tr>
              </tbody>
              <tbody className="h-12 border border-gray-700   bg-[#111] text-xs uppercase">
                <tr>
                  <th className="pr-8 text-right">
                    <button
                      onClick={() => GenerateAPIKey({ setAPIKey })}
                      className="text-semibold rounded-lg bg-greeny p-2 px-3 text-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30"
                    >
                      Generate Api key
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          {/*Delete personal account section*/}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full border-2 border-red-800 text-left text-base text-gray-400">
              <tbody>
                <tr className=" h-20 border-b bg-black dark:border-gray-700">
                  <th className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    <h1 className="mb-4 text-2xl">Delete personal account</h1>
                    <span>
                      Permamently delete your account and all related data from
                      the server. This action cannot be undone and all data will
                      be lost.
                    </span>
                  </th>
                </tr>
              </tbody>
              <tbody className="h-12 border border-gray-700   bg-[#111] text-xs uppercase  ">
                <tr>
                  <th className="pr-8 text-right">
                    <button
                      onClick={() => DeleteAccount()}
                      className="text-semibold rounded-lg bg-[#ff0000] p-2 px-3 text-white shadow-lg shadow-red-800/50 hover:shadow-red-800/30"
                    >
                      Delete personal account
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
}

//Function that fetches a new api key
async function FetchAPIKey({ setAPIKey }: any) {
  const res = await fetch(
    "https://imageapi-production.up.railway.app/api/v0/auth/showkey/",
    {
      method: "GET",
      credentials: "include",
    }
  );
  setAPIKey(await res.json());
}

async function GenerateAPIKey({ setAPIKey }: any) {
  const res = await fetch(
    "https://imageapi-production.up.railway.app/api/v0/auth/generatekey/",
    {
      method: "POST",
      credentials: "include",
    }
  );
  setAPIKey(res.json());
}

async function DeleteAccount() {
  const res = await fetch(
    "https://imageapi-production.up.railway.app/api/v0/auth/deleteaccount/",
    {
      method: "POST",
      credentials: "include",
    }
  );
  if (res.status === 200) {
    Logoutfunc();
  }
}
