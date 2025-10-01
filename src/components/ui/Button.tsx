
import React, { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode; 
  type?: "button" | "submit" | "reset"; 
  className?: string; 
}

const Button:React.FC<ButtonProps> = ({ children,  type = "button", className = "" }) => {
  return (
    <button
      type={type}
    //   onClick={onClick}
      className={`bg-[#FA7C45] text-white cursor-pointer font-semibold px-5 py-2.5 rounded-[100px] transition-all hover:bg-[#fd6727] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
