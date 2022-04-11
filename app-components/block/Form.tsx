import { FC } from "react";

export const Form: FC = () => {
  return (
    <form className="flex flex-col bg-zinc-800 gap-y-5 py-10 px-10 shadow-lg items-center block rounded-lg drop-shadow-2xl">
      <div className="flex flex-row gap-x-3">
        <label className="text-2xl">Data</label>
        <input type="text" />
      </div>
      <button className="bg-zinc-700 p-2">ADD NEW BLOCK</button>
    </form>
  );
};
