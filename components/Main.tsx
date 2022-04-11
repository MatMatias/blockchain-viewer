import { Fragment, FC } from "react";

interface Props {
  children: JSX.Element;
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <main className="w-full h-full flex flex-col justify-center items-center text-white bg-zinc-900">
        {children}
      </main>
    </Fragment>
  );
};
