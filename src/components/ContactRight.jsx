import { useContext } from "react";
import { MyTeamContext } from "../Context";

const ContactRight = () => {
  const { customObj } = useContext(MyTeamContext);
  return (
    <section className="flex contact-right flex-col">
      <h1 className="mb-4 livvic-bold text-6xl">Contact</h1>
      <p className="livvic-bold text-3xl mb-8  text-[#f67e7e]">Ask us about</p>
      <ul className="flex flex-col">
        {customObj.map((val) => (
          <li key={val.id} className="flex items-center gap-5 mb-2">
            <img src={val.img} alt="icon" />
            <p className="livvic-bold text-lg leading-[156%]">{val.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactRight;
