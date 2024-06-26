import React, { useState } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";

const App = () => {
  const [foods, setFoods] = useState([]);

  return (
    <div>
      <Header />
      <FoodList foods={foods} />
    </div>
  );
};

export default App;
