"use client";

import { useState } from "react";

export default function PasswordGeneratorContainer() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let characters = lowerCase + upperCase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="p-4 transparent20 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block mb-2">
            Comprimento da senha:
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min="6"
              max="20"
              className="ml-2 p-1 border rounded text-black transparent20"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Incluir números:
            <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="ml-2" />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Incluir símbolos:
            <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="ml-2" />
          </label>
        </div>
        <button onClick={generatePassword} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Gerar Senha
        </button>

        <div className="mt-4 h-10 transparent20">
          {password ? (
            <>
              <p className="text-lg break-all p-2 text-center">{password}</p>
            </>
          ) : (
            <>
              <p className="break-all p-2 text-center text-transparent">A senha aparecerá aqui.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
