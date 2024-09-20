import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 flex flex-col items-center transparent">
      <p>© 2024 / Utilitiy Tools / Todos os direitos reservados</p>
      <div>
        <Link href="politica-privacidade" className="m-2 p-2 text-blue-500 hover:text-blue-700 underline">
          Política de privacidade
        </Link>
        <Link href="/sobre" className="m-2 p-2 text-blue-500 hover:text-blue-700 underline">
          Sobre o site
        </Link>
      </div>
    </footer>
  );
}
