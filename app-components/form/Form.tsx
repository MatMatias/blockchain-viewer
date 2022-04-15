import { ChangeEvent, FC, useState } from "react";
import { boundBlockchainActions } from "../../redux/creators";

export const Form: FC = () => {
  const [blockData, setBlockData] = useState("");
  const { addBlock } = boundBlockchainActions;

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBlockData(evt.target.value.toString());
  };

  const handleOnClick = (blockData: string) => {
    addBlock(blockData);
  };

  return (
    <div className="flex flex-col gap-y-5 items-center bg-zinc-800 card px-10 py-10">
      <div className="flex flex-row gap-x-3">
        <label className="text-2xl">Data</label>
        <input className="text-black" type="text" value={blockData} onChange={handleOnChange} />
      </div>
      <button className="button" onClick={() => handleOnClick(blockData)}>
        ADD NEW BLOCK
      </button>
    </div>
  );
};
