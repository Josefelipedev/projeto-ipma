import api_ipma from '@/lib/api_ipma';
import { ApiResponseIdentifiers, WeatherResponseIpma } from '@/types/ipma';

const getDistritsFaro = async () => {
  const { data } = await api_ipma<ApiResponseIdentifiers>(
    '/open-data/distrits-islands.json'
  );
  const distrits = data.data.find((distrit) => distrit.local === 'Faro');

  return distrits?.globalIdLocal;
};

export const getWeatherFaroIpma = async () => {
  const globalIdLocal = await getDistritsFaro();

  const { data } = await api_ipma<WeatherResponseIpma>(
    `/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`
  );

  return data;
};
