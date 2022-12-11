import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { Logoutfunc } from "../logic/fetch";
import { useGlobalState } from "../logic/context";
import { useState } from "react";
import { Loginpage } from "../Pages/Loginpage";
import { Signuppage } from "../Pages/Signuppage";
import { Accountpage } from "../Pages/Accountpage";
import Hamburger from "hamburger-react";

const Navbar = ({ triggerParentUpdate }: any) => {
  const [state, dispatch] = useGlobalState();
  const [isOpen, setIsOpen] = useState(false); //Login
  const [isOpen1, setIsOpen1] = useState(false); //Signup
  const [isOpen2, setIsOpen2] = useState(false); //Account
  const [hamburger, setHamburger] = useState(false); //Hamburger

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const onsubmitfunc = async (e: any) => {
    e.preventDefault();
    const ok = await Logoutfunc();
    if (ok) {
      dispatch({ user: false });
    }
    dispatch({ user: false });
  };

  return (
    <div>
      <nav className="fixed top-0 z-[999] flex h-16 w-full flex-row bg-darky/10 text-white backdrop-blur-[46px]">
        {/*This is a 3rd of the screen*/}
        <div className="flex w-[33.33%] flex-row items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[2rem] w-[2rem] sm:h-[2rem] sm:w-[2rem] md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h1 className=" whitespace-nowrap text-xs font-bold text-greeny sm:text-base md:text-3xl lg:text-5xl">
            Pepe-Gallery
          </h1>
        </div>

        {/*This is a 3rd of the screen*/}
        <div className="flex w-[33.33%] flex-row items-center justify-center sm:p-2 md:p-4 lg:p-8">
          <Searchbar triggerParentUpdate={triggerParentUpdate} />
        </div>

        {/*This is a 3rd of the screen*/}
        <button className="absolute top-2 right-8 z-[9999] lg:hidden">
          <Hamburger onToggle={hamburgerMenu} />
        </button>
        {hamburger ? (
          <div className="duration-300' : 'ease-in-out fixed top-0  right-0  z-[1000] h-screen w-[100%] bg-hybrid/[1] duration-300 ease-in-out ">
            <ul className="pt-16 font-bold ">
              <ul className="border-t border-b border-gray-500 bg-darky pb-16">
                <li className="p-6  hover:text-greeny">
                  <Link to="/"> Home </Link>
                </li>
                <hr className="mx-6 border-gray-500" />
                <li className="p-6  hover:text-greeny">
                  <Link to="/standoff"> Standoff</Link>
                </li>
                <hr className="mx-6 border-gray-500" />
                <li className="p-6  hover:text-greeny">
                  <Link to="/leaderboard"> Leaderboard</Link>
                </li>

                <hr className="mx-6 border-gray-500 " />
              </ul>
              {state.user ? (
                <div className="flex justify-center">
                  <button
                    className="m-10 w-[33.33%] whitespace-nowrap rounded-xl border border-gray-500  bg-white py-3 text-darky hover:text-greeny"
                    onClick={onsubmitfunc}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <ul className="flex justify-center">
                  <button
                    className=" m-10 mx-auto w-[33.33%] whitespace-nowrap rounded-xl border border-gray-500 bg-white py-3 text-darky hover:text-greeny "
                    onClick={() =>
                      openLoginpage(setIsOpen, setIsOpen1, setIsOpen2)
                    }
                  >
                    Login
                  </button>
                </ul>
              )}
              {state.user ? (
                <ul className="flex justify-center">
                  <button
                    onClick={() =>
                      openAccountpage(setIsOpen, setIsOpen1, setIsOpen2)
                    }
                    className="w-[80%] whitespace-nowrap rounded-xl bg-greeny py-3 text-darky shadow-lg shadow-greeny/50 hover:bg-white hover:text-greeny hover:shadow-greeny/30"
                  >
                    Account
                  </button>
                </ul>
              ) : (
                <ul className="flex justify-center">
                  <button
                    onClick={() =>
                      openSignuppage(setIsOpen, setIsOpen1, setIsOpen2)
                    }
                    className="w-[80%] whitespace-nowrap  rounded-xl bg-greeny py-3 text-darky shadow-lg shadow-greeny/50 hover:bg-white hover:text-greeny hover:shadow-greeny/30"
                  >
                    Sign up
                  </button>
                </ul>
              )}
            </ul>

            <div>
              <hr className="mx-6 mt-56 border-gray-500" />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div className=" hidden w-[33.33%] flex-row items-center justify-center overflow-hidden lg:flex ">
          <span className="md:text-text-xs hover:text-greeny sm:p-0 sm:text-xs md:p-1 lg:p-2">
            <Link to="/"> Home </Link>
          </span>

          <span className="hover:text-greeny sm:p-0 sm:text-xs md:p-1 md:text-xs lg:p-2">
            <Link to="/standoff"> Standoff</Link>
          </span>
          <span className=" hover:text-greeny sm:p-0 sm:text-xs md:p-1 md:text-xs lg:p-2">
            <Link to="/leaderboard"> Leaderboard </Link>
          </span>

          <div className="flex items-center space-x-2">
            {state.user ? (
              <button
                className="w-20 whitespace-nowrap py-6 hover:text-greeny md:text-base "
                onClick={onsubmitfunc}
              >
                Logout
              </button>
            ) : (
              <ul>
                <button
                  className=" w-20 whitespace-nowrap py-6 hover:text-greeny sm:text-xs md:text-xs"
                  onClick={() =>
                    openLoginpage(setIsOpen, setIsOpen1, setIsOpen2)
                  }
                >
                  Login
                </button>
              </ul>
            )}
            {state.user ? (
              <ul>
                <button
                  onClick={() =>
                    openAccountpage(setIsOpen, setIsOpen1, setIsOpen2)
                  }
                  className="w-20 whitespace-nowrap rounded-xl bg-greeny py-2 px-2 shadow-lg shadow-greeny/50 hover:bg-white hover:text-greeny hover:shadow-greeny/30 sm:text-xs md:text-xs"
                >
                  Account
                </button>
              </ul>
            ) : (
              <ul>
                <button
                  onClick={() =>
                    openSignuppage(setIsOpen, setIsOpen1, setIsOpen2)
                  }
                  className="w-20 whitespace-nowrap rounded-xl bg-greeny py-3 px-2 shadow-lg shadow-greeny/50 hover:bg-white hover:text-greeny hover:shadow-greeny/30 sm:text-xs md:text-xs"
                >
                  Sign up
                </button>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <Loginpage open={isOpen} onClose={() => setIsOpen(false)} />
      <Signuppage open={isOpen1} onClose={() => setIsOpen1(false)} />
      <Accountpage open={isOpen2} onClose={() => setIsOpen2(false)} />
    </div>
  );
};

export default Navbar;

export function openLoginpage(
  setIsOpen: any,
  setIsOpen1: any,
  setIsOpen2: any
) {
  setIsOpen(true);
  setIsOpen1(false);
  setIsOpen2(false);
}

function openSignuppage(setIsOpen: any, setIsOpen1: any, setIsOpen2: any) {
  setIsOpen(false);
  setIsOpen1(true);
  setIsOpen2(false);
}

function openAccountpage(setIsOpen: any, setIsOpen1: any, setIsOpen2: any) {
  setIsOpen(false);
  setIsOpen1(false);
  setIsOpen2(true);
}
