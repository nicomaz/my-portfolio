interface Props {
  setShowTabs: React.Dispatch<React.SetStateAction<boolean>>;
  showTabs: boolean;
}

export default function BrowserMenu({ setShowTabs, showTabs }: Props) {
  return (
    <div className="w-full h-[2.5rem] absolute bottom-0 rounded-b-lg bg-[#ccd4e8] dark:bg-slate-600 dark:text-gray-300">
      <div className="bottom-1 left-3 absolute">
        <span className="material-symbols-outlined mr-4">arrow_back_ios</span>
        <span className="material-symbols-outlined ml-6">
          arrow_forward_ios
        </span>
      </div>
      <div
        className="h-6 w-9 border-black border-[2px] rounded text-center leading-5 absolute bottom-2.5 right-3 dark:border-gray-400"
        onClick={() => {
          setShowTabs(!showTabs);
        }}
      >
        <span className="text-center font-medium">3</span>
      </div>
    </div>
  );
}
