import React, { useContext } from "react";
import { MyTeamContext } from "../Context";

const Section2 = () => {
  const { customObj2, v2, v3 } = useContext(MyTeamContext);
  return (
    <section className="bg-[#004047] p-[300px] relative">
      <div className="absolute top-0 left-0">{v3}</div>
      <div className="mb-[56px]">
        <h2 className="font-bold text-5xl text-center ">
          Delivering real results for top companies. Some of our
          <span className="text-[#79c8c7]"> success stories.</span>
        </h2>
      </div>
      <ul className="flex items-center gap-8 justify-between">
        {customObj2.map((val) => (
          <li key={val.id} className="text-center relative ">
            <div className=" ml-25">{val.v}</div>
            <p className="font-semibold mb-6  text-base">{val.about}</p>
            <h4 className="font-bold text-lg text-[#79c8c7]"> {val.title}</h4>
            <h4 className="italic mb-7 font-medium text-sm">{val.name}</h4>
            {val.img}
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 right-0">{v2}</div>
    </section>
  );
};

export default Section2;
