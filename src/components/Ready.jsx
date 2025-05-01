import { Link } from "react-router-dom";

const Ready = () => {
  return (
    <section className="bg-[#F67E7E] fbg-img py-[76px] px-[260px] flex items-center relative justify-between">
      <h2 className="font-bold text-[#012F34] text-5xl">
        Ready to get started?
      </h2>
      <Link
        className="border-2 rounded-full py-2 px-3 text-[#012F34] hover:bg-[#012F34] hover:text-white cursor-pointer border-[#012F34]"
        to={"/contact"}
      >
        contact us
      </Link>
    </section>
  );
};

export default Ready;
