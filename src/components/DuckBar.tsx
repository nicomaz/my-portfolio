import DuckBarIcon from "./DuckBarIcon";

interface Props {
  setTabClicked: React.Dispatch<React.SetStateAction<string>>;
  tabClicked: string;
}

export default function DuckBar({ setTabClicked, tabClicked }: Props) {
  return (
    <div className="flex flex-row gap-5 ml-3 sm:ml-0">
      <DuckBarIcon
        iconType="search"
        iconName="All"
        tabClicked={tabClicked}
        setTabClicked={setTabClicked}
      />
      <DuckBarIcon
        iconType="imagesmode"
        iconName="Images"
        tabClicked={tabClicked}
        setTabClicked={setTabClicked}
      />
      <DuckBarIcon
        iconType="play_arrow"
        iconName="Videos"
        tabClicked={tabClicked}
        setTabClicked={setTabClicked}
      />
    </div>
  );
}
