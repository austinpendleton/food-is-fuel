import React, { useState } from "react";

const AddExerciseForm = ({ onAddExercise }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExercise({ name, calories: parseInt(calories, 10) });
    setName("");
    setCalories("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-4 mb-6"
    >
      <input
        type="text"
        placeholder="Exercise name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full max-w-xs"
        required
      />
      <input
        type="number"
        placeholder="Calories burned"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        className="border p-2 w-full max-w-xs"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Exercise
      </button>
    </form>
  );
};
export default AddExerciseForm;
