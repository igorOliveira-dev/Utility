"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-5 flex justify-between items-center transparent">
      <div>
        <a href="/" className="flex items-center cursor-pointer">
          <picture>
            <source srcSet="/utilityLogo300x90.webp" media="(prefers-color-scheme: dark)" />
            <Image src="/utilityLogoBlack300x90.webp" alt="Logo do site Utility Tools" height={45} width={150} />
          </picture>
        </a>
      </div>
      <div className="relative">
        <button onClick={toggleMenu} className="flex flex-col items-center justify-center w-8 h-8">
          <span className={`block w-7 h-1 bgSecondary mb-1 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-7 h-1 bgSecondary mb-1 transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-1 bgSecondary transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {isOpen && (
          <nav className="absolute right-0 mt-2 w-52 bg-white text-black rounded-lg shadow-lg">
            <ul className="flex flex-col p-2">
              <li className="flex flex-col">
                <Link className="px-2 py-2 hover:bg-gray-200 cursor-pointer" href="/" onClick={toggleMenu}>
                  Serviços
                </Link>
              </li>
              <li className="flex flex-col">
                <Link className="px-2 py-2 hover:bg-gray-200 cursor-pointer" href="blog" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              <li className="flex flex-col">
                <Link className="px-2 py-2 hover:bg-gray-200 cursor-pointer" href="sobre" onClick={toggleMenu}>
                  Sobre
                </Link>
              </li>
              <li className="flex flex-col">
                <Link className="px-2 py-2 hover:bg-gray-200 cursor-pointer" href="politica-privacidade" onClick={toggleMenu}>
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
