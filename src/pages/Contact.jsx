import React from "react";
import { ContactLeft, ContactRight, Ready } from "../components";

const Contact = () => {
  return (
    <main className="flex justify-between cbg-img  contact-section">
      <ContactRight />
      <ContactLeft />
    </main>
  );
};

export default Contact;
