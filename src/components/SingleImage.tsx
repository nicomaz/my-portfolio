interface Props {
  image: string;
  title: string;
  link: string;
  github?: string;
  alt: string;
  id: number;
  setImageClicked: React.Dispatch<React.SetStateAction<number>>;
  browserExpanded: boolean;
}

export default function SingleImage({
  image,
  title,
  id,
  link,
  alt,
  browserExpanded,
  setImageClicked,
}: Props) {
  return (
    <div
      className="grid cursor-pointer text-center justify-center"
      onClick={() => setImageClicked(id)}
    >
      <div
        className={`${
          browserExpanded ? "sm:h-52 sm:w-64" : "sm:h-32 sm:w-44"
        } overflow-hidden grid w-44 h-24`}
      >
        <img src={image} alt={alt} className="object-scale-down" />
      </div>
      <h5 className="font-bold text-sm truncate">{title}</h5>
      <h6 className="text-xs">{link}</h6>
    </div>
  );
}
