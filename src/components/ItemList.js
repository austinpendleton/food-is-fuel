import React from "react";

const ItemList = ({ items }) => {
  return (
    <ul className="w-full">
      {items.map((item, index) => (
        <li
          key={index}
          className={`flex justify-between items-center p-2 mb-2 border rounded ${
            item.type === "food" ? "bg-white" : "bg-gray-200"
          }`}
        >
          <span>{item.name}</span>
          <span>{item.calories} kcal</span>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
