import React from "react";
import { useNavigate } from "react-router-dom";
import { useContact } from "../hooks/useContact";
import Button from "./Button";

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContact();
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-600 text-white rounded-md p-4" key={contact.id}>
      <h2 className="text-sm font-bold">
        {contact.name} {contact.lastname}
      </h2>
      <p className="text-sm">{contact.phone}</p>
      <p className="text-xs">{contact.description}</p>
      <div className="flex gap-x-1">
        <Button
          handleFunction={deleteContact}
          id={contact._id}
          text={"Delete"}
        />
        <button
          className="bg-slate-800 px-2 py-1 text-white"
          onClick={() => navigate(`/edit/${contact._id}`)}
        >
          Edit
        </button>
        {/* <Button fullFunction={navigate(`/edit/${contact._id}`)} text="Edit" /> */}
      </div>
    </div>
  );
};

export default ContactCard;
