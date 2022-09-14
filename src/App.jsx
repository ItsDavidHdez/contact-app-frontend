import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ContactForm from "./pages/ContactForm";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import { ContactContextProvider } from "./context/ContactContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <ContactContextProvider>
          <Routes>
            <Route path="/" element={<ContactPage />} />
            <Route path="/new" element={<ContactForm />} />{" "}
            <Route path="/edit/:id" element={<ContactForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ContactContextProvider>
      </div>
    </div>
  );
};

export default App;
