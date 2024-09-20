"use client";
import { useState } from "react";

export default function Calculator() {
  const [percent, setPercent] = useState(null);
  const [value, setValue] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const calculatePercent = () => {
    if (percent && value) {
      setError(null);
      setResult(((percent / 100) * value).toFixed(2));
    } else {
      setError("Insira os valores");
    }
  };

  return (
    <div className="flex flex-col items-center m-4">
      <div className="transparent20 p-4 rounded-lg max-w-96">
        <div className="flex justify-center items-center">
          <p className="p-4">Quanto é</p>
          <div className="flex flex-col">
            <input
              type="number"
              placeholder="%"
              name="percent"
              className="p-0.5 text-black w-20 rounded text-center"
              onChange={(e) => setPercent(e.target.value)}
            />
          </div>
          <p className="p-4">% de</p>
          <div className="flex flex-col">
            <input
              type="number"
              placeholder="valor"
              name="value"
              className="p-0.5 text-black w-20 rounded text-center"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={calculatePercent}>
          Calcular porcentagem
        </button>
        <div className="transparent20 p-2 text-center mt-4">
          {result ? <p>{result}</p> : <p className="text-transparent">O resultado aparecerá aqui</p>}
        </div>
        <div>{error && <p className="text-red-500 text-center mt-2">{error}</p>}</div>
      </div>
    </div>
  );
}
