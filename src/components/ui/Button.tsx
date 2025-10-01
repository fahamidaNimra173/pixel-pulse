
import React from "react";

const Button = ({ children,  type = "button", className = "" }) => {
  return (
    <button
      type={type}
    //   onClick={onClick}
      className={`bg-[#FA7C45] text-white font-semibold px-5 py-2.5 rounded-[100px] transition-all hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
