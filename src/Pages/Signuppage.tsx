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

    const ok = await Signupfunc(username, password);
    if (ok) {
      dispatch({ user: true });
      onClose();
    }
    console.log(state.user);
  };

  if (!open) return null;
  return createPortal(
    <div
      className="shadow-3xl fixed top-0 bottom-0 right-0 left-0 z-[2000] pt-52 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="mx-auto flex w-[40vh] flex-col justify-center   "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form className="mx-auto w-full max-w-[450px] rounded-lg border-2  border-gray-800 bg-hybrid p-8">
          <p
            onClick={onClose}
            className="text-bold flex justify-end text-xl text-white"
          >
            x
          </p>
          <h2 className="text-center text-4xl font-bold text-white">Sign up</h2>
          <div className="flex flex-col py-2 text-gray-400">
            <label className="text-start" htmlFor="username">
              Username
            </label>
            <input
              className="mt-2 rounded-lg border border-gray-800 bg-gray-700 p-2 focus:border-greeny focus:bg-gray-800 focus:outline-none"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2 text-gray-400">
            <label className="text-start" htmlFor="password">
              Password
            </label>
            <input
              className="mt-2 rounded-lg border border-gray-800 bg-gray-700 p-2 focus:border-greeny focus:bg-gray-800 focus:outline-none"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="my-5 w-full rounded-lg bg-greeny py-2 font-semibold text-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30"
            type="submit"
            onClick={onsubmitfunc}
          >
            Sign up
          </button>
          <div className="flex flex-row text-gray-400">
            <p className="mr-1">Already registered? </p>
            <button className="underline hover:text-greeny">login</button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")!
  );
}
