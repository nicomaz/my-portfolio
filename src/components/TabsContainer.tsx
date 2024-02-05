export default function TabsContainer() {
  return (
    <div className="h-[calc(100%-80px)] w-full bg-white flex flex-row gap-12 flex-wrap justify-center content-center">
      <div className="justify-center flex flex-col">
        <div className="min-w-36 max-w-36 min-h-36 max-h-36 bg-black rounded " />
        <span className=" text-center"> About Me</span>
      </div>
      <div className="justify-center flex flex-col">
        <div className="min-w-36 max-w-36 min-h-36 max-h-36 bg-black rounded" />
        <span className=" text-center"> Skills</span>
      </div>
      <div className="justify-center flex flex-col">
        <div className="min-w-36 max-w-36 min-h-36 max-h-36 bg-black rounded" />
        <span className=" text-center"> Projects</span>
      </div>
    </div>
  );
}
