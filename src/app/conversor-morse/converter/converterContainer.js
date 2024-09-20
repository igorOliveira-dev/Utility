"use client";

import { useState } from "react";

export default function ConverterContainer() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");

  const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    " ": "/",
  };

  const textToMorse = (text) => {
    return text
      .toUpperCase()
      .split("")
      .map((char) => morseCode[char] || "")
      .join(" ");
  };

  const morseToText = (morse) => {
    const morseToChar = Object.fromEntries(Object.entries(morseCode).map(([char, morse]) => [morse, char]));
    return morse
      .split(" ")
      .map((code) => morseToChar[code] || "")
      .join("");
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setMorse(textToMorse(newText));
  };

  const handleMorseChange = (e) => {
    const newMorse = e.target.value;
    setMorse(newMorse);
    setText(morseToText(newMorse));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-md">
        <label className="block mb-2">Texto:</label>
        <textarea
          className="w-full p-2 mb-4 border border-gray-400 rounded transparent20"
          value={text}
          onChange={handleTextChange}
          rows="4"
        />
        <label className="block mb-2">Código Morse:</label>
        <textarea
          className="w-full p-2 mb-4 border border-gray-400 rounded transparent20"
          value={morse}
          onChange={handleMorseChange}
          rows="4"
        />
      </div>
    </div>
  );
}
