import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyTeamContext } from "../Context";

import HSideBar from "./HSideBar";
import { BtnSVG } from "../SVGs";

const Header = () => {
  const { svg } = useContext(MyTeamContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <header className="text-white flex items-center justify-between responsive-header">
      <div className="flex gap-8 md:gap-20 items-center">
        {svg}
        <nav className="header-content gap-6 md:gap-10 items-center">
          <Link className="hover:text-[#F67E7E] duration-300" to={"/"}>
            Home
          </Link>
          <Link className="hover:text-[#F67E7E] duration-300" to={"/about"}>
            About
          </Link>
        </nav>
      </div>

      <button
        onClick={toggleSidebar}
        className="mobile:block sidebar-toggle desktop:hidden tablet:hidden z-30"
      >
        <BtnSVG />
      </button>

      <HSideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Link
        className="contact-btn border-2 rounded-full py-2 px-8 hover:bg-white hover:text-[#014E56] cursor-pointer border-white duration-300"
        to={"/contact"}
      >
        Contact Us
      </Link>
    </header>
  );
};

export default Header;
