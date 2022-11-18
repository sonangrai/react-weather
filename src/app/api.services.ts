import axios from "axios";
const openkey = process.env.REACT_APP_APPID;

/**
 *
 * Async function to get data
 *
 */
export const getWeatherApi = async (city: string) => {
  let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openkey}`;

  let res = await axios.get(endpoint);

  return res;
};
