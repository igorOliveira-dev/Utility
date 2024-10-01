import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Sobre | Utility",
    description:
      "Descubra o Utility Tools, uma plataforma inovadora que oferece uma variedade de ferramentas úteis para facilitar o seu dia a dia e agora também temos um blog para aprender muito sobre o mundo da tecnologia!",
    alternates: {
      canonical: "https://utilitytools.vercel.app/sobre",
    },
  };
}

export default function About() {
  return (
    <main>
      <article className="p-10 max-w-6xl">
        <h1 className="mb-5 text-3xl">Sobre o Utility</h1>
        <div className="mb-3">
          <h2 className="text-2xl">O que é o Utility?</h2>
          <p>
            O <strong>Utility</strong> é uma plataforma inovadora dedicada a fornecer uma gama de ferramentas úteis para facilitar o
            seu dia a dia. Nosso site oferece desde ferramentas simples de texto até soluções mais complexas, e estamos constantemente
            trabalhando para ampliar essas ferramentas e atender a todas as suas necessidades. Com uma interface intuitiva e fácil de
            usar, o Utility é o seu aliado perfeito para aumentar a produtividade e eficiência em diversas tarefas.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Nosso Blog de Tecnologia</h2>
          <p>
            Além das ferramentas, o <strong>Utility</strong> agora conta com um{" "}
            <Link href="blog" className="text-blue-500 hover:text-blue-700 underline">
              blog de tecnologia
            </Link>{" "}
            onde você pode se manter atualizado com as últimas tendências e inovações do mundo tech. Nosso blog oferece artigos,
            tutoriais e análises detalhadas para ajudar você a entender melhor as tecnologias emergentes e como elas podem ser
            aplicadas no seu dia a dia.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Nossa Missão</h2>
          <p>
            Todas as nossas ferramentas são projetadas para aumentar a produtividade e a eficiência, permitindo que você se concentre
            no que realmente importa. Nossa missão é simplificar suas tarefas diárias com soluções práticas e acessíveis.{" "}
            <Link className="text-blue-500 hover:text-blue-700 underline" href="/">
              Veja nossas ferramentas!
            </Link>
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Segurança e Privacidade</h2>
          <p>
            No <strong>Utility</strong>, a segurança dos seus dados é nossa prioridade. Em sua maior parte, não coletamos nenhum dado
            dos usuários. Caso algum dado seja coletado, ele será criptografado e mantido em completa segurança. Seus dados nunca serão
            compartilhados sem sua permissão. Para mais informações, consulte nossa{" "}
            <Link href="politica-privacidade" className="text-blue-500 hover:text-blue-700 underline">
              política de privacidade
            </Link>
            .
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Entre em Contato</h2>
          <p>
            Para conversar com um representante do nosso site, envie um e-mail para:{" "}
            <a href="mailto:utility.tools.contact@gmail.com" className="text-blue-500 hover:text-blue-700 underline">
              utility.tools.contact@gmail.com
            </a>
            . Estamos disponíveis para responder quaisquer dúvidas sobre o site, sua privacidade, nossas ferramentas, e também estamos
            abertos a sugestões para aprimorar ainda mais o Utility para você!
          </p>
        </div>
      </article>
    </main>
  );
}
