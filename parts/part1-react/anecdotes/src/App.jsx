/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { anecdotes } from "./constanst";

const App = () => {
  const initialPoints = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initialPoints);

  //Cambiar a la siguiente anecdota
  const handleClickNextAnecdote = () => {
    const numberSelected = Math.floor(
      Math.random() * Math.floor(anecdotes.length)
    );

    setSelected(numberSelected);
  };

  //Guardar los votos
  const handleClickVoteAnecdote = () => {
    const newVotes = [...votes ];
    const currentSelected = selected;

    newVotes[currentSelected] += 1;

    setVotes(newVotes);
  };
  

  const highestVotes = Math.max(...votes);
  const winningAnecdote = anecdotes[votes.indexOf(highestVotes)];


  return (
    <section>
      <header>
        <h1>Anecdote of the day</h1>
      </header>

      <h3>{anecdotes[selected]}</h3>

      <p>Has a {votes[selected]} votes</p>

      <button onClick={handleClickVoteAnecdote}>Vote</button>
      <button onClick={handleClickNextAnecdote}>Next anecdote</button>

      <aside>
        <h2>Anecdote with most votes</h2>

        <h3>{winningAnecdote}</h3>
        <p>Has a {highestVotes} votes</p>
      </aside>
    </section>
  );
};

export default App;
