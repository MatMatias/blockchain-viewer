import { FC } from "react";

export const BlockchainDifficulty: FC = () => {
  return (
    <div className="flex flex-row gap-x-2">
      <h3 className="pt-2">Blockchain Initial Difficulty</h3>
      <input type="number" />
    </div>
  );
};
