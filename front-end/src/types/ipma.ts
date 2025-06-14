interface Location {
  idRegiao: string;
  idAreaAviso: string;
  idConcelho: number;
  globalIdLocal: number;
  latitude: string;
  longitude: string;
  idDistrito: string;
  local: string;
}

export interface ApiResponseIdentifiers {
  owner: string;
  country: string;
  data: Location[];
}

export interface WeatherItemIpma {
  classWindSpeed: number;
  forecastDate: string;
  precipitaProb: string;
  idWeatherType: number;
  latitude: string;
  longitude: string;
  predWindDir: number;
  tMax: string;
  tMin: string;
}

export interface WeatherResponseIpma {
  country: string;
  globalIdLocal: number;
  data: WeatherItemIpma[];
  dataUpdate: string;
  owner: string;
}
