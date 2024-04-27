import { WeatherData } from "./types/types";

export const WeatherMock: WeatherData = {
  currentDay: {
    day: "Friday",
    time: "09:00",
    state: "sunny",
    degree: 9,
    precipitation: 0,
    humidity: 49,
    wind: 10,
  },
  weekly: [
    {
      day: "Friday",
      state: "sunny",
      maxDegree: 22,
      minDegree: 9,
    },
    {
      day: "Saturday",
      state: "partly_cloudy",
      maxDegree: 22,
      minDegree: 9,
    },
    {
      day: "Sunday",
      state: "partly_cloudy",
      maxDegree: 19,
      minDegree: 9,
    },
    {
      day: "Monday",
      state: "partly_cloudy",
      maxDegree: 24,
      minDegree: 7,
    },
    {
      day: "Tuesday",
      state: "partly_cloudy",
      maxDegree: 19,
      minDegree: 1,
    },
    {
      day: "Wednesday",
      state: "partly_cloudy",
      maxDegree: 22,
      minDegree: 9,
    },
    {
      day: "Thursday",
      state: "partly_cloudy",
      maxDegree: 20,
      minDegree: 6,
    },
    {
      day: "Friday",
      state: "partly_cloudy",
      maxDegree: 19,
      minDegree: 3,
    },
  ],
};
