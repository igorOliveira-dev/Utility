import Link from "next/link";
import PasswordGeneratorContainer from "./generator/PasswordGenerator";

export async function generateMetadata() {
  return {
    title: "Gerador de senhas | Utility",
    description:
      "Descubra como usar nosso gerador de senhas fortes para criar senhas seguras e aleatórias. Aprenda a gerar senhas complexas com facilidade, protegendo suas contas contra ataques de força bruta e tentativas de adivinhação.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/gerador-senha",
    },
  };
}

export default function PasswordGenerator() {
  return (
    <main>
      <h1 className="text-3xl mt-2 text-center">Gerador de senhas:</h1>
      <PasswordGeneratorContainer />
      <article className="p-10">
        <div className="mb-3">
          <h2 className="text-2xl">Por que Usar um Gerador de Senhas?</h2>
          <p>
            Nosso <strong>gerador de senhas</strong> é uma ferramenta essencial para criar senhas seguras e aleatórias. Ideal para
            proteger suas contas contra ataques de força bruta e tentativas de adivinhação, ele ajuda a garantir a segurança online.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Como Utilizar o Gerador de Senhas</h2>
          <p>
            Para usar o <strong>gerador de senhas</strong>, basta selecionar os critérios desejados, como comprimento da senha e
            inclusão de caracteres especiais. A ferramenta gerará automaticamente uma senha forte e aleatória, pronta para uso
            imediato.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Vantagens do Gerador de Senhas</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Segurança aprimorada:</strong> Crie senhas complexas que são difíceis de adivinhar ou quebrar.
            </li>
            <li>
              <strong>Facilidade de uso:</strong> Gere senhas fortes com apenas alguns cliques, sem complicações.
            </li>
            <li>
              <strong>Personalização:</strong> Ajuste os critérios da senha conforme suas necessidades específicas.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Dicas para Criar Senhas Fortes</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Use uma combinação de caracteres:</strong> Inclua letras maiúsculas e minúsculas, números e símbolos para
              aumentar a complexidade.
            </li>
            <li>
              <strong>Evite informações pessoais:</strong> Não use nomes, datas de nascimento ou palavras comuns que possam ser
              facilmente adivinhadas.
            </li>
            <li>
              <strong>Atualize suas senhas regularmente:</strong> Troque suas senhas periodicamente para manter a segurança.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Considerações Finais</h2>
          <p>
            Utilize nosso <strong>gerador de senhas</strong> para criar senhas seguras e aleatórias, protegendo suas contas contra
            ataques de força bruta e tentativas de adivinhação. Experimente agora e veja como é fácil garantir a segurança online com
            senhas fortes e complexas.
          </p>
        </div>
      </article>
      <div className="w-full pt-2 transparent flex justify-center">
        <div className="m-2">
          <h3 className="m-2">Serviços semelhantes:</h3>
          <nav className="flex flex-wrap">
            <Link href="conversor-moedas" className="p-2 text-transparent90 underline">
              Conversor de moedas
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
