"use client";

import { useState } from "react";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState(null);
  const [error, setError] = useState(null);

  const calculateBMR = () => {
    if (weight != "" && height != "" && age != "") {
      setError(null);
      let bmrValue;
      if (gender === "male") {
        bmrValue = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
      } else {
        bmrValue = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
      }
      setBmr(bmrValue);
    } else {
      setError("Preencha os campos");
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
          <button onClick={calculateBMR} className="p-2 bg-blue-500 text-white rounded mt-4 w-full">
            Calcular
          </button>
        </div>
        {bmr ? (
          <div className="transparent20 p-2 text-center mt-4">
            <p>
              Sua Taxa Metabólica Basal é: <br /> {bmr.toFixed(2)} calorias/dia
            </p>
          </div>
        ) : (
          <div className="transparent20 p-2 text-center mt-4">
            <p className="text-transparent">O resultado aparecerá aqui</p>
          </div>
        )}
        <div>{error && <p className="text-red-500 text-center mt-4">{error}</p>}</div>
      </div>
    </div>
  );
}
