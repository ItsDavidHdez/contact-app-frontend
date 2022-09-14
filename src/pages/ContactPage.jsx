import React, { useEffect } from "react";
import ContactCard from "../components/ContactCard";
import { useContact } from "../hooks/useContact";
import { handleAuth } from "../services/auth";

const ContactPage = () => {
  const { contacts, loadData } = useContact();

  useEffect(() => {
    loadData();
  }, []);

  const renderMain = () => {
    if (!handleAuth) {
      console.log(false);
      return (
        <h1 className="text-white">
          register or login to be able to use the app
        </h1>
      );
    } else {
      if (contacts.length === 0) {
        console.log(true);
        return <h1 className="text-white">No contacts</h1>;
      } else {
        console.log(true, true);
        return contacts.map((contact) => (
          <ContactCard contact={contact} key={contact._id} />
        ));
      }
    }
  };

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Contacts</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
};

export default ContactPage;
