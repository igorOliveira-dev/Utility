export async function generateMetadata() {
  return {
    title: "Política de Privacidade | Utility",
    description:
      "Leia nossa política de privacidade para entender como coletamos, usamos e protegemos suas informações no . Garantimos a segurança e a privacidade dos seus dados enquanto você utiliza nossas ferramentas.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/politica-privacidade",
    },
  };
}

export default function PrivacyPolicy() {
  return (
    <main>
      <article className="p-10 max-w-6xl">
        <h1 className="mb-5 text-3xl">Política de Privacidade</h1>
        <div className="mb-3">
          <h2 className="text-2xl">Coleta de Informações:</h2>
          <p>
            No Utility, valorizamos sua privacidade. Coletamos apenas as informações necessárias para melhorar nossos serviços. Isso pode
            incluir dados de navegação, cookies e informações fornecidas por você.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Uso das Informações:</h2>
          <p>
            Utilizamos as informações coletadas para personalizar sua experiência, melhorar nossas ferramentas e comunicar atualizações
            importantes. Seus dados são usados exclusivamente para esses fins.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Compartilhamento de Informações:</h2>
          <p>
            Não compartilhamos suas informações com terceiros, exceto quando necessário para cumprir a lei ou proteger nossos direitos. Seus
            dados são mantidos em segurança e não são vendidos ou trocados.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Segurança das Informações:</h2>
          <p>
            Implementamos medidas de segurança rigorosas e modernas para proteger suas informações contra acesso não autorizado, alteração,
            divulgação ou destruição. Seus dados são armazenados com segurança.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Direitos dos Usuários:</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Para exercer esses direitos,
            entre em contato conosco através do e-mail fornecido abaixo.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Alterações na Política de Privacidade:</h2>
          <p>
            Podemos atualizar esta política de privacidade periodicamente. Notificaremos você sobre quaisquer mudanças significativas
            através do nosso site. Recomendamos que você revise esta política regularmente.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Contato:</h2>
          <p>
            Se você tiver dúvidas ou preocupações sobre nossa política de privacidade, entre em contato conosco pelo e-mail:
            utility.tools.contact@gmail.com. Estamos aqui para ajudar!
          </p>
        </div>
      </article>
    </main>
  );
}
