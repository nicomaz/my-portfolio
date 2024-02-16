interface Props {
  iconType: string;
  iconName: string;
  setTabClicked: React.Dispatch<React.SetStateAction<string>>;
  tabClicked: string;
}

export default function DuckBarIcon({
  iconType,
  iconName,
  setTabClicked,
  tabClicked,
}: Props) {
  return (
    <button
      className={` ${
        tabClicked === iconName
          ? "border-blue-600 text-blue-600"
          : "border-b-white text-gray-500"
      } w-fit flex flex-row items-center hover:text-gray-800 dark:text-gray-200 focus:border-b-2 focus:border-blue-600 border-b-2`}
      onClick={() => setTabClicked(iconName)}
    >
      <span
        className={`${
          iconName === "Videos" ? "text-2xl ml-[-6px]" : "text-lg"
        } material-symbols-outlined`}
      >
        {iconType}
      </span>
      <span
        className={`${
          iconName === "Videos" ? "ml-[-3px]" : "ml-1"
        } text-xs font-montserrat font-semibold tracking-tight`}
      >
        {iconName}
      </span>
    </button>
  );
}
