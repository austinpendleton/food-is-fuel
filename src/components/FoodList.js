import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foods }) => {
  return (
    <div>
      {foods.map((food, index) => (
        <FoodItem key={index} name={food.name} calories={food.calories} />
      ))}
    </div>
  );
};

export default FoodList;
