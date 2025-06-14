'use client';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { getWeather_faro_api } from '@/api/getWeather_faro_api';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export function CardApi() {
  const {
    data: weatherApi,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['weather-faro-api'],
    queryFn: getWeather_faro_api,
  });
  const [index, setIndex] = useState(0);
  if (isLoading) {
    return <p className="text-center mt-10">Carregando previsão...</p>;
  }

  if (isError || !weatherApi) {
    return (
      <p className="text-center mt-10 text-red-600">Erro ao carregar dados.</p>
    );
  }

  // API
  const forecastData = weatherApi?.weather;

  // protege contra index inválido (se o array estiver vazio)
  const day = forecastData[index] ?? forecastData[0];

  const handleNext = () => {
    if (index < forecastData.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="flex justify-center">
      {/* Dados que vem da API */}
      <div className="max-w-sm  w-70 mx-auto bg-white rounded-xl overflow-hidden ml-10 p-6 mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 select-none">
              Faro Tempo API
            </h2>
            <p className="text-gray-600 select-none">
              {day.forecastDate.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-4xl font-bold text-gray-800 select-none">
            {day.maxTemperature} °C
          </p>
          <p className="text-md text-gray-600">
            Precipitação: {day.precipitationProbability}%
          </p>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <div>
            <p className="text-md text-gray-600 select-none">
              Máx: {day.maxTemperature}
            </p>
            <p className="text-md text-gray-600 select-none">
              Mín: {day.minTemperature}
            </p>
          </div>
          <div>
            <p className="text-md text-gray-600 select-none">
              Vento: {day.windSpeed}
            </p>
            <p className="text-md text-gray-600 select-none">
              Direção: {day.windDirection}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <div
            className={`border-2 border-gray-200 rounded-lg overflow-hidden ml-2 p-1 mt-2 hover:bg-gray-100 ${index === 0 && 'opacity-50'}`}
          >
            <MdSkipPrevious size={25} color="red" onClick={handlePrev} />
          </div>
          <div
            className={`border-2 border-gray-200 rounded-lg overflow-hidden ml-2 p-1 mt-2 hover:bg-gray-100 ${index === forecastData.length - 1 && 'opacity-50'}`}
          >
            <MdSkipNext size={25} color="green" onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
