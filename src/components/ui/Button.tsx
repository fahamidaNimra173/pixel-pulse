'use client'
import React, { ReactNode, useState } from "react";
import Ellipse from "../shared/Ellipse";
interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, type = "button", className = "" }) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    console.log('this button has clicked')
    setClicked(true)

  }
  return (
    <div>
      <button
        onClick={handleClick}
        type={type}
        //   onClick={onClick}
        className={`bg-[#FA7C45]  text-white cursor-pointer font-semibold px-5 py-2.5 rounded-[100px] transition-all hover:bg-[#fd6727] ${className}`}
      >
        {children}
      </button>


      {/* modal created by myself  */}
      {clicked && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <h2 className="text-2xl md:text-3xl mb-7 font-semibold text-[#FA7C45] ">
              Thank You for Visiting!
            </h2>
            
            <p className="text-gray-700 mb-6">
              We truly appreciate your interest 😊
              However, this is just a simple landing page created for design demonstration —
              no real functionality has been implemented yet.
            </p>
            <button
              onClick={() => setClicked(false)}
              className="bg-[#FA7C45] text-white px-6 py-2 rounded-full hover:bg-[#fd6727] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

  );
};

export default Button;
