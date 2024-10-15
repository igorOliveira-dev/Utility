import ReturnButton from "../../components/ReturnButton";
import SimilarArticles from "../../components/SimilarArticles";

export async function generateMetadata() {
  return {
    title: "Tecnologia sustentável mudando o mundo | Utility",
    description: "Veja exemplos de tecnologia sustentável, definição e a forma que ela está mudando o noss mundo.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/blog/artigos/tecnologia-sustentavel-como-ela-pode-mudar-o-mundo",
    },
  };
}

export default function Article() {
  const keywords = ["sustentável", "ambiente", "inovação", "energia", "renovável"];
  const currentUrl = "/blog/artigos/tecnologia-sustentavel-como-ela-pode-mudar-o-mundo";

  return (
    <article className="p-6">
      <ReturnButton />
      <header className="mt-4">
        <h1 className="text-3xl font-bold">Tecnologia sustentável: como ela está mudando o mundo?</h1>
        <p className="mt-2">
          As tecnologias sustentáveis são tecnologias que se preocupam com a preservação do meio ambiente ou até mesmo ajudam o meio
          ambiente de certa forma, o que é muito importante em um mundo pós revolução industrial, que começou a produzir muitas coisas
          em massa de forma desnecessária sem perceber a quantidade de gases que estavam liberando na atmosfera e o prejuízo disso na
          qualidade do ar, na camada de ozônio, na vegetação e, consequentemente, na saúde humana e dos animais.
        </p>
      </header>
      <nav className="shadow p-4">
        <details className="p-2">
          <summary className="cursor-pointer p-2 text-lg font-semibold">Você verá nesse artigo:</summary>
          <ul className="list-disc list-inside">
            <li>
              <a href="#definicao" className="text-blue-500 hover:text-blue-700 underline">
                Definição de tecnologia sustentável
              </a>
            </li>
            <li>
              <a href="#como-afeta" className="text-blue-500 hover:text-blue-700 underline">
                Como isso afeta a sua vida?
              </a>
            </li>
            <li>
              <a href="#exemplos" className="text-blue-500 hover:text-blue-700 underline">
                Exemplos de tecnologia sustentável
              </a>
            </li>
            <li>
              <a href="#pequenas-acoes" className="text-blue-500 hover:text-blue-700 underline">
                Pequenas ações que você pode fazer
              </a>
            </li>
            <li>
              <a href="#conclusao" className="text-blue-500 hover:text-blue-700 underline">
                Importância e conclusão
              </a>
            </li>
          </ul>
        </details>
      </nav>
      <section id="definicao" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Definição de tecnologia sustentável</h2>
        <p>
          Podemos ver exemplos de tecnologias sustentáveis, por exemplo, em usinas que utilizam de meios naturais pra gerar energia,
          como usinas hidrelétricas, usinas eólicas e solares, conseguir atender as necessidades humanas com esse pensamento de não
          prejudicar a natureza é crucial, principalmente no mundo atual onde estamos vendo temperaturas altíssimas, qualidade do ar
          terrível, derretimentos anormais de geleiras e várias outras catastrofes causadas pela poluição que a produção desenfreada
          sem conciência causou.
        </p>
      </section>
      <section id="como-afeta" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Como isso afeta a sua vida?</h2>
        <p>
          Eu sei, você deve estar pensando: "Legal, mas como isso muda meu dia a dia?" Vamos ser diretos: essas tecnologias podem te
          ajudar de várias formas, começando pelo bolso. No caso da energia solar, por exemplo, se você instalar painéis solares em
          casa, pode economizar uma grana boa com a conta de luz. E essa economia pode ser ainda maior quando baterias mais eficientes,
          como as de areia, estiverem disponíveis e conseguirem armazenar energia por longos períodos.
        </p>
        <p>
          Agora pensa comigo, como seria viver numa cidade onde o ar é mais limpo, onde os prédios ao nosso redor, em vez de sujar o
          ar, ajudam a filtrá-lo? E não para por aí: imagine toda a energia que usamos sendo gerada de forma limpa, vinda do sol ou do
          vento. Não é só sobre ser "ecológico", é sobre viver com mais saúde e em um ambiente muito mais agradável.
        </p>
      </section>
      <section id="exemplos" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Algumas ideias que você provavelmente nem conhecia</h2>
        <p>
          Muita gente já sabe dos painéis solares e dos carros elétricos. Ok, isso já é um passo. Mas, você sabia que existem tijolos
          que purificam o ar? Pois é. Esses tijolos foram desenvolvidos pra serem usados em construções e conseguem "sugar" a poluição.
          São tipo um filtro de ar gigante, só que no meio da cidade. Imagina se a gente começar a construir prédios com esses tijolos?
          A qualidade do ar das cidades grandes, que é um pesadelo pra quem tem problemas respiratórios, poderia melhorar muito.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Concreto que absorve CO2:</strong> A construção civil sempre foi um dos grandes vilões quando falamos sobre emissão
            de gases poluentes, sendo responsável por uma parte considerável desse problema. Só que agora, os engenheiros estão
            experimentando algo bem interessante: concreto que, em vez de jogar CO2 no ar, absorve durante o processo de secagem. Não é
            incrível? A ideia é que, com o tempo, essa inovação chegue às nossas casas, ajudando a reduzir os impactos ambientais de
            forma super eficaz.
          </li>
          <li>
            <strong>Baterias de areia:</strong> Cientistas lá da Finlândia conseguiram criar baterias usando areia. Isso mesmo, a areia
            comum que você vê nas praias. Essas baterias são mais amigáveis ao meio ambiente do que aquelas tradicionais que usam
            materiais como o lítio, que não são tão fáceis de obter e ainda geram resíduos. Essas novas baterias podem armazenar
            energia solar ou eólica e dar conta de abastecer casas e empresas, até em momentos que o sol não está brilhando ou o vento
            não está soprando.
          </li>
        </ul>
      </section>
      <section id="pequenas-acoes" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Pequenas ações que você pode fazer pelo meio ambiente</h2>
        <p>
          Outro ponto importante é que não é só o governo ou as grandes empresas que têm que fazer algo. As nossas escolhas no dia a
          dia também têm um peso. Quando a gente apoia empresas que investem em soluções limpas, estamos dando um empurrãozinho pra que
          mais inovações como essas cheguem ao mercado. E não precisa ser uma revolução na nossa rotina: trocar uma lâmpada normal por
          uma de LED, instalar um painel solar na sua casa ou até mesmo escolher materiais mais sustentáveis quando for reformar seu
          lar pode fazer uma baita diferença.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Trocar lâmpadas tradicionais por LEDs:</strong> As lâmpadas de led são muito mais duradouras e gastam muito menos
            energia, isso faz com que elas sejam bem melhores pras pessoas e para o meio ambiente.
          </li>
          <li>
            <strong>Usar sacolas reutilizáveis:</strong> Tenha sacolas e use elas ao fazer suas compras, isso reduz o impacto ambiental
            da alta produção de sacolas e do descarte errado delas.
          </li>
          <li>
            <strong>Optar por transporte público ou ir a pé:</strong> Usar transporte público ou ir a pé vai diminuir bastante a
            emissão de gases poluentes de carros, além de que ir a pé vai ser benéfico pra sua saúde, vai te conectar à natureza e te
            tornar levemente mais ativo e saudável.
          </li>
          <li>
            <strong>Separar o lixo para reciclagem:</strong> Isso é algo que todos deveriam fazer desde sempre, pois a maior causa de
            poluição das águas é o descarte errado de coisas que poderiam ser recicladas, inclusive, a maior parte do oxigênio do mundo
            vem das algas, então é importante para todo mundo manter essa água limpa.
          </li>
          <li>
            <strong>Compostar restos de alimentos:</strong> Com uma composteira você pode dar um fim aos seus restos de comida e cascas
            de uma forma bem sustentável, já que futuramente isso vai se tornar um ótimo adubo pra muitos tipos de plantas e não vai
            causar impactos ambientais.
          </li>
          <li>
            <strong>Comprar produtos locais e de temporada:</strong> Quando você compra produtos da sua região você está impulsionando
            os produtores próximos de você e evitando a poluição causada por transportes, é apenas benefício pra todo mundo.
          </li>
          <li>
            <strong>Usar produtos com embalagens recicláveis ou sem embalagem:</strong> Isso entra novamenta na questão da importância
            da reciclagem, estariamos em um mundo bem melhor se tudo que fosse possível de reciclar realmente tivesse sido reciclado.
          </li>
          <li>
            <strong>Investir em eletrodomésticos eficientes:</strong> Aparelhos que consomem menos energia vai favorecer tanto o meio
            ambiente, quanto o seu dinheiro, diminuindo muito as suas contas mensais.
          </li>
          <li>
            <strong>Reduzir o uso de água:</strong> Fechar a torneira enquanto escova os dentes ou tomar banhos mais curtos é
            fundamental pra preservar os recursos hídricos do mundo, que são fundamentais pra qualquer tipo de vida no nosso planeta.
          </li>
          <li>
            <strong>Desconectar aparelhos eletrônicos:</strong> Desligar o que não está em uso não só economiza energia, mas também
            prolonga a vida útil dos seus eletrônicos e reduz o gasto de energia da sua casa.
          </li>
          <li>
            <strong>Praticar o consumo consciente:</strong> Antes de comprar algo novo, tenha certeza de que aquilo vai realmente ser
            benéfico para você e não vai ser apenas algo a mais largado pela sua casa.
          </li>
        </ul>
      </section>
      <section id="conclusao" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Importância e conclusão</h2>
        <p>
          Você pode pensar que essa conversa sobre sustentabilidade é algo distante, mas a verdade é que, se não mudarmos agora, o
          futuro não vai ser tão promissor. Não só pro planeta, mas pra gente mesmo. A ideia de usar tecnologia sustentável não é só
          sobre proteger a natureza. É sobre garantir que a gente consiga manter o nosso estilo de vida, com todo o conforto que temos
          hoje, só que de um jeito mais esperto e sem destruir o que ainda resta de bom no planeta.
        </p>
        <p>
          Tem uma frase que diz que "não herdamos a Terra dos nossos antepassados, estamos tomando-a emprestada de nossos filhos".
          Parece um clichê, mas faz todo sentido. A gente precisa começar a usar nossa criatividade e conhecimento pra criar um futuro
          melhor e essas tecnologias estão aqui pra isso.
        </p>
        <p>
          Agora me diz: com tudo isso em mente, dá pra ignorar o impacto que a tecnologia sustentável pode ter na sua vida? Se cada um
          de nós fizer um pouco, podemos construir um futuro mais inteligente, mais econômico e muito mais limpo.
        </p>
      </section>
      <ReturnButton />
      <SimilarArticles keywords={keywords} currentUrl={currentUrl} />
    </article>
  );
}
