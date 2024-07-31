import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import AddFoodForm from "./components/AddFoodForm";
import TotalCalories from "./components/TotalCalories";
import DateDisplay from "./components/DateDisplay";
import AddExerciseForm from "./components/AddExerciseForm";
import GoalPage from "./components/GoalPage";
import "./blocks/App.css";

const App = () => {
  const [foods, setFoods] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  const [goal, setGoal] = useState({
    age: "",
    height: "",
    weight: "",
    fitnessGoal: "",
    calorieGoal: "",
  });

  const addFood = (food) => {
    setFoods([...foods, { ...food, type: "food" }]);
    setTotalCalories(totalCalories + food.calories);
  };

  const addExercise = (exercise) => {
    setExercises([...exercises, { ...exercise, type: "exercise" }]);
    setTotalCalories(totalCalories - exercise.calories);
  };

  const toggleExerciseForm = () => {
    setShowExerciseForm(!showExerciseForm);
  };

  const resetApp = () => {
    setFoods([]);
    setExercises([]);
    setTotalCalories(0);
  };

  // Combine foods and exercises into a single list
  const items = [...foods, ...exercises];

  return (
    <Router>
      <div className="max-w-lg mx-auto p-4 flex flex-col items-center min-h-screen">
        <Header />
        <nav className="mb-4">
          <Link
            to="/"
            className="mr-4 text-lg"
            style={{
              color: "#ff6f61",
              fontSize: "1.5rem",
              marginRight: "16px",
            }}
          >
            Home
          </Link>
          <Link
            to="/goal"
            className="text-lg"
            style={{ color: "#ff6f61", fontSize: "1.5rem", marginLeft: "16px" }}
          >
            Set Goal
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DateDisplay />
                <AddFoodForm onAddFood={addFood} />
                <button
                  onClick={toggleExerciseForm}
                  className="bg-pink-500 text-white py-2 px-4 rounded mb-4 font-playwrite"
                  style={{ backgroundColor: "#ff6f61" }}
                >
                  {showExerciseForm ? "Hide Exercise Form" : "Add Exercise"}
                </button>
                {showExerciseForm && (
                  <AddExerciseForm onAddExercise={addExercise} />
                )}
                <ItemList items={items} />
                <TotalCalories total={totalCalories} />
                <button
                  onClick={resetApp}
                  className="bg-pink-500 text-white py-2 px-4 rounded mb-4 font-playwrite"
                  style={{
                    backgroundColor: "#ff6f61",
                    fontFamily: "Playfair Display, sans-serif",
                  }}
                >
                  Reset
                </button>
                {goal.fitnessGoal && (
                  <div className="mt-4 p-4 border rounded">
                    <h2 className="text-xl font-semibold mb-2">
                      Your Fitness Goal
                    </h2>
                    <p>Age: {goal.age}</p>
                    <p>Height: {goal.height} cm</p>
                    <p>Weight: {goal.weight} kg</p>
                    <p>Goal: {goal.fitnessGoal}</p>
                    <p>Calorie Goal: {goal.calorieGoal} kcal</p>
                  </div>
                )}
              </>
            }
          />
          <Route path="/goal" element={<GoalPage setGoal={setGoal} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
