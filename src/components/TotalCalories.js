import React from "react";

const TotalCalories = ({ total }) => {
  return (
    <div>
      <h2 className="text-center">Total calories: {total} kcal</h2>
    </div>
  );
};

export default TotalCalories;
