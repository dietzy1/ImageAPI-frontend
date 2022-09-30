import { useEffect, useState, useCallback } from "react";
import Navbar from "../Components/Navbar";
import Imageslider from "../Components/Imageslider";
import Gallery from "../Components/Gallery";
import Text from "../Components/Text";
import Footer from "../Components/Footer";
import { refreshSessionfunc } from "../logic/fetch";
import { useGlobalState } from "../logic/context";

import "../index.css";

export interface imageType {
  title: string;
  uuid: string;
  tags: Array<string>;
  created_at: string;
  filepath: string;
  filesize: number;
  width: number;
  height: number;
  blurhash: string;
}

//I think it might be creating 2 requests one prior to the query being initialized
//I need to find out why it returns all of the images when the query clearly only asks for 1 image to be returned
function Home() {
  const [images, setImages] = useState<imageType[]>({} as imageType[]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [dispatch] = useGlobalState();

  const updateQueryState = (state: string) => {
    setQuery(state);
  };

  const checkAuth = useCallback(async () => {
    const ok = await refreshSessionfunc();
    if (ok) {
      dispatch({ user: true });
    }
    if (!ok) {
      dispatch({ user: false });
    }
  }, [dispatch]);

  //Hardcoded images to display something to gallery by default
  const getImagesNoQuery = useCallback(async () => {
    try {
      const res = await fetch(
        // `https://imageapi-production.up.railway.app/api/v0/images/random/?quantity=40&key=${process.env.REACT_APP_API_KEY}`,
        `http://localhost:8000/api/v0/images/random/?quantity=40&key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "GET",
        }
      );
      setImages(await res.json());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setImages([]);
    }
  }, [setImages, setLoading]);

  //Fetches images from the server
  const getImages = useCallback(
    async (query: string) => {
      try {
        const res = await fetch(
          //`https://imageapi-production.up.railway.app/api/v0/images/tags/${query}?quantity=25&key=${process.env.REACT_APP_API_KEY}`,
          `http://localhost:8000/api/v0/images/tags/${query}?quantity=25&key=${process.env.REACT_APP_API_KEY}`,
          {
            method: "GET",
          }
        );
        setImages(await res.json());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setImages([]);
      }
    },
    [setImages, setLoading]
  );

  useEffect(() => {
    checkAuth();
    if (query === "") {
      getImagesNoQuery();
    } else
      try {
        getImages(query);
      } catch (error) {
        console.log(error);
      }
  }, [query, checkAuth, getImagesNoQuery, getImages]);

  /*  async function onsubmit() {
    const ok = await refreshSessionfunc();
    if (ok) {
      dispatch({ user: true });
    }
    if (!ok) {
      dispatch({ user: false });
    }
  } */

  return (
    <div>
      <div className="h-screen">
        <Navbar triggerParentUpdate={updateQueryState} />
        <Text />
        <Imageslider />

        <div id="gallery" className="text-white text-3xl text-center">
          Use the search bar to find your favorite pepe!
        </div>

        {loading ? (
          <div>
            <div className="mt-3 justify-center flex items-center">
              <hr className="mt-3 sm:mx-auto w-[38rem]" />
            </div>
          </div>
        ) : (
          <div>
            {/*Empty query check*/}
            {query === "" ? (
              <div className="text-center text-xl invisible">
                Invisible placeholder text
              </div>
            ) : (
              <div>
                {images.length === 1 ? (
                  <div className="text-greeny text-center text-xl">
                    Database contains {images.length} pepe with the tag "{query}
                    "
                  </div>
                ) : (
                  <div className="text-greeny text-center text-xl">
                    Database contains {images.length} pepes with the tag "
                    {query}"
                  </div>
                )}
              </div>
            )}

            <div className="mt-3 justify-center flex items-center">
              <hr className="mt-3 sm:mx-auto w-[38rem]" />
            </div>

            {images.length !== 0 && (
              <div className="columns-5 pt-10 px-24 pb-24">
                {images.map((image) => (
                  <Gallery key={image.uuid} image={image} />
                ))}
              </div>
            )}
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default Home;
