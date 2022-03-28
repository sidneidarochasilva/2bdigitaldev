const variables = {
   production: {
      APIKEY_OPENWEATHER: "e57b64615385a07255d51d8979b56ddc",
      API_URL_OPENWEATHER: "https://api.openweathermap.org",
   },
};

const getEnvVariables = () => {
   return variables.production;
};

export default getEnvVariables;
