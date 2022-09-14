import React from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_API = "http://localhost:8000/api/v1";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          password: "",
        }}
        enableReinitialize={true}
        onSubmit={async (values) => {
          const data = await axios.post(`${BASE_API}/users/register`, values);
          if (data) {
            localStorage.setItem("token", data.data.token);
            navigate("/");
            location.reload();
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto py-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">Login</h1>

            <label className="block">name</label>
            <input
              type="text"
              name="name"
              placeholder="Write your name"
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

            <label className="block">email</label>
            <input
              type="email"
              name="email"
              placeholder="Write the email"
              onChange={handleChange}
              value={values.email}
              className="px-2 py-1 rounded-sm w-full"
            />
            <label className="block">password</label>
            <input
              type="password"
              name="password"
              placeholder="Write the password"
              onChange={handleChange}
              value={values.password}
              className="px-2 py-1 rounded-sm w-full"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Log in..." : "Log in"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
