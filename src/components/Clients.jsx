import React, { useContext } from "react";
import { MyTeamContext } from "../Context";

const Clients = () => {
  const { TextSVGs } = useContext(MyTeamContext);
  return (
    <section className="bg-[#012F34] py-[140px] sbg-img px-[165px]">
      <h2 className="livvic-bold text-center  mb-16 text-5xl leading-[100%]">
        Some of our clients
      </h2>
      <ul className="flex justify-between">
        {TextSVGs.map((val) => (
          <li key={val.id}>{val.img}</li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
