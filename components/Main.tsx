import { Fragment, FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <main className="w-full h-full flex flex-col gap-y-5 py-5 justify-center items-center text-white bg-zinc-900">
        {children}
      </main>
    </Fragment>
  );
};
