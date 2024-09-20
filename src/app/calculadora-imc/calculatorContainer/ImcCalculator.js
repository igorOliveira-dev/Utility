"use client";

import { useState } from "react";

export default function ImcCalculatorContainer() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      classifyBMI(bmiValue);
    } else {
      setBmi(null);
      setMessage("Por favor, insira os dados.");
    }
  };

  const classifyBMI = (bmi) => {
    if (bmi < 16) {
      setMessage("Muito abaixo do peso: Risco de desnutrição.");
    } else if (bmi >= 16 && bmi < 18.5) {
      setMessage("Abaixo do peso: Pode precisar ganhar peso.");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage("Peso normal: Mantenha um estilo de vida saudável.");
    } else if (bmi >= 25 && bmi < 29.9) {
      setMessage("Sobrepeso: Considere melhorar a dieta e exercícios.");
    } else if (bmi >= 30 && bmi < 34.9) {
      setMessage("Obesidade Grau I: Risco aumentado de problemas de saúde.");
    } else if (bmi >= 35 && bmi < 39.9) {
      setMessage("Obesidade Grau II: Risco alto de problemas de saúde.");
    } else {
      setMessage("Obesidade Grau III: Risco muito alto de problemas de saúde.");
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-full max-w-96 transparent20 p-4 rounded-lg">
        <div className="mb-4">
          <label className="block mb-2">Peso (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="text-black p-2 border border-gray-400 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Altura (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="text-black p-2 border border-gray-400 rounded w-full"
          />
        </div>
        <button onClick={calculateBMI} className="bg-blue-500 text-white p-2 rounded w-full">
          Calcular IMC
        </button>
        {message && (
          <div className="mt-4 p-4 transparent text-white rounded">
            {bmi && <h3 className="text-xl">Seu IMC: {bmi}</h3>}
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
