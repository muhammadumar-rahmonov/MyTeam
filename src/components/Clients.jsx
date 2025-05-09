import React, { useContext } from "react";
import { MyTeamContext } from "../Context";

const Clients = () => {
  const { TextSVGs } = useContext(MyTeamContext);
  return (
    <section className="bg-[#012F34] py-[140px] clients-section sbg-img px-[165px] w-full">
      <h2 className="livvic-bold text-center clients-h2  mb-16 text-5xl">
        Some of our clients
      </h2>
      <ul className="flex justify-between clients-ul">
        {TextSVGs.map((val) => (
          <li key={val.id}>{val.img}</li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
