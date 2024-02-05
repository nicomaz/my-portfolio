interface Props {
  tabName: string;
}

export default function IndivTab({ tabName }: Props) {
  return (
    <div className="justify-center flex flex-col">
      <div className="min-w-36 max-w-36 min-h-36 max-h-36 bg-black rounded" />
      <span className=" text-center"> {tabName}</span>
    </div>
  );
}
