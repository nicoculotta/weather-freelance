import { Weekly } from "../../types/types";
import WeatherItemDay from "../WeatherItemDay";
import "./WeatherGridDays.scss";

interface WeatherGridDaysProps {
  week: Weekly[];
}

const WeatherGridDays = ({ week }: WeatherGridDaysProps) => {
  return (
    <div className="weatherGridDays__wrapper">
      {week.map((item) => (
        <WeatherItemDay
          day={item.day}
          icon={item.state}
          maxDegree={item.maxDegree}
          minDegree={item.minDegree}
        />
      ))}
    </div>
  );
};

export default WeatherGridDays;
