interface Props {
  image: string;
  title: string;
  link: string;
  github?: string;
  alt: string;
}

export default function ExpandedImage({
  image,
  title,
  link,
  github,
  alt,
}: Props) {
  return (
    <div className="h-[30rem] bg-slate-900 dark:bg-slate-950 grid order-2 mr-12">
      <div className="flex justify-center justify-evenly mx-96">
        <div className="h-[30rem] w-[13rem] flex justify-center">
          <img src={image} alt={alt} className="object-contain" />
        </div>
        <div className="flex flex-col justify-center">
          <a href={link} target="_blank">
            <h4 className="text-white text-xl mb-2">{title}</h4>
            <h5 className="text-gray-400 text-sm">{link}</h5>
          </a>
          {github && (
            <a href={github} target="_blank">
              <button className="text-white bg-gray-700 w-fit h-fit rounded-md p-1.5 mt-3">
                Go to GitHub
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
