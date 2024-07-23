import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoalPage = ({ setGoal }) => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");

  const navigate = useNavigate();

  const calculateCalorieGoal = (age, height, weight, fitnessGoal) => {
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;

    let calorieGoal;
    switch (fitnessGoal) {
      case "lose weight":
        calorieGoal = bmr - 500;
        break;
      case "gain weight":
        calorieGoal = bmr + 500;
        break;
      case "maintain":
        calorieGoal = bmr;
        break;
      default:
        calorieGoal = bmr;
    }
    return calorieGoal.toFixed(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calorieGoal = calculateCalorieGoal(age, height, weight, fitnessGoal);
    setGoal({ age, height, weight, fitnessGoal, calorieGoal });
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-4 mb-6"
    >
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 w-full max-w-xs"
        required
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="border p-2 w-full max-w-xs"
        required
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 w-full max-w-xs"
        required
      />
      <select
        value={fitnessGoal}
        onChange={(e) => setFitnessGoal(e.target.value)}
        className="border p-2 w-full max-w-xs"
        required
      >
        <option value="">Select fitness goal</option>
        <option value="lose">Lose weight</option>
        <option value="maintain">Maintain weight</option>
        <option value="gain">Gain weight</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {" "}
        Set Goal
      </button>
    </form>
  );
};

export default GoalPage;
