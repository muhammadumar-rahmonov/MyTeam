import React, { useContext } from "react";
import { MyTeamContext } from "../Context";

const Ahero = () => {
  const { v5 } = useContext(MyTeamContext);
  return (
    <section className="py-[120px] px-[165px] flex items-start justify-between relative">
      <div className="gap-5">
        <h1 className="font-bold text-6xl">About</h1>
      </div>
      <div className="w-full sm:w-[730px] relative">
        <span className="w-12 h-1 absolute -top-10 left-0 bg-[#f67e7e]"></span>
        <p className="font-semibold text-lg">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </div>
      <div className="absolute right-0 bottom-0">{v5}</div>
    </section>
  );
};

export default Ahero;
