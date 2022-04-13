import type { NextPage } from "next";
import { AppComponents } from "../app-components";
import { Components } from "../components";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Components.Header>
        <AppComponents.Navbar />
      </Components.Header>

      <Components.Main>
        <AppComponents.Blockchain />
        <AppComponents.Form />
      </Components.Main>
    </div>
  );
};

export default Home;
