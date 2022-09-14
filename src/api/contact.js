import axios from "axios";

const BASE_API = "http://localhost:8000/api/v1";

export const createContactRequest = async (contact) => {
  await axios.post(`${BASE_API}/contacts`, contact, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const deleteContactRequest = async (id) => {
  await axios.delete(`${BASE_API}/contacts/${id}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getContactsRequest = async (setContacts) => {
  await fetch(`${BASE_API}/contacts`, {
    headers: new Headers({
      authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => setContacts(data));
};

export const getContactRequest = async (id) => {
  const response = await fetch(`${BASE_API}/contacts/${id}`, {
    headers: new Headers({
      authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  });
  return await response.json();
};

export const updateContactRequest = async (id, newFields) => {
  await axios.put(`${BASE_API}/contacts/${id}`, newFields, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
