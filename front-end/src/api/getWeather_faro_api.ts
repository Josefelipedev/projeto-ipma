import api from '@/lib/api';

interface WeatherItem {
  forecastDate: string;
  minTemperature: string;
  maxTemperature: string;
  precipitationProbability: string;
  windDirection: string;
  windSpeed: number;
  latitude: string;
  longitude: string;
}

interface WeatherResponse {
  weather: WeatherItem[];
  dateWeather: string[];
}

export const getWeather_faro_api = async () => {
  const { data } = await api<WeatherResponse>('/ipma/weather-faro');
  return data;
};
