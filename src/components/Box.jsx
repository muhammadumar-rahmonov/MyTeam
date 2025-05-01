import React, { useContext, useState } from "react";
import { MyTeamContext } from "../Context";

const Box = ({ val, btnSvg }) => {
  const [showBack, setShowBack] = useState(false);
  const { MYIMG7 } = useContext(MyTeamContext);
  const handleToggle = () => {
    setShowBack((prev) => !prev);
  };
  return (
    <div>
      <div
        className={`  transition-transform duration-500 ease-in-out transform ${
          showBack ? "rotate-y-360" : ""
        }`}
      >
        {!showBack ? (
          <li className="py-8 px-6 bg-[#012F34] transform hover:scale-110 transition-all duration-300  relative flex flex-col items-center mb-[76px] max-w-[350px]">
            <div className="mb-4">{val.img}</div>
            <div className="mb-7">
              <h4 className="livvic-bold text-lg text-center text-[#79c8c7]">
                {val.title}
              </h4>
              <p className="livvic-semibold-italic text-base mb-7 ">
                {val.name}
              </p>
            </div>
            <button
              className="rounded-full absolute  hover:opacity-[0.8] -bottom-5 cursor-pointer bg-red-400 p-7"
              onClick={handleToggle}
            >
              {btnSvg}
            </button>
          </li>
        ) : (
          <li className="py-8 px-6 bg-[#012F34] transform hover:scale-110 transition-all duration-300  flex flex-col relative items-center max-w-[350px] mb-[76px] text-white">
            <h4 className="livvic-bold text-lg text-center text-[#79c8c7] mb-2">
              {val.title}
            </h4>
            <p className="livvic-semibold leading-[167%] mb-6 text-center w-[254px]">
              “Empowered teams create truly amazing products. Set the north star
              and let them follow it.”
            </p>
            {MYIMG7}
            <button
              className="rounded-full transform rotate-[-135deg] cursor-pointer hover:opacity-[0.8] absolute  bg-[#79C8C7] p-7 -bottom-5"
              onClick={handleToggle}
            >
              {btnSvg}
            </button>
          </li>
        )}
      </div>
    </div>
  );
};

export default Box;
