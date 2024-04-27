import "./WeatherTimesTab.scss";

const hours = [
  "10:00",
  "13:00",
  "16:00",
  "19:00",
  "22:00",
  "01:00",
  "04:00",
  "07:00",
];

const WeatherTimesTab = () => {
  return (
    <div className="weatherTimesTab__wrapper">
      {hours.map((hour) => (
        <p className="weatherTimesTab__hour">{hour}</p>
      ))}
    </div>
  );
};

export default WeatherTimesTab;
