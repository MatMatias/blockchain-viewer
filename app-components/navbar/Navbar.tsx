import Link from "next/link";
import { Fragment, FC } from "react";
import { Components } from "../../components";
import { BlockchainDifficulty } from "./BlockchainDifficulty";

export const Navbar: FC = () => {
  return (
    <Fragment>
      <Components.Header>
        <Link href="/">
          <a>
            <h1 className="text-4xl">Blockchain Viewer</h1>
          </a>
        </Link>
        <BlockchainDifficulty />
      </Components.Header>
    </Fragment>
  );
};
