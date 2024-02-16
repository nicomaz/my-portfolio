interface Props {
  widgetName: string;
}

export default function TechnologyWidget({ widgetName }: Props) {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-md text-[0.8rem] text-gray-700 w-fit px-2 py-[1px] font-medium max-h-6 max-w-96  truncate text-nowrap">
      {widgetName}
    </div>
  );
}
