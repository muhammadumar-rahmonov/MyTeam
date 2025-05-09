import React, { useContext } from "react";
import { MyTeamContext } from "../Context";
import Box from "./Box";

const Meet = () => {
  const { boxes, btnSvg } = useContext(MyTeamContext);
  return (
    <section className="bg-[#004047] mbg-img meet-section w-full ">
      <h2 className="livvic-bold meet-h1 text-center">Meet the directors</h2>
      <ul className="grid  gap-x-8 gap-y-12  meet-ul">
        {boxes.map((val) => (
          <Box key={val.id} val={val} btnSvg={btnSvg} />
        ))}
      </ul>
    </section>
  );
};

export default Meet;
