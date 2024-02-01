import { useState } from "react";
import NavbarLabel from "./NavbarLabel";

interface Props {
  icon: string;
  name: string;
  alt: string;
}

export default function NavbarIcons({ icon, name, alt }: Props) {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <>
      {showLabel && <NavbarLabel name={name} />}
      <div
        className="size-16 opacity-95 drop-shadow-md cursor-pointer sm:mx-4"
        onMouseOver={() => {
          setShowLabel(true);
        }}
        onMouseLeave={() => {
          setShowLabel(false);
        }}
      >
        <img src={icon} alt={alt} />
      </div>
    </>
  );
}
