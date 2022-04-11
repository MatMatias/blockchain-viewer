import { Fragment, FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Header: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <header className="w-full p-5 flex flex-row justify-between bg-zinc-800 text-white p-4">
        {children}
      </header>
    </Fragment>
  );
};
