export interface WeatherData {
  currentDay: CurrentDay;
  weekly: Weekly[];
}

export interface CurrentDay {
  day: string;
  time: string;
  state: string;
  degree: number;
  precipitation: number;
  humidity: number;
  wind: number;
}

export interface Weekly {
  day: string;
  state: string;
  maxDegree: number;
  minDegree: number;
}
