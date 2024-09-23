"use client";

import { useState, useEffect } from "react";
import Combobox from "../combobox/Combobox";
import Link from "next/link";

const CalorieCounter = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const foodOptions = [
    { name: "Achocolatado", calories: 0.8 },
    { name: "Abacate", calories: 1.6 },
    { name: "Abacaxi", calories: 0.5 },
    { name: "Abóbora", calories: 0.3 },
    { name: "Abobrinha", calories: 0.2 },
    { name: "Açaí", calories: 0.7 },
    { name: "Acelga", calories: 0.2 },
    { name: "Acerola", calories: 0.3 },
    { name: "Agrião", calories: 0.2 },
    { name: "Alface", calories: 0.1 },
    { name: "Alho", calories: 1.5 },
    { name: "Almôndega", calories: 2.5 },
    { name: "Amendoim", calories: 5.7 },
    { name: "Amêndoa", calories: 5.7 },
    { name: "Amora", calories: 0.4 },
    { name: "Arroz", calories: 1.3 },
    { name: "Azeitona", calories: 1.5 },
    { name: "Aveia", calories: 3.8 },
    { name: "Bacalhau", calories: 1.3 },
    { name: "Bacon", calories: 5.4 },
    { name: "Banana", calories: 0.9 },
    { name: "Batata", calories: 0.8 },
    { name: "Batata frita", calories: 3.1 },
    { name: "Batata-doce", calories: 0.9 },
    { name: "Berinjela", calories: 0.2 },
    { name: "Beterraba", calories: 0.4 },
    { name: "Biscoito", calories: 4.5 },
    { name: "Brigadeiro", calories: 3.8 },
    { name: "Brócolis", calories: 0.3 },
    { name: "Café", calories: 0.0 },
    { name: "Caju", calories: 0.4 },
    { name: "Calabresa", calories: 3.2 },
    { name: "Camarão", calories: 0.9 },
    { name: "Canela", calories: 2.4 },
    { name: "Cenoura", calories: 0.4 },
    { name: "Cereja", calories: 0.6 },
    { name: "Chocolate ao leite", calories: 5.3 },
    { name: "Chocolate amargo", calories: 5.4 },
    { name: "Chuchu", calories: 0.2 },
    { name: "Coco", calories: 3.5 },
    { name: "Couve", calories: 0.3 },
    { name: "Couve-flor", calories: 0.3 },
    { name: "Coxinha", calories: 2.7 },
    { name: "Creme de Leite", calories: 2.1 },
    { name: "Damasco", calories: 0.5 },
    { name: "Dendê", calories: 8.8 },
    { name: "Doce de Leite", calories: 3.2 },
    { name: "Ervilha", calories: 0.8 },
    { name: "Escarola", calories: 0.2 },
    { name: "Espinafre", calories: 0.2 },
    { name: "Farinha de Mandioca", calories: 3.6 },
    { name: "Feijão", calories: 1.4 },
    { name: "Feijão preto", calories: 1.3 },
    { name: "Frango", calories: 2.0 },
    { name: "Goiaba", calories: 0.6 },
    { name: "Grão-de-bico", calories: 1.6 },
    { name: "Hambúrguer", calories: 2.5 },
    { name: "Hortelã", calories: 0.4 },
    { name: "Iogurte", calories: 0.6 },
    { name: "Inhame", calories: 1.1 },
    { name: "Jabuticaba", calories: 0.6 },
    { name: "Jaca", calories: 0.9 },
    { name: "Jambo", calories: 0.4 },
    { name: "Jamelão", calories: 0.5 },
    { name: "Jenipapo", calories: 0.7 },
    { name: "Jerimum", calories: 0.3 },
    { name: "Jiló", calories: 0.4 },
    { name: "Juçara", calories: 0.6 },
    { name: "Jurubeba", calories: 0.5 },
    { name: "Kiwi", calories: 0.6 },
    { name: "Laranja", calories: 0.4 },
    { name: "Leite", calories: 0.4 },
    { name: "Lentilha", calories: 1.2 },
    { name: "Limão", calories: 0.3 },
    { name: "Linguiça", calories: 0.3 },
    { name: "Maçã", calories: 0.5 },
    { name: "Mamão", calories: 0.4 },
    { name: "Mandioca", calories: 1.2 },
    { name: "Manga", calories: 0.6 },
    { name: "Manteiga", calories: 7.2 },
    { name: "Maracujá", calories: 0.4 },
    { name: "Melancia", calories: 0.3 },
    { name: "Melão", calories: 0.3 },
    { name: "Milho", calories: 0.9 },
    { name: "Morango", calories: 0.3 },
    { name: "Nabo", calories: 0.2 },
    { name: "Nectarina", calories: 0.4 },
    { name: "Noz", calories: 6.5 },
    { name: "Ovo", calories: 1.4 },
    { name: "Pão", calories: 2.5 },
    { name: "Pão de Queijo", calories: 3.2 },
    { name: "Pão Integral", calories: 2.4 },
    { name: "Pão Francês", calories: 2.7 },
    { name: "Pão Sírio", calories: 2.3 },
    { name: "Pão de Alho", calories: 3.5 },
    { name: "Pão de Forma", calories: 2.5 },
    { name: "Pão de Milho", calories: 2.6 },
    { name: "Pão de Centeio", calories: 2.4 },
    { name: "Pepino", calories: 0.2 },
    { name: "Pera", calories: 0.6 },
    { name: "Pêssego", calories: 0.4 },
    { name: "Picanha", calories: 3.0 },
    { name: "Pimenta", calories: 0.4 },
    { name: "Pimentão", calories: 0.3 },
    { name: "Pinhão", calories: 2.0 },
    { name: "Presunto", calories: 1.3 },
    { name: "Pudim", calories: 1.2 },
    { name: "Queijo mussarela", calories: 2.8 },
    { name: "Queijo coalho", calories: 3.3 },
    { name: "Quiabo", calories: 0.3 },
    { name: "Quibe", calories: 1.6 },
    { name: "Rabanete", calories: 0.2 },
    { name: "Repolho", calories: 0.2 },
    { name: "Ricota", calories: 1.4 },
    { name: "Salsicha", calories: 2.8 },
    { name: "Salsão", calories: 0.2 },
    { name: "Sardinha", calories: 2.0 },
    { name: "Sorvete", calories: 2.0 },
    { name: "Tapioca", calories: 1.3 },
    { name: "Tomate", calories: 0.2 },
    { name: "Uva", calories: 0.7 },
    { name: "Vagem", calories: 0.3 },
    { name: "Yogurte", calories: 0.6 },
  ];

  useEffect(() => {
    calculateTotalCalories(selectedFoods);
  }, [selectedFoods]);

  const handleSelectFood = (food) => {
    setSelectedFoods([...selectedFoods, { ...food, quantity: 100 }]);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedFoods = selectedFoods.map((food, i) => (i === index ? { ...food, quantity: quantity } : food));
    setSelectedFoods(updatedFoods);
  };

  const handleDeleteFood = (index) => {
    const updatedFoods = selectedFoods.filter((_, i) => i !== index);
    setSelectedFoods(updatedFoods);
  };

  const calculateTotalCalories = (foods) => {
    const total = foods.reduce((sum, food) => sum + food.calories * food.quantity, 0);
    setTotalCalories(total);
  };

  return (
    <div className="flex justify-center p-2">
      <div className="p-4 transparent20 rounded-xl w-96">
        <Combobox options={foodOptions} onSelect={handleSelectFood} />
        <div className="mt-4">
          {selectedFoods.map((food, index) => (
            <div key={index} className="transparent border border-gray-400 p-2 mb-2 rounded">
              <div className="mb-2 flex items-center justify-between">
                <p className="w-52 truncate">{food.name}</p>
                <div className="flex">
                  <input
                    type="number"
                    value={food.quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    className="w-16 border border-gray-300 rounded text-black"
                  />
                  <p className="p-1">g</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">{(food.calories * food.quantity).toFixed(2)} calorias</span>
                <button onClick={() => handleDeleteFood(index)} className="mr-4 p-1 w-16 bg-red-500 text-white rounded">
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-6" />
        <p className="text-xl mt-4 font-black">Total de Calorias: {totalCalories.toFixed(2)}</p>
        {selectedFoods.length > 0 && (
          <div>
            <p>
              Teste também nossa{" "}
              <Link href="calculadora-tmb" className="text-blue-500 hover:text-blue-700 underline">
                Calculadora de TMB
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalorieCounter;
