import { ChangeEvent, FC, useState } from "react";
import { boundBlockchainActions } from "../../../redux/creators";

export const BlockchainDifficulty: FC = () => {
  const [difficultyValue, setDifficultyValue] = useState(0);
  const { setDifficulty } = boundBlockchainActions;

  const handleOnClick = (difficulty: number) => {
    setDifficulty(difficulty);
  };

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setDifficultyValue(parseInt(evt.target.value));
  };

  return (
    <div className="flex flex-row gap-x-2">
      <label className="pt-2" htmlFor="difficultyValue">
        Blockchain Initial Difficulty
      </label>
      <input
        className="text-black"
        type="number"
        onChange={handleOnChange}
        value={difficultyValue}
      />
      <button className="button" onClick={() => handleOnClick(difficultyValue)}>
        Initialize blockchain
      </button>
    </div>
  );
};
