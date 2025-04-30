import React, { useContext } from "react";
import { MyTeamContext } from "../Context";

const Services = () => {
  const { customObj } = useContext(MyTeamContext);

  return (
    <section className="py-[140px] px-[165px]  bg-img  bg-[#012F34]">
      <div className="flex justify-between  w-[1110px]">
        <div className=" relative">
          <span className="w-12 h-1 absolute -top-10 left-0 bg-[#f67e7e] "></span>
          <h1 className="font-bold text-5xl w-[445px]">
            Build & manage distributed teams like no one else.
          </h1>
        </div>
        <ul className="flex flex-col gap-8">
          {customObj.map((val) => (
            <li key={val.id} className="flex gap-6  items-center">
              <img src={val.img} alt="Avatar icon" />
              <div className="w-[445px]">
                <span className="font-bold mb-5 text-lg text-[#f67e7e]">
                  {val.title}
                </span>
                <p className="font-semibold text-base w-[445px]">{val.about}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
