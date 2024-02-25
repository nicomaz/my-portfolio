interface Props {
  setWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setWindowExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
  setWindowMinimised: React.Dispatch<React.SetStateAction<boolean>>;
  windowExpanded?: boolean;
}

export default function Buttons({
  setWindowOpen,
  setWindowExpanded,
  windowExpanded,
  setWindowMinimised,
}: Props) {
  return (
    <div className="gap-2 flex p-3 col-span-3">
      <button
        className="bg-red-500 rounded-2xl size-4 border-[0.5px] border-gray-400"
        onClick={() => {
          setWindowOpen(false);
        }}
      />
      <button
        className="bg-yellow-400 rounded-2xl size-4 border-[0.5px] border-gray-400"
        onClick={() => {
          setWindowMinimised(true);
        }}
      />
      {windowExpanded === undefined ? (
        <button className="bg-gray-500 rounded-2xl size-4 border-[0.5px] border-gray-400" />
      ) : (
        <button
          className="bg-green-500 rounded-2xl size-4 border-[0.5px] border-gray-400"
          onClick={() => {
            setWindowExpanded?.(!windowExpanded);
          }}
        />
      )}
    </div>
  );
}
