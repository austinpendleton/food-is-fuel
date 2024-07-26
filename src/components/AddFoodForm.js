import React, { useState } from "react";

const AddFoodForm = ({ onAddFood }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddFood({ name, calories });
    setName("");
    setCalories("");
  };

  return (
    <form className="flex justify-center my-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Food name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="input-box w-full px-4 py-2 border rounded"
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(event) => setCalories(event.target.value)}
        className="input-box w-6/12 px-4 py-2 border rounded"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white py-2 px-4 rounded mb-4 font-playwrite"
        style={{ backgroundColor: "#ff6f61" }}
      >
        Add
      </button>
    </form>
  );
};

export default AddFoodForm;
