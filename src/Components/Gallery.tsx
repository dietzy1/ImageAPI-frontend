import { imageType } from "../Pages/Home";

function Gallery1({ image }: { image: imageType }) {
  return (
    <div className="mb-12 rounded-lg text-white text-center antialiased">
      <img key={image.uuid} src={image.filepath} alt="" />

      <h1 className="font-bold">{image.title}</h1>
      <span>{image.tags}</span>
    </div>
  );
}

export default Gallery;

function Gallery({ image }: { image: imageType }) {
  return (
    <div className="w-full flex justify-center flex-wrap mb-12">
      <div className="relative flex-1 ">
        <img
          key={image.uuid}
          src={image.filepath}
          alt=""
          className="opacity-80 relative align-top hover:opacity-100  duration-[0.6] transition-opacity rounded-lg "
        />
        <div className="z-1 absolute top-0 right-0 w-full h-full text-white hover:translate-y-[-30px] transition-transform opacity-0 hover:opacity-100   ">
          <h1 className="font-bold text-center uppercase mt-10 lg:mt-20 opacity-100 xl:text-2xl lg:text-2xl text-base">
            {image.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
