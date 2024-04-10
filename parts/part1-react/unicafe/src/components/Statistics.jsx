import { StatisticsLine } from "./StatisticsLine";

// eslint-disable-next-line react/prop-types
export function Statistics({ good, neutral, bad }) {
  const all = good + bad + neutral;

  const feedBack = all == 0;

  const averageFunction = () => {
    const positive = good * 1;
    const negative = bad * -1;
    return (positive + negative) / all;
  };

  const average = averageFunction();

  const positive = (good / all) * 100;

  return (
    <section>
      <h2>Statistics</h2>

      {feedBack ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticsLine text="Good" value={good}/>
          <StatisticsLine text="Neutral" value={neutral}/>
          <StatisticsLine text="Bad" value={bad}/>
          <StatisticsLine text="All" value={all}/>
          <StatisticsLine text="Average" value={average}/>
          <StatisticsLine text="Positive %" value={positive}/>
        </>
      )}
    </section>
  );
}
