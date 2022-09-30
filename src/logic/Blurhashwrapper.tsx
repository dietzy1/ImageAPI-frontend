import { useState } from "react";
import { imageType } from "../Pages/Home";
import { Blurhash, BlurhashCanvas } from "react-blurhash";
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
    <div>
      <LazyLoadImage
        key={image.uuid}
        src={image.filepath}
        height={image.height}
        width={image.width}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
      />
      {!isLoaded && isLoadStarted && (
        <Blurhash
          hash={image.blurhash}
          width={image.width}
          height={image.height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {/* <LazyLoadImage
        key={image.uuid}
        src={image.filepath}
        height={image.height}
        width={image.width}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
      />
      {!isLoaded && isLoadStarted && (
        <Blurhash
          hash={image.blurhash}
          width={image.width}
          height={image.height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )} */}
    </div>
  );
}

export default Blurhashwrapper;
