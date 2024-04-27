import "./WeatherEmptyScreen.scss";

const WeatherEmptyScreen = () => {
  return (
    <div className="weatherEmptyScreen__wrapper">
      <p>🙁 The information is not available now. Try again in a few minutes</p>
    </div>
  );
};

export default WeatherEmptyScreen;
