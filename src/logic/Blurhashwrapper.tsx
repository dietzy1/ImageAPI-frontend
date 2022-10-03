import { useState } from "react";
import { imageType } from "../Pages/Home";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Blurhashwrapper({ image }: { image: imageType }) {
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    setLoadStarted(true);
  };

  return (
    <div className="relative w-full h-full">
      <div className=" z-100 top-0 left-0">
        <LazyLoadImage
          id={image.uuid}
          key={image.uuid}
          src={image.filepath}
          height={image.height}
          width={image.width}
          onLoad={handleLoad}
          beforeLoad={handleLoadStarted}
        />
      </div>
      {!isLoaded && isLoadStarted && (
        <div className="absolute z-10 top-0 left-0">
          <BlurhashCanvas
            className="w-full h-full"
            hash={image.blurhash}
            width={image.width}
            height={image.height}
            punch={1}
          />
        </div>
      )}
    </div>
  );
}

export default Blurhashwrapper;
