import { Fragment } from "react";
import type { NextPage } from "next";
import { AppComponents } from "../app-components";

const Home: NextPage = () => {
  return (
    <Fragment>
      <header className="w-full p-5 flex flex-row justify-between bg-zinc-800 text-white p-4">
        <AppComponents.Navbar />
      </header>

      <main className="w-full h-full flex flex-col gap-y-5 py-40 justify-center items-center text-white bg-zinc-900">
        <AppComponents.Blockchain />
        <AppComponents.Form />
      </main>
    </Fragment>
  );
};

export default Home;
