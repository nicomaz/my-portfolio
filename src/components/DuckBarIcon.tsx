interface Props {
  iconType: string;
  iconName: string;
}
export default function DuckBarIcon({ iconType, iconName }: Props) {
  return (
    <button className="w-fit flex flex-row items-center text-gray-500 hover:text-gray-800 dark:text-gray-200 focus:text-blue-600 focus:border-b-2 focus:border-blue-600 border-b-2 border-b-white">
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
