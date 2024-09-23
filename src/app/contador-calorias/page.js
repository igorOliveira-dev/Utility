import CalorieCounter from "./calorieCounter/CalorieCounter";
import Link from "next/link";

export default function Calories() {
  return (
    <main>
      <h1 className="text-3xl mt-2 text-center">Contador de calorias</h1>
      <CalorieCounter />
      <article className="p-10">
        <div className="mb-3">
          <h2 className="text-2xl">Conheça o Contador de Calorias de Alimentos</h2>
          <p>
            O <strong>contador de calorias de alimentos</strong> é uma ferramenta essencial para quem deseja monitorar a ingestão
            calórica de forma precisa. Insira o peso em gramas dos alimentos e obtenha automaticamente o total de calorias. Ideal para
            quem busca manter uma dieta <strong>equilibrada</strong> e <strong>saudável</strong>.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Como Utilizar o Contador de Calorias</h2>
          <p>
            Para usar o <strong>contador de calorias de alimentos</strong>, procure os alimentos consumidos e insira o peso em gramas
            dos alimentos nos campos designados. A ferramenta calculará automaticamente o total de calorias, fornecendo resultados{" "}
            <strong>rápidos</strong> e <strong>precisos</strong>. Isso é útil para planejar refeições, controlar a dieta e muito mais.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Vantagens de Usar o Contador de Calorias</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Resultados rápidos e precisos:</strong> O contador oferece resultados instantâneos, eliminando a necessidade de
              cálculos manuais e reduzindo a margem de erro.
            </li>
            <li>
              <strong>Versatilidade:</strong> Seja para controlar a ingestão calórica diária ou planejar dietas específicas, a
              ferramenta é útil em uma ampla gama de contextos.
            </li>
            <li>
              <strong>Fácil de usar:</strong> Com uma interface intuitiva, qualquer pessoa pode usar o contador sem dificuldades,
              tornando os cálculos acessíveis a todos.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Dicas para Melhor Aproveitar o Contador</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Verifique os dados inseridos:</strong> Sempre confira os números que você está usando para garantir que os
              cálculos sejam precisos.
            </li>
            <li>
              <strong>Planeje suas refeições:</strong> Use o contador para planejar refeições, controlar a dieta e muito mais.
            </li>
            <li>
              <strong>Experimente diferentes combinações:</strong> Teste várias combinações de alimentos para entender melhor como as
              calorias se acumulam e afetam sua dieta.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Conclusão</h2>
          <p>
            Utilize nosso <strong>contador de calorias de alimentos</strong> para monitorar sua ingestão calórica de forma rápida e
            fácil. Para uma análise mais detalhada e personalizada, é sempre recomendável consultar um <strong>nutricionista</strong>.
            Simplifique sua vida com nosso prático <strong>contador de calorias de alimentos</strong>.
          </p>
        </div>
      </article>
      <div className="w-full pt-2 transparent flex justify-center">
        <div className="m-2">
          <h3 className="m-2">Serviços semelhantes:</h3>
          <nav className="flex flex-wrap">
            <Link href="calculadora-imc" className="p-2 text-transparent90 underline">
              Calculadora de IMC
            </Link>
            <Link href="calculadora-tmb" className="p-2 text-transparent90 underline">
              calculadora de TMB
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
