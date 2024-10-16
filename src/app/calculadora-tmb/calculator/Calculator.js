"use client";

import { useState } from "react";
import Link from "next/link";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [bmr, setBmr] = useState(null);
  const [totalCalories, setTotalCalories] = useState(null);
  const [error, setError] = useState(null);

  const calculateBMR = () => {
    if (weight && height && age && activityLevel) {
      setError(null);
      let bmrValue;

      if (gender === "male") {
        bmrValue = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
      } else {
        bmrValue = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
      }

      const activityMultiplier = {
        sedentary: 1.2,
        lightly_active: 1.375,
        moderately_active: 1.55,
        very_active: 1.725,
        extra_active: 1.9,
      };

      const totalCaloriesValue = bmrValue * activityMultiplier[activityLevel];
      setBmr(bmrValue);
      setTotalCalories(totalCaloriesValue);
    } else {
      setError("Preencha todos os campos");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-5 m-4 transparent20 w-xl rounded-lg">
        <div className="flex flex-col items-center">
          <div className="flex justify-around">
            <div className="flex flex-col justify-around">
              <div className="mb-4 mr-4">
                <label className="block mb-2">Peso (kg):</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="p-2 border border-gray-300 rounded text-black w-40"
                  placeholder="Peso"
                />
              </div>
              <div className="mb-4 mr-4">
                <label className="block mb-2">Idade:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="p-2 border border-gray-300 rounded text-black w-40"
                  placeholder="Idade"
                />
              </div>
            </div>
            <div className="flex flex-col justify-around">
              <div className="mb-4">
                <label className="block mb-2">Altura (cm):</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="p-2 border border-gray-300 rounded text-black w-40"
                  placeholder="Altura"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Sexo:</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="p-2 border border-gray-300 rounded text-black w-40"
                >
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Nível de Atividade Física:</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="p-2 border border-gray-300 rounded text-black w-80"
            >
              <option value="sedentary">Sedentário</option>
              <option value="lightly_active">Levemente Ativo</option>
              <option value="moderately_active">Moderadamente Ativo</option>
              <option value="very_active">Muito Ativo</option>
              <option value="extra_active">Extremamente Ativo</option>
            </select>
          </div>
          <button onClick={calculateBMR} className="p-2 bg-blue-500 text-white rounded mt-4 w-full">
            Calcular
          </button>
        </div>
        {bmr ? (
          <div className="transparent20 p-2 mt-4">
            <h3 className="mt-2 font-bold">Taxa metabólica basal:</h3>
            <p>{bmr.toFixed(2)} calorias; </p>
            <h3 className="mt-2 font-bold">Gasto calórico total:</h3>
            <p>{totalCalories.toFixed(2)} calorias/dia;</p>
          </div>
        ) : (
          <div className="transparent20 p-2 text-center mt-4">
            <p className="text-transparent">O resultado aparecerá aqui</p>
          </div>
        )}
        <div>{error && <p className="text-red-500 text-center mt-4">{error}</p>}</div>
        {totalCalories && !error ? (
          <p className="text-center mt-4">
            Teste também nosso{" "}
            <Link href="contador-calorias" className="text-blue-500 hover:text-blue-700 underline">
              Contador de calorias
            </Link>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
