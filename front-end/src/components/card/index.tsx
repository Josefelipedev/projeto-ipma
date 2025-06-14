import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';

export function Card() {
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

      <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden ml-10 p-6 mt-10">
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
    </div>
  );
}
