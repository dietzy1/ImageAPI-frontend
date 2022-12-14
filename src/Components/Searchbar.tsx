import { useState } from "react";
import { Link } from "react-scroll";

const Searchbar = ({ triggerParentUpdate }: any) => {
  const [query, setQuery] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    triggerParentUpdate(query);
  };

  return (
    <div className="rounded w-full">
      <form onSubmit={onSubmit}>
        <div className="flex items-center border-b-2  py-2 bg-white rounded-xl">
          <svg
            aria-hidden="true"
            className="w-6 h-6 ml-3 text-gray-500 dark:text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <input
            onChange={(e) => setQuery(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-500 lg:mr-2 mr-1 py-1 px-2 leading-tight focus:outline-none rounded-md text-xs"
            type="text"
            placeholder="Aa"
          />
          {/*query doesn't work with scrolling links wrapping*/}
          {/*     <Link to="gallery" spy={true} smooth={true} offset={-90}> */}
          <button
            className="flex-shrink-0 focus:outline-none focus:ring-greeny font-medium  bg-greeny hover:bg-teal-700 lg:mr-4 mr-1 hover:border-teal-700  text-white py-1 px-1 lg:px-2 rounded-lg sm:text-sm text-xs"
            type="submit"
          >
            <Link to="gallery" spy={true} smooth={true} offset={-90}>
              Search
            </Link>
          </button>
          {/*     </Link> */}
        </div>
      </form>
    </div>
  );
};
export default Searchbar;
