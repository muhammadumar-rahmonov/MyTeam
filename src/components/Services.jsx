import React, { useContext } from "react";
import { MyTeamContext } from "../Context";

const Services = () => {
  const { customObj } = useContext(MyTeamContext);

  return (
    <section className="bg-[#012F34] w-full service-section bg-img">
      <div className="service-content flex">
        <div className=" relative">
          <span className="w-12 h-1 absolute -top-10 left-0 bg-[#f67e7e] "></span>
          <h1 className="livvic-bold service-h1 w-[445px]">
            Build & manage distributed teams like no one else.
          </h1>
        </div>
        <ul className="flex flex-col gap-8">
          {customObj.map((val) => (
            <li key={val.id} className="li flex">
              <img className="" src={val.img} alt="Avatar icon" />
              <div className="max-w-full">
                <span className="font-bold mb-5 text-lg text-[#f67e7e]">
                  {val.title}
                </span>
                <p className="font-semibold services-list opacity-80 text-base px">
                  {val.about}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
