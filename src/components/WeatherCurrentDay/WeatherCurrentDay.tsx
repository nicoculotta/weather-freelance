import { CurrentDay } from "../../types/types";
import "./WeatherCurrentDay.scss";
import sunny from "../../assets/sunny.png";

interface WeatherCurrentDayProps {
  currentDay: CurrentDay;
}

const WeatherCurrentDay = ({ currentDay }: WeatherCurrentDayProps) => {
  return (
    <div className="weatherCurrentDay__wrapper">
      <div className="weatherCurrentDay__container--left">
        <div>
          <img src={sunny} className="weatherCurrentDay__icon" />
        </div>
        <div className="weatherCurrentDay__degree">
          <p>{currentDay.degree}</p>
          <div>
            °C <span>| °F</span>
          </div>
        </div>
        <ul className="weatherCurrentDay__list">
          <li>
            <p>Precipitation: {currentDay.precipitation}%</p>
          </li>
          <li>
            <p>Humidity: {currentDay.humidity}%</p>
          </li>
          <li>
            <p>Wind: {currentDay.wind} km/h</p>
          </li>
        </ul>
      </div>
      <div className="weatherCurrentDay__container--right">
        <h3>Weather</h3>
        <p>
          {currentDay.day} {currentDay.time}
        </p>
        <p>
          {currentDay.state.charAt(0).toUpperCase() + currentDay.state.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default WeatherCurrentDay;
