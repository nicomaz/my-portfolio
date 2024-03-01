interface Props {
  image: string;
  title: string;
  link: string;
  github?: string;
  alt: string;
  setImageClicked: React.Dispatch<React.SetStateAction<number>>;
  setExpandImage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileExpandedImage({
  image,
  title,
  link,
  github,
  alt,
  setExpandImage,
  setImageClicked,
}: Props) {
  return (
    <div className="absolute w-screen h-[calc(100vh-19.6rem)] bg-black top-10 left-0 overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="object-contain w-screen h-[calc(100vh-15.1rem)]"
      />
      <button
        className="absolute text-gray-400 bg-gray-700/[0.4] top-0 right-1 h-10 w-10 text-3xl rounded-full mt-2 inline-flex items-center justify-center pb-2 mr-2 font-light"
        onClick={() => {
          setImageClicked(0);
          setExpandImage(false);
        }}
      >
        x
      </button>
      <div className="w-screen h-[5rem] absolute bottom-0 bg-gray-900/[0.9] flex flex-rows justify-evenly pt-3">
        <a href={link} target="_blank" className="flex flex-col mt-1">
          <h4 className="text-white text-base">{title}</h4>
          <h5 className="text-gray-400 text-xs">{link}</h5>
        </a>
        {github && (
          <a href={github} target="_blank">
            <button className="text-white text-xs bg-gray-700 w-fit h-fit rounded-md p-1.5 mt-3">
              Go to GitHub
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
