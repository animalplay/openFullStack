import { Part } from "./Part";

export const Content = ({ parts }) => {

  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);

  console.log({parts, totalExercises})

  return (
    <main>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}

      <h3>Total of {totalExercises} exercises</h3>
    </main>
  );
};
