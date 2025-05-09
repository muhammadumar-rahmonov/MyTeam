import React from "react";
import { ContactLeft, ContactRight } from "../components";

const Contact = () => {
  return (
    <main className="flex justify-between cbg-img  contact-section w-full">
      <ContactRight />
      <ContactLeft />
    </main>
  );
};

export default Contact;
