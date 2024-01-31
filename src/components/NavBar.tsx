interface Props {
  appOpen: string;
}
export default function NavBar({ appOpen = "Portfolio" }: Props) {
  return (
    <div className="bg-white/[0.1] backdrop-blur-[1px] h-8 w-screen shadow drop-shadow-lg backdrop-blur-[3px] h-shadow">
      <div className="flex flex-row justify-between pt-1 w-screen px-6 absolute ">
        <span className="absolute top-1 left-16 text-base font-semibold dark:text-white">{appOpen}</span>
      </div>
    </div>
  );
}
