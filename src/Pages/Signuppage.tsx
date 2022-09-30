import { Signupfunc } from "../logic/fetch";
import { useGlobalState } from "../logic/context";
import { createPortal } from "react-dom";
import { useState } from "react";

export function Signuppage({ open, onClose }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useGlobalState();

  const onsubmitfunc = async (e: any) => {
    e.preventDefault();
    console.log("Logging in");
    const ok = await Signupfunc(username, password);
    if (ok) {
      dispatch({ user: true });
    }
    console.log(state.user);
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
        <form className="max-w-[450px] w-full mx-auto bg-hybrid p-8  rounded-lg border-2 border-gray-800">
          <p
            onClick={onClose}
            className="flex justify-end text-white text-bold text-xl"
          >
            x
          </p>
          <h2 className="text-4xl font-bold text-white text-center">Sign up</h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="text-start" htmlFor="username">
              Username
            </label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-greeny focus:bg-gray-800 focus:outline-none border border-gray-800"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="text-start" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-greeny focus:bg-gray-800 focus:outline-none border border-gray-800"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="w-full my-5 py-2 bg-greeny shadow-lg shadow-greeny/50 hover:shadow-greeny/30 text-white font-semibold rounded-lg"
            type="submit"
            onClick={onsubmitfunc}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("portal")!
  );
}
