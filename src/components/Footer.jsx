import React, { useContext } from "react";
import { MyTeamContext } from "../Context";
import { Link } from "react-router-dom";
import { Facebook, Pinterest, Twitter } from "../SVGs";

const Footer = () => {
  const { svg } = useContext(MyTeamContext);
  const CurrentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002529] flex footer-section">
      <div className="flex  footer-top">
        <div className="flex flex-col ">
          <div className="svg-content">{svg}</div>
          <div className="flex items-center  gap-10">
            <Link
              className="text-white hover:text-[#F67E7E] transition-colors duration-300"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="text-white hover:text-[#F67E7E] transition-colors duration-300"
              to={"/about"}
            >
              About
            </Link>
          </div>
        </div>

        <div className="font-semibold text-base opacity-60 flex flex-col">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </div>
      </div>

      <div className="flex footer-action">
        <div className="flex footer-bottom">
          <button className="cursor-pointer text-white hover:text-[#F67E7E] transition-colors duration-300">
            <Facebook />
          </button>
          <button className="cursor-pointer text-white hover:text-[#F67E7E] transition-colors duration-300">
            <Pinterest />
          </button>
          <button className="cursor-pointer text-white hover:text-[#F67E7E] transition-colors duration-300">
            <Twitter />
          </button>
        </div>
        <div>
          <p className="livvic-semibold text-base opacity-60">
            Copyright {CurrentYear}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
