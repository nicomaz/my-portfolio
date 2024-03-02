interface Props {
  widgetName: string;
}

export default function TechnologyWidget({ widgetName }: Props) {
  return (
    <div
      className={`dark:text-gray-200 rounded-md text-[0.8rem] text-gray-700 w-fit px-2 py-[1px] font-medium max-h-6 max-w-96 truncate text-nowrap ${
        widgetName === "GitHub"
          ? "bg-blue-200 dark:bg-blue-700 cursor-pointer"
          : "bg-gray-200 dark:bg-gray-700 cursor-default"
      }`}
    >
      {widgetName}
    </div>
  );
}
