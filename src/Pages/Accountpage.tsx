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
      className="top-0 bottom-0 right-0 left-0 fixed z-[2000] backdrop-blur-lg shadow-3xl lg:p-40"
      onClick={onClose}
    >
      <div
        className="flex flex-col justify-center "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="max-w-[650px] h-[800px] w-full mx-auto bg-hybrid p-8 px-8  text-[#fff] rounded-lg border-2 border-gray-800">
          <p
            className="flex justify-end text-white text-bold text-xl"
            onClick={onClose}
          >
            x
          </p>
          <h2 className="text-5xl font-bold text-white text-center lg:pb-4 pb-2">
            Personal account settings
          </h2>

          <div className="overflow-x-auto relative shadow-md sm:rounded-lg pb-4"></div>
          {/*Show API key*/}
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg lg:mb-10 mb-4">
            <table className="w-full text-base text-left text-gray-400 border-2 border-gray-800">
              <tbody>
                <tr className=" border-b bg-black dark:border-gray-700 h-20">
                  <th className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    <h1 className="text-2xl mb-4">Show your api key</h1>
                    <th>Press the button below to see your API key.</th>
                    <span className="border border-gray-800 p-1 px-3 w-20">
                      {toggle && apiKey.length === 0
                        ? "Your API key has been deleted, pls generate a new one."
                        : "****************"}
                      {toggle ? apiKey : "****************"}
                    </span>
                  </th>
                </tr>
              </tbody>
              <tbody className="text-xs uppercase bg-[#111] border border-gray-700 h-12">
                <tr>
                  <th className="text-right pr-8">
                    <button
                      onClick={() => triggerToggle()}
                      className="bg-greeny rounded-lg shadow-lg shadow-greeny/50 text-white p-2 text-semibold px-3 hover:shadow-greeny/30"
                    >
                      Show API key
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          {/*Generate APIkey section*/}
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg lg:mb-10 mb-4">
            <table className="w-full text-base text-left text-gray-400 border-2 border-gray-800">
              <tbody>
                <tr className=" border-b bg-black dark:border-gray-700 h-20">
                  <th className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    <h1 className="text-2xl mb-4">Generate fresh API key</h1>
                    <span>
                      Press the button below to generate a new API key.
                    </span>
                  </th>
                </tr>
              </tbody>
              <tbody className="text-xs uppercase bg-[#111]   border border-gray-700 h-12">
                <tr>
                  <th className="text-right pr-8">
                    <button
                      onClick={() => GenerateAPIKey({ setAPIKey })}
                      className="bg-greeny rounded-lg shadow-lg shadow-greeny/50 text-white p-2 text-semibold px-3 hover:shadow-greeny/30"
                    >
                      Generate Api key
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          {/*Delete personal account section*/}
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-base text-left text-gray-400 border-2 border-red-800">
              <tbody>
                <tr className=" border-b bg-black dark:border-gray-700 h-20">
                  <th className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    <h1 className="text-2xl mb-4">Delete personal account</h1>
                    <span>
                      Permamently delete your account and all related data from
                      the server. This action cannot be undone and all data will
                      be lost.
                    </span>
                  </th>
                </tr>
              </tbody>
              <tbody className="text-xs uppercase bg-[#111]   border border-gray-700 h-12  ">
                <tr>
                  <th className="text-right pr-8">
                    <button
                      onClick={() => DeleteAccount()}
                      className="bg-[#ff0000] rounded-lg shadow-lg shadow-red-800/50 text-white p-2 text-semibold px-3 hover:shadow-red-800/30"
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
