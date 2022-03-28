import axios from "axios";
import ENV from "../env";

const api = axios.create({
   baseURL: ENV().API_URL_OPENWEATHER,
});

export default api;
