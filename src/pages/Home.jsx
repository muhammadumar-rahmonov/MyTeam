import React, { useContext } from "react";
import { Hero } from "../components";
import { MyTeamContext } from "../Context";
import { FooterSection, Section, Section2 } from "../sections";

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
      <Section2 />
      <FooterSection />
    </main>
  );
};

export default Home;
