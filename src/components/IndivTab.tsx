interface Props {
  tabName: string;
  website: string;
  image: string;
  alt: string;
  activeTab: string;
}

export default function IndivTab({
  tabName,
  image,
  alt,
  activeTab,
  website,
}: Props) {
  return (
    <div
      className={` ${
        activeTab === tabName
          ? "border-blue-500 border-2 rounded-md"
          : "border-none"
      } justify-center flex flex-col`}
    >
      <div className="relative min-w-36 max-h-36 rounded-md overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="object-contain min-w-36 max-w-36 rounded-md"
        />
        <div className="absolute w-36 h-6 dark:bg-gray-900/[0.9] bg-[#ccd4e8]/[0.9] pt-1 top-0 text-xs pl-2 truncate">
          {tabName}
          {website}
        </div>
      </div>
    </div>
  );
}
