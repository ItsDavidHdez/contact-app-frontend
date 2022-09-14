import React from "react";

const Button = ({ handleFunction, id, text, fullFunction }) => {
  return (
    <button
      className="bg-red-500 px-2 py-1 text-white"
      onClick={fullFunction ? () => fullFunction : () => handleFunction(id)}
    >
      {text}
    </button>
  );
};

export default Button;
