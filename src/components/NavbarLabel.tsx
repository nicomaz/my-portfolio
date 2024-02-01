interface Props {
  name: string;
}

export default function NavbarLabel({ name }: Props) {
  return (
    <div className="hidden sm:flex flex-row justify-center">
      <div className="bg-gray-200/[0.1] backdrop-blur-[1px] text-lg text-white rounded-2xl z-50 absolute bottom-20 px-4 py-1 ">
        {name}
      </div>
    </div>
  );
}
