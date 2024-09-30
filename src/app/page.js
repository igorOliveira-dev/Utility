"use client";

import BlogBanner from "@/components/BlogBanner";
import React, { useState } from "react";
import MainArticlesSection from "./blog/components/mainArticlesSection/MainArticlesSection";

const services = [
  {
    title: "Calculadora de IMC",
    description: "Avalia o seu índice de massa corporal.",
    path: "calculadora-imc",
  },
  {
    title: "Calculadora de porcentagem",
    description: "Faz contas envolvendo porcentagem.",
    path: "calculadora-porcentagem",
  },
  {
    title: "Calculadora de regra de três",
    description: "Te mostra o resultado de contas de regra de três.",
    path: "calculadora-regra-de-tres",
  },
  {
    title: "Calculadora de TMB",
    description: "Calcula sua taxa metabólica basal e avalia sua necessidade de calorias.",
    path: "calculadora-tmb",
  },
  {
    title: "Contador de calorias",
    description: "Conta as calorias totais de suas refeições.",
    path: "contador-calorias",
  },
  {
    title: "Contador de caracteres",
    description: "Conta quantos caracteres, palavras e linhas tem no seu texto.",
    path: "contador-caracteres",
  },
  {
    title: "Conversor de código binário",
    description: "Transcreve o seu texto para código binário ou vice-versa.",
    path: "conversor-binario",
  },
  {
    title: "Conversor de código morse",
    description: "Transcreve seu texto para código morse ou vice-versa.",
    path: "conversor-morse",
  },
  {
    title: "Conversor de moedas",
    description: "Converte o valor de uma moeda para outra.",
    path: "conversor-moedas",
  },
  {
    title: "Gerador de senhas seguras",
    description: "Cria senhas seguras com caracteres, números e simbolos aleatórios.",
    path: "gerador-senha",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(search.toLowerCase()) || service.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <section className="p-5">
        <h1 className="text-3xl font-bold">Nossos Serviços:</h1>
        <input
          type="text"
          className="mb-5 mt-5 max-w-lg w-full text-black p-2 rounded-md transparent20"
          placeholder="Pesquise nossos serviços"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {filteredServices.map((service, index) => (
            <li key={index}>
              <a
                href={service.path}
                className="p-3 max-w-xl flex flex-col items-start cursor-pointer hover:ml-2 transition-all duration-150 border-b border-b-1 border-solid border-custom-color bgHover"
              >
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="text-gray-400">{service.description}</p>
              </a>
            </li>
          ))}
        </ul>
        <BlogBanner />
        <MainArticlesSection />
      </section>
    </main>
  );
}
