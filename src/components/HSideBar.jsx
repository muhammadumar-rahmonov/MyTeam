import { Link } from "react-router-dom";

const HSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity z-10 ${
          isOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } mobile:block tablet:hidden`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#014E56] text-white transform transition-transform z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } mobile:block tablet:hidden`}
      >
        <div className="flex flex-col items-center gap-6 mt-20">
          <Link onClick={toggleSidebar} className="hover:text-[#F67E7E]" to="/">
            Home
          </Link>
          <Link
            onClick={toggleSidebar}
            className="hover:text-[#F67E7E]"
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={toggleSidebar}
            className="border-2 rounded-full py-2 px-4 hover:bg-white hover:text-[#014E56] border-white"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default HSidebar;
