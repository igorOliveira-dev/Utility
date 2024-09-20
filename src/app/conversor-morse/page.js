import Link from "next/link";
import ConverterContainer from "./converter/converterContainer";

export async function generateMetadata() {
  return {
    title: "Conversor de Código Morse | Utility",
    description:
      "Conversor de Código Morse. Converta facilmente texto em código Morse e vice-versa com nossa ferramenta online gratuita. Ideal para programadores, estudantes e entusiastas de tecnologia.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/conversor-morse",
    },
  };
}

export default function MorseConverter() {
  return (
    <main>
      <h1 className="text-3xl mt-2 text-center">Conversor de Código Morse:</h1>
      <ConverterContainer />
      <article className="p-10">
        <div className="mb-3">
          <h2 className="text-2xl">Descubra o Conversor de Código Morse</h2>
          <p>
            Um <strong>conversor de código Morse</strong> é uma ferramenta online que permite converter <strong>texto normal</strong>{" "}
            em <strong>código Morse</strong> e vice-versa. Isso é útil para <strong>programadores</strong>, <strong>estudantes</strong>{" "}
            e <strong>entusiastas de tecnologia</strong> que precisam trabalhar com <strong>dados codificados em Morse</strong> ou
            entender melhor a <strong>representação Morse</strong> de textos.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Guia de Uso do Conversor de Código Morse</h2>
          <p>
            Usar nosso <strong>conversor</strong> é simples. Basta digitar ou colar seu <strong>texto</strong> na área designada e a
            ferramenta automaticamente converterá o texto em <strong>código Morse</strong>. Da mesma forma, você pode colar{" "}
            <strong>código Morse</strong> para convertê-lo de volta em <strong>texto normal</strong>. Isso ajuda a{" "}
            <strong>economizar tempo</strong> e a garantir <strong>precisão</strong> nas suas conversões.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Vantagens do Conversor de Código Morse</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Facilidade de conversão:</strong> Converta texto para código Morse e vice-versa de forma rápida e precisa.
            </li>
            <li>
              <strong>Compreensão aprimorada:</strong> Melhore sua compreensão da representação Morse de dados.
            </li>
            <li>
              <strong>Economia de tempo:</strong> Reduza o tempo gasto em tarefas de codificação e decodificação.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Dicas para Utilizar o Conversor de Código Morse</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Revise o conteúdo:</strong> Sempre confira se o texto ou código Morse está correto antes de converter.
            </li>
            <li>
              <strong>Aprendizado contínuo:</strong> Use a ferramenta para aprender mais sobre a representação Morse de caracteres.
            </li>
            <li>
              <strong>Teste diferentes textos:</strong> Experimente converter diversos tipos de texto para ver como são representados
              em código Morse.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Considerações Finais</h2>
          <p>
            Nosso <strong>conversor de texto para código Morse</strong> e <strong>código Morse para texto</strong> é uma ferramenta
            essencial para qualquer pessoa que trabalha com <strong>dados codificados em Morse</strong> ou deseja entender melhor essa
            forma de representação. Experimente agora e veja como ele pode facilitar suas <strong>conversões</strong> e melhorar sua{" "}
            <strong>compreensão de dados em código Morse</strong>.
          </p>
        </div>
      </article>
      <div className="w-full pt-2 transparent flex justify-center">
        <div className="m-2">
          <h3 className="m-2">Serviços semelhantes:</h3>
          <nav className="flex flex-wrap">
            <Link href="conversor-binario" className="p-2 text-transparent90 underline">
              Conversor de binário
            </Link>
            <Link href="contador-caracteres" className="p-2 text-transparent90 underline">
              Contador de caracteres
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
