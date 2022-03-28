import React from "react";

//components
import Form from "../../components/Form/Form";
import WeatherForecast from "../../components/WeatherForecast/WeatherForecast";
import Loading from "../../components/Loading/Loading";

//hooks
import useForecast from "../../hooks/useForcast";
import Error from "../../components/Error/Error";

export default function SearchWeather() {
   const { submitRequest, forecast, isError, isLoading, location, reset } = useForecast();

   const submitSearch = (value) => {
      submitRequest(value);
   };

   return (
      <>
         {!forecast && (
            <>
               {isLoading && <Loading location={location} />}

               {!isLoading && !isError ? <Form submitSearch={submitSearch} /> : null}

               {isError && <Error reset={reset} />}
            </>
         )}

         <WeatherForecast forecast={forecast} reset={reset} />
      </>
   );
}
