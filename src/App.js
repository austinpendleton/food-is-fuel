import React, { useState } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import AddFoodForm from "./components/AddFoodForm";

const App = () => {
  const [foods, setFoods] = useState([]);

  return (
    <div>
      <Header />
      <AddFoodForm onAddFood={addFood} />
      <FoodList foods={foods} />
    </div>
  );
};

export default App;
