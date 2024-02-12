import personalPhoto from "../assets/personal.jpeg";
import CV from "../assets/Nicola_Mazuryk_CV.pdf";

export default function WikiSidebar() {
  return (
    <div className="bg-gray-200 w-56 h-[45rem] border-[0.5px] border-gray-800 text-center p-1 flex flex-col items-center">
      <h3 className="font-semibold">Nicola Mazuryk</h3>
      <img src={personalPhoto} alt="girl smiling" className="px-4 py-1" />
      <h5 className="text-xs leading-tight font-bold w-[95%] h-content bg-indigo-200 justify-center my-0.5">
        Trainee Software Developer
      </h5>
      <h6 className="text-xs font-bold tracking-tight mt-0.5">Northcoders</h6>
      <span className="text-[0.70rem] my-0.5">October 2023 — January 2024</span>
      <span className="text-xs mb-0.5">
        Acquired transferable programming skills in a comprehensive,
        industry-led 13-week Software Development Bootcamp.
      </span>
      <h5 className="text-xs leading-tight font-bold w-[95%] h-content bg-indigo-200 justify-center mb-0.5 mt-2">
        BA Modern History and Politics
      </h5>
      <h6 className="text-xs font-bold tracking-tight mt-0.5">
        University of Manchester
      </h6>
      <span className="text-[0.70rem] my-0.5">September 2020 — June 2023</span>
      <span className="text-xs mb-0.5">
        Researched, collected and analysed data to argue for improvements,
        changes and explanations of complex systems.
      </span>
      <h5 className="text-xs leading-tight font-bold w-[95%] h-content bg-indigo-200 justify-center my-0.5">
        Personal Details
      </h5>
      <div className="grid grid-cols-2 text-xs text-left w-full ml-3 mt-0.5">
        <h6 className="font-bold">Located</h6>
        <p>Bedfordshire</p>
        <h6 className="font-bold my-0.5">Interests</h6>
        <p className="my-0.5">
          Digital and traditional art, ethics in software development, A.I.,
          open-source software
        </p>
      </div>
      <h5 className="text-xs leading-tight font-bold w-[95%] h-content bg-indigo-200 justify-center my-0.5">
        Contact Details
      </h5>
      <div className="grid grid-cols-2 text-xs text-left w-full ml-3 my-0.5">
        <span className="font-bold">LinkedIn</span>
        <span className="text-blue-800 font-medium">
          <a href="https://www.linkedin.com/in/nicolamazuryk/" target="_blank">
            /NicolaMazuryk
          </a>
        </span>
        <span className="font-bold">Github</span>
        <span className="text-blue-800 font-medium">
          <a href="https://github.com/nicomaz" target="_blank">
            /nicomaz
          </a>
        </span>
      </div>
      <h5 className="text-xs leading-tight font-bold w-[95%] h-content bg-indigo-200 justify-center my-0.5">
        Download my resume
      </h5>
      <span className="text-xs text-blue-800 font-medium my-0.5">
        <a href={CV} download="Nicola_Mazuryk_CV.pdf">
          Click to download my Resume
        </a>
      </span>
    </div>
  );
}
