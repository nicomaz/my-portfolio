interface Props {
  image: string;
  title: string;
  link: string;
  github?: string;
  alt: string;
  id: number;
  setImageClicked: React.Dispatch<React.SetStateAction<number>>;
}

export default function SingleImage({
  image,
  title,
  id,
  link,
  alt,
  setImageClicked,
}: Props) {
  return (
    <div className={`grid `} onClick={() => setImageClicked(id)}>
      <div className="h-52 w-64 overflow-hidden grid">
        <img src={image} alt={alt} className="object-scale-down" />
      </div>
      <h5 className="font-bold text-sm">{title}</h5>
      <h6 className="text-xs">{link}</h6>
    </div>
  );
}
