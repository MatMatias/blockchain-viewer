import type { NextPage } from "next";
import { Fragment } from "react";
import { AppComponents } from "../app-components";
import { Components } from "../components";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <AppComponents.Navbar />
      <Components.Main>
        <AppComponents.Block.Form />
      </Components.Main>
    </div>
  );
};

export default Home;
