import React, { useContext } from "react";
import { MyTeamContext } from "../Context";

const Delivering = () => {
  const { customObj2 } = useContext(MyTeamContext);
  return (
    <section className="bg-[#004047] dbg-img  p-50 relative">
      <div className="w-[1110px]">
        <div className="flex flex-col items-center">
          <h2 className="livvic-bold  mb-[56px] text-5xl text-center ">
            Delivering real results for top <br /> companies. Some of our
            <span className="text-[#79c8c7] "> success stories.</span>
          </h2>
        </div>

        <ul className="flex  gap-8  w-[1110px] justify-between">
          {customObj2.map((val) => (
            <li key={val.id} className="text-center flex-1">
              <p className="livvic-semibold mb-6 relative z-1 text-base">
                {val.about}
                <span className=" flex items-start justify-center -top-8  absolute inset-0 -z-10 ">
                  {val.v}
                </span>
              </p>
              <h4 className="font-bold text-lg text-[#79c8c7]"> {val.title}</h4>
              <h4 className="livvic-medium-italic mb-7 text-sm">{val.name}</h4>
              {val.img}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Delivering;
