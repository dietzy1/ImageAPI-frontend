import { useState } from "react";
import { createPortal } from "react-dom";
import { useGlobalState } from "../logic/context";

export function Accountpage({ open, onClose }: any) {
  const [apiKey, setAPIKey] = useState("");
  const [toggle, setToggle] = useState(false);
  const [state] = useGlobalState();

  const triggerToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
    FetchAPIKey({ setAPIKey });
  };

  if (!open) return null;
  return createPortal(
    <div
      className="top-0 bottom-0 right-0 left-0 fixed z-[1] backdrop-blur-lg shadow-3xl p-60"
      onClick={onClose}
    >
      <div
        className="flex flex-col justify-center  "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="max-w-[650px] h-[650px] w-full mx-auto bg-bluey p-8 px-8 rounded-lg">
          <p
            className="flex justify-end text-white text-bold text-xl"
            onClick={onClose}
          >
            x
          </p>
          <h2 className="text-5xl font-bold text-white text-center pb-4">
            account overview
          </h2>

          <span className="flex flex-col text-gray-400 py-2">
            Hello {state.user.username}!
          </span>
          <span className="flex flex-col text-gray-400 py-2">
            You can manage your account details from here.
          </span>
          <span className="flex flex-col text-gray-400 py-2">
            Press the button below to have your API-key shown and get started
            with the API!
          </span>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg pb-4">
            <table className="w-full text-base text-left text-gray-400">
              <thead className="text-xs uppercase bg-gray-800  text-gray-400">
                <tr>
                  <th className="py-3 px-8">Toggle visibility</th>
                  <th className="py-3 px-6">API-key</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b bg-[#151922] dark:border-gray-700 h-20">
                  <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <button
                      className="bg-greeny px-5 py-4 rounded-lg shadow-greeny/50 hover:shadow-greeny/30 shadow-lg"
                      onClick={triggerToggle}
                    >
                      Show key
                    </button>
                  </th>
                  <td className="py-4 px-6">
                    {toggle ? apiKey : "****************"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <span>Feel free</span>
            <span>filler text</span>
            <span>filler text</span>
            <span>filler text</span>
            <span>filler text</span>
            <button
              className="my-5 py-2 bg-greeny shadow-lg shadow-greeny/50 hover:shadow-greeny/30 text-white font-semibold rounded-lg"
              onClick={() => GenerateAPIKey({ setAPIKey })}
            >
              Generate new API-key
            </button>
            <button
              className="my-5 py-2 bg-greeny shadow-lg shadow-greeny/50 hover:shadow-greeny/30 text-white font-semibold rounded-lg"
              onClick={() => GenerateAPIKey({ setAPIKey })}
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
}

//Function that fetches a new api key
async function FetchAPIKey({ setAPIKey }: any) {
  const res = await fetch("http://localhost:8000/auth/showkey/", {
    method: "GET",
    credentials: "include",
  });
  setAPIKey(await res.json());
}

async function GenerateAPIKey({ setAPIKey }: any) {
  const res = await fetch("http://localhost:8000/auth/generatekey/", {
    method: "POST",
    credentials: "include",
  });
  setAPIKey(res.json());
}

async function DeleteAccount() {
  const res = await fetch("http://localhost:8000/auth/deleteaccount/", {
    method: "POST",
    credentials: "include",
  });
}
