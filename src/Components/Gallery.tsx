import { imageType } from "../Pages/Home";

function Gallery({ image }: { image: imageType }) {
  //I need to perform type checking here since image.tags.join is failing if image.tags is undefined
  return (
    <div className="shadow-lg text-white object-top relative">
      <img src={image.filepath} alt="" className="w-full mb-12 rounded-lg" />
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-red-800 font-semibold hover:backdrop-blur-sm filter backdrop-grayscale">
          <ul className="flex flex-col justify-center text-xs">
            <div className="">Title: {image.title}</div>
            <div>Tags: {image.tags.join(", ")}</div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
