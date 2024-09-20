"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ConverterContainer() {
  const [moedaOrigem, setMoedaOrigem] = useState("USD");
  const [moedaDestino, setMoedaDestino] = useState("BRL");
  const [valor, setValor] = useState(1);
  const [resultado, setResultado] = useState(null);
  const [texto, setTexto] = useState("");

  const moedas = [
    { code: "AUD", name: "Dólar Australiano" },
    { code: "BRL", name: "Real Brasileiro" },
    { code: "CAD", name: "Dólar Canadense" },
    { code: "CHF", name: "Franco Suíço" },
    { code: "CNY", name: "Yuan Chinês" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Libra Esterlina" },
    { code: "JPY", name: "Iene Japonês" },
    { code: "NZD", name: "Dólar Neozelandês" },
    { code: "SEK", name: "Coroa Sueca" },
    { code: "USD", name: "Dólar Americano" },
  ];

  moedas.sort((a, b) => a.name.localeCompare(b.name));

  const converterMoeda = async () => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`);
      const taxa = response.data.rates[moedaDestino];
      setResultado((valor * taxa).toFixed(2));
    } catch (error) {
      console.error("Erro ao obter taxa de câmbio:", error);
    }
  };

  useEffect(() => {
    setTexto(`${valor} ${moedaOrigem} é igual a ${resultado} ${moedaDestino}`);
  }, [resultado]);

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-full max-w-md mx-auto transparent20 shadow-lg rounded-lg p-6">
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-black"
          placeholder="Valor"
        />
        <div className="flex mb-4 text-black">
          <select value={moedaOrigem} onChange={(e) => setMoedaOrigem(e.target.value)} className="w-1/2 p-2 border rounded mr-2">
            {moedas.map((moeda) => (
              <option key={moeda.code} value={moeda.code}>
                {moeda.code} ({moeda.name})
              </option>
            ))}
          </select>
          <select value={moedaDestino} onChange={(e) => setMoedaDestino(e.target.value)} className="w-1/2 p-2 border rounded">
            {moedas.map((moeda) => (
              <option key={moeda.code} value={moeda.code}>
                {moeda.code} ({moeda.name})
              </option>
            ))}
          </select>
        </div>
        <button onClick={converterMoeda} className="w-full bg-blue-500 text-white p-2 rounded text-center">
          Converter
        </button>
        {resultado && <p className="mt-4 text-lg">{texto}</p>}
      </div>
    </div>
  );
}
