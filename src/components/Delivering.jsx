import React, { useContext } from "react";
import { MyTeamContext } from "../Context";

const Delivering = () => {
  const { customObj2 } = useContext(MyTeamContext);
  return (
    <section className="bg-[#004047] dbg-img delivering-section relative">
      <div className="delivering-content">
        <div className="flex flex-col items-center">
          <h2 className="livvic-bold responsive-h2 ">
            Delivering real results for top <br /> companies. Some of our
            <span className="text-[#79c8c7] "> success stories.</span>
          </h2>
        </div>

        <ul className="ul flex">
          {customObj2.map((val) => (
            <li key={val.id} className="text-center flex-1">
              <p className="livvic-semibold ul-p relative z-1 text-base">
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
