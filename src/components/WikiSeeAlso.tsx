interface Props {
  id: string;
  url: string;
  title: string;
  body: string;
}

export default function WikiSeeAlso({ id, url, title, body }: Props) {
  return (
    <li className="mb-2" id={id}>
      <a href={url} target="_blank" className="text-blue-600 font-semibold">
        {title}
      </a>
      <p>{body}</p>
    </li>
  );
}
