import { Fragment, FC } from "react";

interface Props {
  children: JSX.Element;
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <main className="h-screen flex flex-col bg-darkgray text-white">{children}</main>
    </Fragment>
  );
};
