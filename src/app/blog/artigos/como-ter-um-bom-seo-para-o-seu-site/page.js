import Image from "next/image";
import Link from "next/link";
import ReturnButton from "../../components/ReturnButton";
import SimilarArticles from "../../components/SimilarArticles";

export async function generateMetadata() {
  return {
    title: "Como ter um bom SEO para o seu site | Utility",
    description:
      "Aprenda a otimizar o SEO do seu site para alcançar cada vez mais público pelas buscas do google com esse guia detalhado que mostra os principais pontos do Search Engine Optimization.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/blog/artigos/como-ter-um-bom-seo-para-o-seu-site",
    },
  };
}

export default function Article() {
  const keywords = ["SEO", "Metadados", "Link", "Responsividade", "usuário"];
  const currentUrl = "/blog/artigos/como-ter-um-bom-seo-para-o-seu-site";

  return (
    <article className="p-6">
      <ReturnButton />
      <header className="mt-4">
        <h1 className="text-3xl font-bold">Como ter um bom SEO no seu site</h1>
        <p className="mt-2">
          O SEO (Search Engine Optimization) são métodos utilizados para otimizar o seu site para os motores de busca dos navegadores,
          assim você pode alcançar um número maior de usuário. Existem diversas estratégias que podem ser aplicadas para melhorar o seu
          SEO e nesse artigo você vai entender como organizar essas estratégias e fazer o que for melhor para o seu site.
        </p>
      </header>
      <nav className="shadow p-4">
        <details className="p-2">
          <summary className="cursor-pointer p-2 text-lg font-semibold">Você verá nesse artigo:</summary>
          <ul className="list-disc list-inside">
            <li>
              <a href="#relato-do-autor" className="text-blue-500 hover:text-blue-700 underline">
                Relato do autor
              </a>
            </li>
            <li>
              <a href="#estrategias-se-seo" className="text-blue-500 hover:text-blue-700 underline">
                O que é SEO?
              </a>
            </li>
            <li>
              <a href="#regras-de-estrutura" className="text-blue-500 hover:text-blue-700 underline">
                Regras de estruturação
              </a>
            </li>
            <li>
              <a href="#ferramentas-de-seo" className="text-blue-500 hover:text-blue-700 underline">
                Ferramentas de SEO
              </a>
            </li>
            <li>
              <a href="#ferramentas-de-seo" className="text-blue-500 hover:text-blue-700 underline">
                Responsividade
              </a>
            </li>
            <li>
              <a href="#resolva-problemas" className="text-blue-500 hover:text-blue-700 underline">
                Resolva os problemas do usuário
              </a>
            </li>
            <li>
              <a href="#conclusao" className="text-blue-500 hover:text-blue-700 underline">
                Conclusão
              </a>
            </li>
          </ul>
        </details>
      </nav>
      <section id="relato-do-autor" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Relato do autor do blog sobre SEO</h2>
        <p>
          "Prazer, eu sou o Igor, criador desse site e de todos os seus artigos, eu estudo atualmente na Etec cursando desenvolvimento
          de sistemas e estou buscando uma estabilidade na carreira com os meus projetos. Eu acredito que esse site é o que tem maior
          potencial de se tornar algo cada vez maior e eu afirmo que uma das coisas que mais importaram até agora na minha visibilidade
          foi o SEO, estou a meses focando nesse assunto e eu espero que você saia desse artigo com mais conhecimento do que entrou!"
        </p>
      </section>
      <section id="estrategias-de-seo" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Estratégias de SEO</h2>
        <p>
          Como já dito, o SEO são estratégias usadas para aumentar o alcance da sua página nos motores de busca dos navegadores, essas
          estratégias incluem:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Otimização de metadados:</strong> Os metadados devem ser definidos em cada uma das suas páginas com inteligência se
            você procura um bom SEO, com destaque ao título, a descrição, ao link canônico e ao metadado de autor. Pense em palavras
            para usar no título e na descrição com sabedoria para poder repetir elas várias vezes durante a sua página, essas palavras
            serão as palavras chave da sua página e será pesquisando por elas que as pessoas vão encontrar o seu site.
          </li>
          <li>
            <strong>Boa estruturação:</strong> Uma página com boa estruturação é outro ponto fundamental para um bom SEO, já que é pelo
            conteúdo da página e pela sua organização que o google vai rankear o seu site, cada página dever ter um h1, alguns h2 e se
            necessário, h3 e listas. Lembre de sempre incluir suas palavras chaves nesses textos para mostrar ao navegador que você
            está se aprofundando nesses temas.
          </li>
          <li>
            <strong>Velocidade de carregamento:</strong> Outro ponto considerado bastante importante é o tempo que suas páginas demoram
            pra carregar, é fundamental que esse tempo seja curto pra evitar que os usuários saiam rapidamente do site e se tornem mais
            um número na sua taxa de rejeição. Você pode evitar esse carregamento lento otimizando suas imagens, usando renderização no
            lado do servidor (com next por exemplo), otimizando suas funções e adotando outras boas práticas.
          </li>
          <li>
            <strong>Qualidade e relevancia do conteúdo:</strong> O conteúdo do seu site deve ser algo que além de atrair os usuários,
            mantenha-os por um tempo bom navegando pelas suas páginas, pois esse tempo é extremamente importante para os navegadores
            entenderem o seu conteúdo como relevante e útil para rankear melhor as suas páginas. Pense sempre nos benefícios que o seu
            conteúdo vai trazer para os seus usuários.
          </li>
          <li>
            <strong>Links externos:</strong> Um dos pontos mais importantes e considerados pelo google são os links externos, que são
            os links de outros sites apontando para o seu, principalmente se o link apontando para o seu site vier de um site que já
            tem certa visibilidade, isso mostra a confiança que o seu site entrega e quanto mais links externos você tiver,
            provavelmente o seu site vai ser mais bem rankeados e aparecer como resultado para diversas buscas.
          </li>
        </ul>
      </section>
      <section id="regras-de-estrutura" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Regras de estruturação</h2>
        <p>
          Para um SEO bom você deve conseguir estruturar a sua página da maneira certa, seguindo algumas regras de elementos
          específicos do html, por exemplo, você não pode ter um h1 dentro de uma tag de parágrafo e não é recomendado ter mais de um
          h1 em cada página, esse tipo de erro pode prejudicar bastante o seu rankeamento nos navegadores por mais que não mude o
          design e a leitura do seu site com css ativado. Sempre é uma boa ideia pesquisar se você pode usar os elementos da forma que
          você está usando e garantir que o seu html está semântico. Existem algumas ferramentas que verificam tanto essa estruturação,
          quanto outros pontos do SEO do seu site, um bom exemplo disso é o sitechecker, com certeza vale a pena dar uma conferida no
          seu SEO a partir de algum site confiável focado nisso para encontrar todos os erros e entender possíveis melhorias.
        </p>
      </section>
      <section id="ferramentas-de-seo" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Ferramentas de SEO</h2>
        <p>
          Para melhorar o seu SEO existem algumas ferramentas muito relevantes, eu diria que as duas principais são o Google Analytics
          e o Google Search Console, dominar essas ferramentas vai ajudar muito a entender o que você deve fazer para melhorar seu SEO.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Google Analytics:</strong> O Google Analytics é uma ferrmaneta do Google que te apresenta em forma de gráficos os
            dados sobre os acessos do seu site, lá você pode ver as páginas mais acessadas, o tempo de engajamento dos usuários, países
            dos usuários, formas que o seu site foi acessado, e muitas outras informações que são realmente relevantes quando você está
            buscando um SEO eficiente. Com base nas informações do Google Analytics você pode ver as páginas suas que estão gerando
            poucos acessos, entender o público alvo do seu site e ir implementando mudanças baseadas no que o seu site está precisando.
          </li>
          <li>
            <strong>Google Search Console:</strong> O Google Search Console é outra ferramenta criada pelo Google e é necessária para
            melhorar o SEO do seu site e até garantir os direitos do seu conteúdo, já que por lá você solicita a indexação de cada uma
            das suas páginas, e apenas depois daquela solicitação o conteúdo se torna seu, isso é importantíssimo para evitar que o seu
            conteúdo seja roubado por outro site e também pra alcançar os seus usuários o mais rápido possível.
          </li>
        </ul>
      </section>
      <section id="responsividade" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Responsividade</h2>
        <p>
          A responsividade no seu site é muito importante pois afeta a experiência dos usuários e pode impactar muito o rankeamento da
          sua página nos motores de busca, ainda mais com um aumento crescente no uso de dispositivos móveis na atualidade, uma
          estratégia muito usada para criar qualquer tipo de site é o mobile first, que é criar o site pensando primeiramente nos
          dispositivos mobile e depois adaptar para os dispositivos maiores, já que otimizar o seu conteúdo em uma tela pequena
          geralmente é mais difícil do que numa dela de computador.
        </p>
      </section>
      <section id="resolva-problema" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Resolva os problemas do usuário</h2>
        <p>
          Se o usuário chegou até o seu site ele provavelmente tem algum problema pra ser resolvido, por exemplo, você está agora nesse
          artigo com um problema: aprender mais sobre SEO, se esse artigo conseguiu te ajudar, você consequentemente ficou mais tempo
          nele, pode considerar a releitura e em geral, vai gerar um impacto positivo no site. O que você precisa fazer na hora de
          criar a sua página é exatamente isso, o usuário vai ter um problema pra ser resolvido e o seu objetivo é fazer ele encontrar
          a resolução da melhor maneira possível, se você não fizer isso o usuário provavelmente vai ficar pouco tempo engajado no site
          e isso vai fazer o seu rankeamento cair.
        </p>
      </section>
      <section id="conclusao" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Conclusão</h2>
        <p>
          Vimos nesse artigo que a implementação de SEO nos seus sites é crucial pra que você alcance muitas pessoas pelas buscas do
          google e de outros navegadores, espero que o conteúdo tenha esclarecido suas dúvidas e que você consiga aplicar um ótimo SEO
          nos seus sites! Lembre-se sempre de fazer o seu conteúdo pensando na experiência do usuário em primeiro lugar.
        </p>
      </section>
      <ReturnButton />
      <SimilarArticles keywords={keywords} currentUrl={currentUrl} />
    </article>
  );
}
