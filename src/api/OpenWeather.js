import ApiModel from "./ApiModel";
import ENV from "../env";

//parametros
const units = "metric";
const lang = "pt_br";
const country = "BR";

class OpenWeather extends ApiModel {
   constructor() {
      super();
      this.folder = "/data/2.5/weather?q=";
      this.apiKey = `,${country}&appid=${ENV().APIKEY_OPENWEATHER}`;
      this.Parameters = `&units=${units}&lang=${lang}`;
   }

   getWeather(city) {
      return this.api.get(this.folder + city + this.apiKey + this.Parameters).then(this.getData);
   }
}

export default OpenWeather;
