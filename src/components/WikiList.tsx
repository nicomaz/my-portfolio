import { skills } from "../utils/data";

interface Props {
  concern: string;
  id: string;
  title: string;
}

export default function WikiList({ concern, id, title }: Props) {
  return (
    <div>
      <h5 className="text-[0.95rem] font-semibold mt-1 pt-2" id={id}>
        {title}
      </h5>
      <ul className="grid grid-cols-3 list-disc ml-3">
        {skills.map(
          (skill) => skill.concern === concern && <li>{skill.name}</li>
        )}
      </ul>
    </div>
  );
}
