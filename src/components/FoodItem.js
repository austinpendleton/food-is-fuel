import React from "react";

const FoodItem = ({ name, calories }) => {
  return (
    <div>
      <p>
        {name}: {calories} kcal
      </p>
    </div>
  );
};

export default FoodItem;
