import Icon from "../components/Icon";
import guestIcon from "../assets/windows-suitcase.png";
import mainIcon from "../assets/mezzanine.jpg";

export default function StartUp() {
  return (
    <div className="aurora-outer w-screen h-screen">
      <div className="aurora-inner w-screen h-screen sm:pb-24">
        <div className="flex flex-row justify-center gap-2 w-full h-full items-center flex-wrap">
          <Icon
            username="Nicola Mazuryk"
            userIcon={mainIcon}
            iconAlt="cover of Mezzanine by Massive Attack"
          />
          <Icon username="Guest" userIcon={guestIcon} iconAlt="suitcase" />
        </div>
      </div>
    </div>
  );
}
