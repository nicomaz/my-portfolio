interface Props {
  name: string;
}

export default function NavbarLabel({ name }: Props) {
  return (
    <div className="hidden sm:flex flex-row justify-center">
      <div className="dark:bg-white/[0.2] bg-gray-200/[0.3] backdrop-blur-[1px] text-base text-black rounded-2xl z-50 absolute bottom-[85px] px-4 py-1 dark:text-white">
        {name}
      </div>
    </div>
  );
}
