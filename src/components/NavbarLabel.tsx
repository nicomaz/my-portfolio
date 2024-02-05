interface Props {
  name: string;
}

export default function NavbarLabel({ name }: Props) {
  return (
    <div className="hidden sm:flex flex-row justify-center">
      <div className="dark:bg-slate-800/[0.6] bg-blue-200/[0.7] backdrop-blur-[1px] text-base text-black rounded-2xl z-50 absolute bottom-[85px] px-4 py-1 dark:text-white">
        {name}
      </div>
    </div>
  );
}
