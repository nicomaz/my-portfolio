interface Props {
  icon: string;
  name: string;
  alt: string;
}

export default function NavbarIcons({ icon, name, alt }: Props) {
  return (
    <div className="size-16 opacity-95 drop-shadow-md cursor-pointer">
      <img src={icon} alt={alt} />
    </div>
  );
}
