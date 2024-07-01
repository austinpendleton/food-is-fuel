import React from "react";

const ExerciseItem = ({ name, calories }) => {
  return (
    <div classname="flex justify-between p-2 border-b">
      <p>{name}</p>
      <p>{calories} kcal burned</p>
    </div>
  );
};
export default ExerciseItem;
