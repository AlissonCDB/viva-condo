"use client"

export default function Home() {
  type Morador = {
    primeiroNome: string;
    sobrenome: string;
  }

  function formatarNomeMorador(moarador: Morador) {
    return moarador.primeiroNome + ' ' + moarador.sobrenome;
  }

  function obterSaudacao(morador: Morador | null) {
    if (morador) {
      return <span>Olá, {formatarNomeMorador(morador)}!</span>
    }
    return <span>Olá, Estranho!!!</span>;
  }

  const morador = {
    primeiroNome: "Alisson",
    sobrenome: "Britto"
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">{obterSaudacao(null)}</h1>
    </div>
  );
}
