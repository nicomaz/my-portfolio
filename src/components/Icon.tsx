interface Props {
  username: string;
  userIcon: string;
  iconAlt: string;
}

export default function Icon({ username, userIcon, iconAlt }: Props) {
  return (
    <div className={`min-w-[360px] items-center flex flex-col cursor-pointer`}>
      <img
        src={userIcon}
        alt={iconAlt}
        className="size-28 rounded-2xl drop-shadow-lrg opacity-95"
      />

      <h1 className="text-black text-lg font-medium drop-shadow-xl dark:text-white pt-1">
        {username}
      </h1>
    </div>
  );
}
