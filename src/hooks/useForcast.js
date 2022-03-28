import { useState } from "react";
import OpenWeather from "../api/OpenWeather";
//helper
import CurrentDate from "../helpers/CurrentDate";

const useForecast = () => {
   const [forecast, setForecast] = useState(null);
   const [isError, setError] = useState(false);
   const [isLoading, setLoading] = useState(false);
   const [location, setLocation] = useState("");

   //instancia da class OpenWeather para request na api
   const weather = new OpenWeather();

   //instacia da classe para datas
   const date = new CurrentDate();

   //função que busca os dados na api
   const submitRequest = async (location) => {
      const upperCaseDescription = (description) => description[0].toUpperCase() + description.substr(1);
      setLocation(location);
      setLoading(true);

      const response = await weather
         .getWeather(location)
         .then((resp) => ({
            date: date.FullDate(),
            name: resp.name,
            humidity: resp.main.humidity,
            temp: Math.round(resp.main.temp),
            maxTemp: Math.round(resp.main.temp_max),
            minTemp: Math.round(resp.main.temp_min),
            description: resp.weather.map(({ description }) => upperCaseDescription(description)),
            icon: resp.weather.map(({ icon }) => icon),
            sunrise: date.ConvertHours(resp.sys.sunrise),
            sunset: date.ConvertHours(resp.sys.sunset),
         }))
         .catch(() => setError(true));

      setLoading(false);
      setForecast(response);
   };

   //faz com que retorne para estado inicial
   const reset = () => {
      setError(false);
      setForecast(null);
   };

   return {
      reset,
      isError,
      isLoading,
      forecast,
      location,
      submitRequest,
   };
};

export default useForecast;
