import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { useContact } from "../hooks/useContact";

const ContactForm = () => {
  const { createContact, getContact, updateContact } = useContact();
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    phone: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadContact = async () => {
      if (params.id) {
        const contact = await getContact(params.id);
        console.log(contact);
        setContact({
          name: contact.name,
          lastname: contact.lastname,
          phone: contact.phone,
          description: contact.description,
        });
      }
    };

    loadContact();
  }, []);

  return (
    <div>
      <Formik
        initialValues={contact}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            await updateContact(params.id, values);
          } else {
            await createContact(values);
          }
          navigate("/");

          setContact({
            name: "",
            lastname: "",
            phone: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto py-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit contact" : "Create contact"}
            </h1>

            <label className="block">name</label>
            <input
              type="text"
              name="name"
              placeholder="Write the name"
              onChange={handleChange}
              value={values.name}
              className="px-2 py-1 rounded-sm w-full"
            />

            <label className="block">lastname</label>
            <input
              type="text"
              name="lastname"
              placeholder="Write the lastname"
              onChange={handleChange}
              value={values.lastname}
              className="px-2 py-1 rounded-sm w-full"
            />

            <label className="block">phone</label>
            <input
              type="number"
              name="phone"
              placeholder="Write a phone number"
              onChange={handleChange}
              value={values.phone}
              className="px-2 py-1 rounded-sm w-full"
            />

            <label className="block">description</label>
            <textarea
              type="text"
              name="description"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
              className="px-2 py-1 rounded-sm w-full"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
