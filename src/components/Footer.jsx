import React, { useContext } from "react";
import { MyTeamContext } from "../Context";
import { Link } from "react-router-dom";
const Footer = () => {
  const { svg, MySocial } = useContext(MyTeamContext);
  const CurrentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#002529] py-12 px-40 bottom-0 relative">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="mb-6">{svg}</div>
          <div className="flex items-center gap-10">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
          </div>
        </div>
        <div className="font-semibold text-base opacity-60 flex flex-col">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </div>
        <div className="absolute right-40 top-10"> {MySocial}</div>
        <div className="mt-18">
          <p className="font-semibold  text-base opacity-60 ">
            Copryright {CurrentYear}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
