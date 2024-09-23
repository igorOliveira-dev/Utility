"use client";

import { useState, useEffect, useRef } from "react";

const Combobox = ({ options, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);
  const comboboxRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(options.filter((option) => option.name.toLowerCase().includes(value.toLowerCase())));
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setInputValue("");
    setFilteredOptions(options); // Reset filtered options to the original options
    setShowOptions(false);
  };

  const handleClickOutside = (event) => {
    if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={comboboxRef} className="relative w-64">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowOptions(true)}
        className="w-full p-2 border border-gray-300 rounded text-black"
        placeholder="Escolha ou digite um alimento"
      />
      {showOptions && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)} className="p-2 cursor-pointer hover:bg-gray-100 text-black">
              {option.name}
            </li>
          ))}
          {filteredOptions.length === 0 && <li className="p-2 text-gray-500">Nenhum alimento encontrado</li>}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
