import React, { useState } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import AddFoodForm from "./components/AddFoodForm";
import TotalCalories from "./components/TotalCalories";
import DateDisplay from "./components/DateDisplay";
import AddExerciseForm from "./components/AddExerciseForm";
import ExerciseList from "./components/ExerciseList";
import "./blocks/App.css";

const App = () => {
  const [foods, setFoods] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [showExerciseForm, setShowExerciseForm] = useState(false);

  const addFood = (food) => {
    setFoods([...foods, food]);
    setTotalCalories(totalCalories + Number(food.calories));
  };

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
    setTotalCalories(totalCalories - exercise.calories);
  };

  const toggleExerciseForm = () => {
    setShowExerciseForm(!showExerciseForm);
  };

  return (
    <div className="max-w-lg mx-auto p-4 flex flex-col items-center">
      <Header />
      <DateDisplay />
      <AddFoodForm onAddFood={addFood} />
      <FoodList foods={foods} />
      <button
        onClick={toggleExerciseForm}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {showExerciseForm ? "Hide Exercise Form" : "Add Exercise"}
      </button>
      {showExerciseForm && <AddExerciseForm onAddExercise={addExercise} />}
      <ExerciseList exercises={exercises} />
      <TotalCalories total={totalCalories} />
    </div>
  );
};

export default App;
