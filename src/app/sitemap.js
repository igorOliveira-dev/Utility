export default function sitemap() {
  const currentDate = new Date().toISOString();
  return [
    {
      url: "https://utilitytools.vercel.app/",
      lastModified: currentDate,
      priority: 1.0,
    },
    {
      url: "https://utilitytools.vercel.app/sobre",
      lastModified: currentDate,
      priority: 0.6,
    },
    {
      url: "https://utilitytools.vercel.app/contador-caracteres",
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: "https://utilitytools.vercel.app/conversor-binario",
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: "https://utilitytools.vercel.app/conversor-morse",
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: "https://utilitytools.vercel.app/gerador-senha",
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: "https://utilitytools.vercel.app/calculadora-imc",
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: "https://utilitytools.vercel.app/conversor-moedas",
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: "https://utilitytools.vercel.app/calculadora-regra-de-tres",
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: "https://utilitytools.vercel.app/calculadora-porcentagem",
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: "https://utilitytools.vercel.app/calculadora-tmb",
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: "https://utilitytools.vercel.app/contador-calorias",
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: "https://utilitytools.vercel.app/contador-calorias",
      lastModified: currentDate,
      priority: 0.8,
    },
  ];
}
