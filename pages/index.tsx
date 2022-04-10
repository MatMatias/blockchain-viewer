import type { NextPage } from "next";
import { Fragment } from "react";
import { AppComponents } from "../app-components";
import { Components } from "../components";

const Home: NextPage = () => {
  return (
    <Fragment>
      <AppComponents.Navbar />
      <Components.Main children={<p>PLACEHOLDER</p>} />
    </Fragment>
  );
};

export default Home;
