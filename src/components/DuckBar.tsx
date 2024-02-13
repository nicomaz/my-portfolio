import DuckBarIcon from "./DuckBarIcon";

export default function DuckBar() {
  return (
    <div className="flex flex-row gap-5">
      <DuckBarIcon iconType="search" iconName="All" />
      <DuckBarIcon iconType="imagesmode" iconName="Images" />
      <DuckBarIcon iconType="play_arrow" iconName="Videos" />
    </div>
  );
}
