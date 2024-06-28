import React, { useState } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import AddFoodForm from "./components/AddFoodForm";
import TotalCalories from "./components/TotalCalories";
import "./blocks/App.css";

const App = () => {
  const [foods, setFoods] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const addFood = (food) => {
    setFoods([...foods, food]);
    setTotalCalories(totalCalories + Number(food.calories));
  };

  return (
    <div>
      <Header />
      <AddFoodForm onAddFood={addFood} />
      <FoodList foods={foods} />
      <TotalCalories total={totalCalories} />
    </div>
  );
};

export default App;
