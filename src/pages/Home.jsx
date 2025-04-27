import React, { useContext } from "react";
import { Hero } from "../components";
import { MyTeamContext } from "../Context";
import { Section } from "../sections";

const Home = () => {
  const { vector, vector2, dot, blank } = useContext(MyTeamContext);
  return (
    <main>
      <div className="relative top-30 w-24 h-24">
        {vector} {dot} {blank}
      </div>
      <Hero />
      <div className="ml-[1100px]"> {vector2}</div>
      <Section />
    </main>
  );
};

export default Home;
