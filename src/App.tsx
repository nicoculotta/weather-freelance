import "./App.scss";
import WeatherGridDays from "./components/WeatherGridDays";
import { WeatherMock } from "./mockData";
import WeatherTimesTab from "./components/WeatherTimesTab";
import WeatherTabs from "./components/WeatherTabs";
import { useState } from "react";
import WeatherEmptyScreen from "./components/WeatherEmptyScreen";
import WeatherCurrentDay from "./components/WeatherCurrentDay";

function App() {
  const { currentDay, weekly } = WeatherMock;
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="app__wrapper">
      <WeatherCurrentDay currentDay={currentDay} />
      <WeatherTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="app__containerTabs">
        {activeTab === 0 ? (
          <>
            <WeatherTimesTab />
            <WeatherGridDays week={weekly} />
          </>
        ) : (
          <WeatherEmptyScreen />
        )}
      </div>
    </div>
  );
}

export default App;
