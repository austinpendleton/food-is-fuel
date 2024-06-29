import React from "react";

const FoodItem = ({ name, calories }) => {
  return (
    <div>
      <p className="text-center">
        {name}: {calories} kcal
      </p>
    </div>
  );
};

export default FoodItem;
