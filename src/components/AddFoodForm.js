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
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(event) => setCalories(event.target.value)}
      />
      <button className="bg-blue-500" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddFoodForm;
