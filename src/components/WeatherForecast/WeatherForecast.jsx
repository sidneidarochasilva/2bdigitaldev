import React from "react";
import "./styles.scss";

export default function WeatherForecast({ forecast, reset }) {
   return (
      <>
         {forecast && (
            <div className="container-weatherForcast">
               <div>
                  <h1>{forecast.name}</h1>
                  <span>{forecast.date}</span>
               </div>
               {forecast.icon.map((img) => (
                  <img key={img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="alternatetext" />
               ))}
               <div className="container-center">
                  <div className="box-temp">
                     <span>Mínima </span>
                     <b>{forecast.minTemp}°C</b>
                  </div>

                  <p> {forecast.temp}°C</p>
                  <div>
                     <span>Máxima</span>
                     <b> {forecast.maxTemp}°C</b>
                  </div>
               </div>
               {forecast.description.map((description) => (
                  <strong key={description}>{description}</strong>
               ))}

               <div className="footer-container">
                  <div>
                     <span>Umidade {forecast.humidity}%</span>
                     <span>Nascer do Sol {forecast.sunrise}</span>
                     <span>Pôr do Sol {forecast.sunset}</span>
                  </div>
               </div>
               <button onClick={() => reset()}>Voltar</button>
            </div>
         )}
      </>
   );
}
