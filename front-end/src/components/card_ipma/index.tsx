'use client';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';

import { useQuery } from '@tanstack/react-query';
import { useReducer } from 'react';
import { getWeatherFaroIpma } from '@/api/getWeather_faro_ipma';

type State = { index: number };
type Action = 'next' | 'prev';

function weatherReducer(
  state: State,
  action: Action,
  maxLength: number
): State {
  switch (action) {
    case 'next':
      return { index: Math.min(state.index + 1, maxLength - 1) };
    case 'prev':
      return { index: Math.max(state.index - 1, 0) };
    default:
      return state;
  }
}

export function CardIpma() {
  const {
    data: weatherIpma,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['weather-faro-ipma'],
    queryFn: getWeatherFaroIpma,
  });
  const countWeather = weatherIpma?.data.length ?? 0;

  const [weather, dispatch] = useReducer(
    (state: State, action: Action) =>
      weatherReducer(state, action, countWeather),
    { index: 0 }
  );
  const currentWeather = weatherIpma?.data[weather.index];
  if (isLoading) {
    return <p className="text-center mt-10">Carregando previsão...</p>;
  }

  if (isError || !weatherIpma) {
    return (
      <p className="text-center mt-10 text-red-600">Erro ao carregar dados.</p>
    );
  }

  return (
    <div className="flex justify-center">
      {/* Dados que vem da API */}
      <div className="max-w-sm w-70 mx-auto bg-white rounded-xl overflow-hidden p-6 mt-10 ">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 select-none">
              Faro Tempo IPMA
            </h2>
            <p className="text-gray-600 select-none">
              {currentWeather?.forecastDate}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-4xl font-bold text-gray-800 select-none">
            {currentWeather?.tMax} °C
          </p>
          <p className="text-md text-gray-600 select-none">
            Precipitação: {currentWeather?.precipitaProb}%
          </p>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <div>
            <p className="text-md text-gray-600 select-none">
              Máx: {currentWeather?.tMax}
            </p>
            <p className="text-md text-gray-600 select-none">
              Mín: {currentWeather?.tMin}
            </p>
          </div>
          <div>
            <p className="text-md text-gray-600 select-none">
              Vento: {currentWeather?.classWindSpeed}
            </p>
            <p className="text-md text-gray-600 select-none">
              Direção: {currentWeather?.predWindDir}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <div
            className={`border-2 border-gray-200 rounded-lg overflow-hidden ml-2 p-1 mt-2 hover:bg-gray-100 ${weather.index === 0 && 'opacity-50'} `}
          >
            <MdSkipPrevious
              size={25}
              color="red"
              onClick={() => dispatch('prev')}
            />
          </div>
          <div
            className={`border-2 border-gray-200 rounded-lg overflow-hidden ml-2 p-1 mt-2 hover:bg-gray-100 ${weather.index === countWeather - 1 && 'opacity-50'}`}
          >
            <MdSkipNext
              size={25}
              color="green"
              onClick={() => dispatch('next')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
