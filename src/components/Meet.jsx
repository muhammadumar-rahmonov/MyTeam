import React, { useContext } from "react";
import { MyTeamContext } from "../Context";
import Box from "./Box";

const Meet = () => {
  const { boxes, btnSvg } = useContext(MyTeamContext);
  return (
    <section className="bg-[#004047]  mbg-img p-20 ">
      <h2 className="font-bold text-5xl text-center mb-[64px]">
        Meet the directors
      </h2>
      <ul className="grid grid-cols-3 gap-4 justify-between w-full ">
        {boxes.map((val) => (
          <Box key={val.id} val={val} btnSvg={btnSvg} />
        ))}
      </ul>
    </section>
  );
};

export default Meet;
