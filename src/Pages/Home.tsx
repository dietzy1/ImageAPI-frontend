import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import FrontGallery from "../Components/FrontGallery";
import Gallery from "../Components/Gallery";
import Text from "../Components/Text";
import Footer from "../Components/Footer";
import { refreshSessionfunc } from "../logic/fetch";
import { useGlobalState } from "../logic/context";

import "../index.css";

export type imageType = {
  title: string;
  uuid: string;
  tags: Array<string>;
  created_at: string;
  filepath: string;
  filesize: number;
};

function Home() {
  const [images, setImages] = useState<imageType[]>({} as imageType[]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [state, dispatch] = useGlobalState();

  const updateQueryState = (state: any) => {
    console.log("updateQueryState");
    setQuery(state);
    console.log(query);
  };

  useEffect(() => {
    onsubmit();
    if (query === "") {
      getImagesEmpty();
    } else getImages(query);
  }, [query]);

  //Hardcoded images to display something to gallery by default
  const getImagesEmpty = async () => {
    try {
      const res = await fetch(
        `https://imageapi-production.up.railway.app/api/v0/images/random/?quantity=40&key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "GET",
        }
      );

      setImages(await res.json());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    console.log(images);
  };

  //Fetches images from the server
  const getImages = async (query: string) => {
    try {
      const res = await fetch(
        `https://imageapi-production.up.railway.app/api/v0/images/tags/${query}?quantity=25&key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "GET",
        }
      );
      setImages(await res.json());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  async function onsubmit() {
    const ok = await refreshSessionfunc();
    if (ok) {
      dispatch({ user: true });
      console.log(state.user);
    }
    if (!ok) {
      dispatch({ user: false });
      console.log(state.user);
    }
  }

  return (
    <div>
      <div className="h-screen">
        <Navbar triggerParentUpdate={updateQueryState} />
        <Text />
        <FrontGallery />
        <div>
          {!loading && images.length === 0 && (
            <div>
              <h1 className="text greeny text-center text-xl">
                Unable to find any images based on current search query.
              </h1>
            </div>
          )}
          {loading ? (
            <div>
              <div className="text-white text-3xl text-center">
                Use the search bar to find your favorite pepe!
              </div>
              <div className="mt-3 justify-center flex items-center">
                <hr className="mt-3 sm:mx-auto w-[38rem]" />
              </div>
            </div>
          ) : (
            <div>
              <div className="text-white text-3xl text-center">
                Use the search bar to find your favorite pepe!
              </div>
              <div className="text-greeny text-center text-xl">
                Found {images.length} pepes for the tag "{query}" sorted
                randomly
              </div>
              <div className="mt-3 justify-center flex items-center">
                <hr className="mt-3 sm:mx-auto w-[38rem]" />
              </div>

              <div className="columns-5 pt-10 px-24 pb-24">
                {images.map((image) => (
                  <Gallery key={image.uuid} image={image} />
                ))}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
