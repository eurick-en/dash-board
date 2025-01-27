import React from "react";

const Card = ({ id, number, onRemove }) => {
  return (
    <div className="card bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-md mb-4 w-72">
      <h3 className="text-lg font-bold mb-2">Card {number}</h3>
      <button
        onClick={() => onRemove(id)}
        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
      >
        Remover
      </button>
    </div>
  );
};

export default Card;
