import React, { useContext } from "react";
import { MyTeamContext } from "../Context";

const Section = () => {
  const { customObj } = useContext(MyTeamContext);

  return (
    <section className="py-36 px-40 flex justify-between bg-[#012F34]">
      <div className="w-[445px] relative">
        <section className="w-12 h-1 absolute -top-10 left-0 bg-[#f67e7e] "></section>
        <h1 className="font-bold text-5xl">
          Build & manage distributed teams like no one else.
        </h1>
      </div>
      <ul className="flex flex-col gap-8g">
        {customObj.map((val) => (
          <li className="flex gap-6  items-center">
            {val.img}
            <div className="w-[445px]">
              <span className="font-bold mb-4 text-lg text-[#f67e7e]">
                {val.title}
              </span>
              <p className="font-semibold text-base">{val.about}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
