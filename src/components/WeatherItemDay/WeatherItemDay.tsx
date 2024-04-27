import "./WeatherItemDay.scss";
import sunny from "../../assets/sunny.png";
import partlyCloudy from "../../assets/partly_cloudy.png";

interface WeatherItemDayProps {
  day: string;
  icon: string;
  maxDegree: number;
  minDegree: number;
}

const WeatherItemDay = ({
  day,
  icon,
  maxDegree,
  minDegree,
}: WeatherItemDayProps) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "sunny":
        return sunny;
      case "partly_cloudy":
        return partlyCloudy;
    }
  };

  return (
    <div className="weatherItemDay__wrapper">
      <span>{day.slice(0, 3)}</span>
      <img src={getIcon(icon)} className="weatherItemDay__icon" />
      <div>
        <span className="weatherItemDay__degree">{maxDegree}° </span>
        <span className="weatherItemDay__degree weatherItemDay__degree--grey">
          {minDegree}°
        </span>
      </div>
    </div>
  );
};

export default WeatherItemDay;
