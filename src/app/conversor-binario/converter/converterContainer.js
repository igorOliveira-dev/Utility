"use client";

import { useState } from "react";

export default function ConverterContainer() {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");

  const textToBinary = (text) => {
    return text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  };

  const binaryToText = (binary) => {
    return binary
      .split(" ")
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setBinary(textToBinary(newText));
  };

  const handleBinaryChange = (e) => {
    const newBinary = e.target.value;
    setBinary(newBinary);
    setText(binaryToText(newBinary));
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
        <label className="block mb-2">Binário:</label>
        <textarea
          className="w-full p-2 mb-4 border border-gray-400 rounded transparent20"
          value={binary}
          onChange={handleBinaryChange}
          rows="4"
        />
      </div>
    </div>
  );
}
