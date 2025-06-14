'use client';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { getWeatherFaro } from '@/api/getWeatherFaro';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export function Card() {
  const {
    data: weatherApi,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['weather'],
    queryFn: getWeatherFaro,
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
      <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden p-6 mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Faro Tempo</h2>
            <p className="text-gray-600">{new Date().toLocaleString()}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-4xl font-bold text-gray-800">29oC</p>
          <p className="text-md text-gray-600">Precipitação: {14}%</p>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <div>
            <p className="text-md text-gray-600">Máx: {14}</p>
            <p className="text-md text-gray-600">Mín: {14}</p>
          </div>
          <div>
            <p className="text-md text-gray-600">Vento: {14}</p>
            <p className="text-md text-gray-600">Direção: {14}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden ml-2 p-1 mt-2 hover:bg-gray-100">
            <MdSkipPrevious size={25} color="red" />
          </div>
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden ml-2 p-1 mt-2 hover:bg-gray-100">
            <MdSkipNext size={25} color="green" />
          </div>
        </div>
      </div>
      {/* Dados que vem da API */}
      <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden ml-10 p-6 mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Faro Tempo API
            </h2>
            <p className="text-gray-600">{day.forecastDate.toLocaleString()}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-4xl font-bold text-gray-800">
            {day.maxTemperature} °C
          </p>
          <p className="text-md text-gray-600">
            Precipitação: {day.precipitationProbability}%
          </p>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <div>
            <p className="text-md text-gray-600">Máx: {day.maxTemperature}</p>
            <p className="text-md text-gray-600">Mín: {day.minTemperature}</p>
          </div>
          <div>
            <p className="text-md text-gray-600">Vento: {day.windSpeed}</p>
            <p className="text-md text-gray-600">
              Direção: {day.windDirection}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden ml-2 p-1 mt-2 hover:bg-gray-100">
            <MdSkipPrevious size={25} color="red" onClick={handlePrev} />
          </div>
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden ml-2 p-1 mt-2 hover:bg-gray-100">
            <MdSkipNext size={25} color="green" onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
