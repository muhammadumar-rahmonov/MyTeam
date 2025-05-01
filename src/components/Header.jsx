import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyTeamContext } from "../Context";

const Header = () => {
  const { svg } = useContext(MyTeamContext);
  return (
    <header className="text-white flex items-center justify-between p-20">
      <div className="flex gap-20">
        {svg}
        <div className="flex items-center gap-10">
          <Link className="hover:text-[#F67E7E]" to={"/"}>
            Home
          </Link>
          <Link className="hover:text-[#F67E7E]" to={"/about"}>
            About
          </Link>
        </div>
      </div>

      <Link
        className="border-2 rounded-full py-2 px-3 hover:bg-white hover:text-[#014E56] cursor-pointer border-white"
        to={"/contact"}
      >
        contact us
      </Link>
    </header>
  );
};

export default Header;
