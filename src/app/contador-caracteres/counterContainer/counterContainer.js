"use client";

import { useState } from "react";

export default function CounterContainer() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const charCount = text.length;
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  const lineCount = text.split(/\r\n|\r|\n/).length;

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-lg mx-y">
        <textarea
          rows="10"
          cols="45"
          placeholder="Digite seu texto aqui..."
          value={text}
          onChange={handleChange}
          className="text-black p-1 mb-4 resize-none transparent20 p-4"
        />
        <div className="flex flex-col items-center w-full">
          <p className="p-2 transparent20 m-1 w-full text-start">Caracteres: {charCount}</p>
          <p className="p-2 transparent20 m-1 w-full text-start">Palavras: {wordCount}</p>
          <p className="p-2 transparent20 m-1 w-full text-start">Linhas: {lineCount}</p>
        </div>
      </div>
    </div>
  );
}
