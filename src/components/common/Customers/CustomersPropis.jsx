import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Customers.css"

const CustomersPropis = ({ name, text, onDelete, buttonClassName, containerClassName }) => {
  return (
    <div data-aos="zoom-in-right" className={`card flex justify-between gap-[20px] ${containerClassName}`}>
      <div className="flex flex-col gap-4 rounded-[10px] overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <h2 className="title text-black font-semibold">{name}</h2>
        </div>
        <p className="text-black font-normal">{text}</p>
      </div>
      <button
        className={buttonClassName}
        onClick={onDelete}
      >
        <MdDeleteForever className="w-[15px] h-[15px]" />
      </button>
    </div>
  );
};

export default CustomersPropis;