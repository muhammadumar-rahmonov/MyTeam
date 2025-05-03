import React from "react";
import { ContactLeft, ContactRight, Ready } from "../components";

const Contact = () => {
  return (
    <main className="py-[120px] flex justify-between cbg-img  px-[165px]">
      <ContactRight />
      <ContactLeft />
    </main>
  );
};

export default Contact;
