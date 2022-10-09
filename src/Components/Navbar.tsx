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
      <nav className="text-white flex flex-row h-16 w-full fixed top-0 backdrop-blur-[46px] bg-darky/10 z-[999]">
        {/*This is a 3rd of the screen*/}
        <div className="flex flex-row justify-center items-center w-[33.33%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:h-[4rem] lg:w-[4rem] md:h-[3rem] md:w-[3rem] sm:h-[2rem] sm:w-[2rem] w-[2rem] h-[2rem]"
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
          <h1 className=" lg:text-5xl md:text-3xl sm:text-base text-xs font-bold text-greeny whitespace-nowrap">
            Pepe-Gallery
          </h1>
        </div>

        {/*This is a 3rd of the screen*/}
        <div className="flex flex-row justify-center items-center w-[33.33%] lg:p-8 md:p-4 sm:p-2">
          <Searchbar triggerParentUpdate={triggerParentUpdate} />
        </div>

        {/*This is a 3rd of the screen*/}
        <button className="z-[9999] absolute top-2 right-8 lg:hidden">
          <Hamburger onToggle={hamburgerMenu} />
        </button>
        {hamburger ? (
          <div className="fixed top-0 right-0 w-[100%] h-screen  bg-hybrid/[1]  z-[1000] ease-in-out duration-300' : 'ease-in-out duration-300 ">
            <ul className="pt-16 font-bold ">
              <ul className="bg-darky border-t border-gray-500 pb-16 border-b">
                <li className="p-6  hover:text-greeny">
                  <Link to="/"> Home </Link>
                </li>
                <hr className="mx-6 border-gray-500" />
                <li className="p-6  hover:text-greeny">
                  <Link to="/documentation"> Documentation </Link>
                </li>
                <hr className="mx-6 border-gray-500" />
                <li className="p-6  hover:text-greeny">
                  <Link to="/standoff"> Standoff</Link>
                </li>
                <hr className="mx-6 border-gray-500" />
                <li className="p-6  hover:text-greeny">
                  <Link to="/leaderboard"> Leaderboard </Link>
                </li>
                <hr className="mx-6 border-gray-500 " />
              </ul>
              {state.user ? (
                <button
                  className="py-3 m-10 w-[33.33%] hover:text-greeny whitespace-nowrap bg-white rounded-xl border border-gray-500 text-darky"
                  onClick={onsubmitfunc}
                >
                  Logout
                </button>
              ) : (
                <ul className="flex justify-center">
                  <button
                    className=" py-3 m-10 w-[33.33%] mx-auto hover:text-greeny whitespace-nowrap bg-white rounded-xl border border-gray-500 text-darky "
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
                    className="py-3 w-[80%] bg-greeny rounded-xl hover:text-greeny hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30 whitespace-nowrap text-darky"
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
                    className="py-3 w-[80%]  bg-greeny rounded-xl hover:text-greeny hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30 whitespace-nowrap text-darky"
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
        <div className=" flex-row justify-center items-center w-[33.33%] overflow-hidden hidden lg:flex xl:flex ">
          <span className="lg:p-2 md:p-1 hover:text-greeny">
            <Link to="/"> Home </Link>
          </span>
          <span className="lg:p-2 md:p-1 hover:text-greeny">
            <Link to="/documentation"> Documentation </Link>
          </span>
          <span className="lg:p-2 md:p-1 hover:text-greeny">
            <Link to="/standoff"> Standoff</Link>
          </span>
          <span className="lg:p-2 md:p-1 hover:text-greeny">
            <Link to="/leaderboard"> Leaderboard </Link>
          </span>

          <div className="flex items-center space-x-2">
            {state.user ? (
              <button
                className="py-6 hover:text-greeny whitespace-nowrap w-20"
                onClick={onsubmitfunc}
              >
                Logout
              </button>
            ) : (
              <ul>
                <button
                  className=" py-6 hover:text-greeny whitespace-nowrap w-20"
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
                  className="py-2 px-2 bg-greeny rounded-xl hover:text-greeny hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30 whitespace-nowrap w-20"
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
                  className="py-3 px-2 bg-greeny rounded-xl hover:text-greeny hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30 whitespace-nowrap w-20"
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

export const NavbarNoSearch = ({ triggerParentUpdate }: any) => {
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
      <nav className="text-white flex flex-row h-16 w-full fixed top-0 backdrop-blur-[46px] bg-darky/10 z-[999]">
        {/*This is a 3rd of the screen*/}
        <div className="flex flex-row justify-center items-center w-[33.33%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:h-[4rem] lg:w-[4rem] md:h-[3rem] md:w-[3rem] sm:h-[2rem] sm:w-[2rem] w-[2rem] h-[2rem]"
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
          <h1 className=" lg:text-5xl md:text-3xl sm:text-base text-xs font-bold text-greeny whitespace-nowrap">
            Pepe-Gallery
          </h1>
        </div>

        {/*This is a 3rd of the screen*/}
        <div className="flex flex-row justify-center items-center w-[33.33%] lg:p-8 md:p-4 sm:p-2"></div>

        {/*This is a 3rd of the screen*/}
        <button className="z-[9999] absolute top-2 right-8 lg:hidden">
          <Hamburger onToggle={hamburgerMenu} />
        </button>
        {hamburger ? (
          <div className="fixed top-0 right-0 w-[100%] h-screen  bg-hybrid/[1]  z-[1000] ease-in-out duration-300' : 'ease-in-out duration-300 ">
            <ul className="pt-16 font-bold ">
              <ul className="bg-darky border-t border-gray-500 pb-16 border-b">
                <li className="p-6  hover:text-greeny">
                  <Link to="/"> Home </Link>
                </li>
                <hr className="mx-6 border-gray-500" />
                <li className="p-6  hover:text-greeny">
                  <Link to="/documentation"> Documentation </Link>
                </li>
                <hr className="mx-6 border-gray-500" />
                <li className="p-6  hover:text-greeny">
                  <Link to="/standoff"> Standoff</Link>
                </li>
                <hr className="mx-6 border-gray-500" />
                <li className="p-6  hover:text-greeny">
                  <Link to="/leaderboard"> Leaderboard </Link>
                </li>
                <hr className="mx-6 border-gray-500 " />
              </ul>
              {state.user ? (
                <button
                  className="py-3 m-10 w-[33.33%] hover:text-greeny whitespace-nowrap bg-white rounded-xl border border-gray-500 text-darky"
                  onClick={onsubmitfunc}
                >
                  Logout
                </button>
              ) : (
                <ul className="flex justify-center">
                  <button
                    className=" py-3 m-10 w-[33.33%] mx-auto hover:text-greeny whitespace-nowrap bg-white rounded-xl border border-gray-500 text-darky "
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
                    className="py-3 w-[80%] bg-greeny rounded-xl hover:text-greeny hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30 whitespace-nowrap text-darky"
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
                    className="py-3 w-[80%]  bg-greeny rounded-xl hover:text-greeny hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30 whitespace-nowrap text-darky"
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
        <div className=" flex-row justify-center items-center w-[33.33%] overflow-hidden hidden lg:flex xl:flex ">
          <span className="lg:p-2 md:p-1 hover:text-greeny">
            <Link to="/"> Home </Link>
          </span>
          <span className="lg:p-2 md:p-1 hover:text-greeny">
            <Link to="/documentation"> Documentation </Link>
          </span>
          <span className="lg:p-2 md:p-1 hover:text-greeny">
            <Link to="/standoff"> Standoff</Link>
          </span>
          <span className="lg:p-2 md:p-1 hover:text-greeny">
            <Link to="/leaderboard"> Leaderboard </Link>
          </span>

          <div className="flex items-center space-x-2">
            {state.user ? (
              <button
                className="py-6 hover:text-greeny whitespace-nowrap w-20"
                onClick={onsubmitfunc}
              >
                Logout
              </button>
            ) : (
              <ul>
                <button
                  className=" py-6 hover:text-greeny whitespace-nowrap w-20"
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
                  className="py-2 px-2 bg-greeny rounded-xl hover:text-greeny hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30 whitespace-nowrap w-20"
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
                  className="py-3 px-2 bg-greeny rounded-xl hover:text-greeny hover:bg-white shadow-lg shadow-greeny/50 hover:shadow-greeny/30 whitespace-nowrap w-20"
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
