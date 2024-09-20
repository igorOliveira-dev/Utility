import Calculator from "./calculator/Calculator";

export async function generateMetadata() {
  return {
    title: "Calculadora de Porcentagem | Utility",
    description:
      "Essa calculadora de taxa metabólica basal te ajuda a entender o mínimo de calorias que o seu corpo precisa com base nas suas informações.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/calculadora-tmb",
    },
  };
}

export default function TmbCalculator() {
  return (
    <main>
      <h1 className="text-3xl mt-2 text-center">Calculadora de TMB</h1>
      <Calculator />
    </main>
  );
}
