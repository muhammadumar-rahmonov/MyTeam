import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyTeamContext } from "../Context";

const FooterSection = () => {
  const { v4 } = useContext(MyTeamContext);
  return (
    <section className="bg-[#F67E7E] py-[76px] px-[260px] flex items-center relative justify-between">
      <div className="absolute bottom-0 left-0"> {v4}</div>
      <h2 className="font-bold text-[#012F34] text-5xl">
        Ready to get started?
      </h2>
      <Link className="border-2 rounded-full py-2 px-3 text-[#012F34] hover:bg-[#012F34] hover:text-white cursor-pointer border-[#012F34]">
        contact us
      </Link>
    </section>
  );
};

export default FooterSection;
