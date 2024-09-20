"use client";

import { useEffect, useState } from "react";

export default function RuleOfThreeCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(null);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const calculate = () => {
    if (a && b && c) {
      setResult(((b * c) / a).toFixed(2));
    }
  };

  useEffect(() => {
    setText1(`${a} / ${b} = ${c} / ${result}`);
    setText2(`X = ${result}`);
  }, [result]);

  return (
    <div className="max-w-md mx-auto mt-10 p-5 transparent20 rounded-lg shadow-lg text-black">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-transparent">A</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-transparent">B</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-transparent">C</label>
          <input
            type="number"
            value={c}
            onChange={(e) => setC(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-transparent">X</label>
          <input
            type="text"
            value={result !== null ? result : ""}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black bg-gray-100"
          />
        </div>
      </div>
      <button onClick={calculate} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
        Calcular
      </button>
      {result !== null && (
        <div className="mt-4 p-4 transparent20 rounded-md">
          <p className="text-lg">A / B = C / X</p>
          <p className="text-lg">{text1}</p>
          <p className="text-lg">{text2}</p>
        </div>
      )}
    </div>
  );
}
