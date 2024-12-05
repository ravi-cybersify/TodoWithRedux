import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Card: React.FC = () => {
  return (
    <div className="shadow-lg my-8 mx-2 w-80">
      <div className="bg-green-300 h-1"></div>
      <div className="my-7 mx-4 flex flex-col gap-9">
        <span className="px-4 py-1 bg-green-300 rounded w-20">React</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          ratione.
        </p>
       <div className="text-right text-green-300">
       <button type="button" className="mr-2">
          <FiEdit size={20} />
        </button>
        <button type="button">
          <MdDelete size={20} />
        </button>
       </div>
      </div>
    </div>
  );
};

export default Card;
