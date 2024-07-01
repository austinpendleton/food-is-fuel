import React from "react";
import ExerciseItem from "./ExerciseItem";

const ExerciseList = ({ exercises }) => {
  return (
    <div>
      {exercises.map((exercise, index) => (
        <ExerciseItem
          key={index}
          name={exercise.name}
          calories={exercise.calories}
        />
      ))}
    </div>
  );
};

export default ExerciseList;
