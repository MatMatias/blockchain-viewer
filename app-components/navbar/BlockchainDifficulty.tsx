import { ChangeEvent, FC, useState } from "react";
import { boundBlockchainActions } from "../../redux/creators";

export const BlockchainDifficulty: FC = () => {
  const [difficulty, setDifficulty] = useState(0);
  const { initializeBlockchain } = boundBlockchainActions;

  const handleOnClick = (difficulty: number) => {
    initializeBlockchain(difficulty);
  };

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setDifficulty(parseInt(evt.target.value));
  };

  return (
    <div className="flex flex-row gap-x-2">
      <label className="pt-2" htmlFor="difficulty">
        Blockchain Initial Difficulty
      </label>
      <input className="text-black" type="number" onChange={handleOnChange} value={difficulty} />
      <button onClick={() => handleOnClick(difficulty)}>Initialize blockchain</button>
    </div>
  );
};
