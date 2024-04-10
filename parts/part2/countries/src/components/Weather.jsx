export const Weather = ({ weather }) => {
  if (!weather || !weather.main || !weather.main.temp || !weather.weather || !weather.weather[0] || !weather.weather[0].icon || !weather.wind || !weather.wind.speed) {
    return <div>Error: Invalid weather data</div>;
  }

  return (
    <article>
      Temperature {(weather.main.temp - 273.15).toPrecision(3)} Celsius <br />
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
      <br />
      <strong> wind {weather.wind.speed} m/s</strong>
    </article>
  );
};
