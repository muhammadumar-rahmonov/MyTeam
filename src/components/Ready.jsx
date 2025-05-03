import { Link } from "react-router-dom";

const Ready = () => {
  return (
    <section className="bg-[#F67E7E] fbg-img ready-section ">
      <div className="  ready-content flex items-center justify-between">
        <h2 className="livvic-bold ready-h2 text-[#012F34]">
          Ready to get started?
        </h2>
        <Link
          className="border-2 rounded-full py-2 px-8 text-[#012F34] hover:bg-[#012F34] hover:text-white cursor-pointer border-[#012F34] duration-300"
          to={"/contact"}
        >
          contact us
        </Link>
      </div>
    </section>
  );
};

export default Ready;
