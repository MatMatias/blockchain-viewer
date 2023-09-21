import Link from "next/link";
import { Fragment, FC } from "react";
import { BlockchainDifficulty } from "./blockchain-difficulty";

export const Navbar: FC = (): JSX.Element => {
  return (
    <Fragment>
      <Link href="/">
        <a>
          <h1 className="text-4xl">Blockchain Viewer</h1>
        </a>
      </Link>
      <BlockchainDifficulty />
    </Fragment>
  );
};
