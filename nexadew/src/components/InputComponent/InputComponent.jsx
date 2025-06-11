import React from "react";

const InputComponent = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  dark = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className={`block text-sm font-medium mb-1 ${dark ? "text-white" : "text-gray-800"}`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 rounded border ${
          dark
            ? "bg-black text-white border-gray-500 placeholder-gray-400"
            : "bg-white text-black border-gray-300"
        }`}
        placeholder={label}
      />
    </div>
  );
};

export default InputComponent;
