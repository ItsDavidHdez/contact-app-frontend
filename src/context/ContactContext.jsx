import { useState, createContext } from "react";
import {
  deleteContactRequest,
  createContactRequest,
  getContactsRequest,
  getContactRequest,
  updateContactRequest,
} from "../api/contact";
import { login } from "../api/user";

export const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState([]);

  async function loadData() {
    getContactsRequest(setContacts);
  }

  async function loginUser(user, setUser) {
    login(user, setUser);
  }

  const createContact = async (contact) => {
    try {
      return await createContactRequest(contact);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await deleteContactRequest(id);

      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getContact = async (id) => {
    try {
      const response = await getContactRequest(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (id, newFields) => {
    try {
      const response = await updateContactRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: contacts,
        loadData,
        deleteContact,
        createContact,
        getContact,
        updateContact,
        loginUser,
        setUser,
        user,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
