interface Props {
  setNotepadOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNoteExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  noteExpanded: boolean;
}

export default function Buttons({
  setNotepadOpen,
  setNoteExpanded,
  noteExpanded,
}: Props) {
  return (
    <div className="gap-2 flex p-3 col-span-3">
      <button
        className="bg-red-500 rounded-2xl size-4 border-[0.5px] border-gray-400"
        onClick={() => {
          setNotepadOpen(false);
        }}
      />
      <button className="bg-yellow-400 rounded-2xl size-4 border-[0.5px] border-gray-400" />
      <button
        className="bg-green-500 rounded-2xl size-4 border-[0.5px] border-gray-400"
        onClick={() => setNoteExpanded(!noteExpanded)}
      />
    </div>
  );
}
