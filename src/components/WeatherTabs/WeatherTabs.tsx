import "./WeatherTabs.scss";

const Tab = ({
  text,
  isActive,
  onClick,
}: {
  text: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className={`tab ${isActive ? "active" : ""}`}>
      {text}
    </button>
  );
};

const WeatherTabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (arg: number) => void;
}) => {
  const tabs = ["Temperature", "Precipitation", "Wind"];

  return (
    <div className="weatherTabs__tabs">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          text={tab}
          isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
        />
      ))}
    </div>
  );
};

export default WeatherTabs;
