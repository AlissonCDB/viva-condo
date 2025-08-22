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
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="">
        <p className="font-semibold bg-blue-900 rounded-md px-[8vw] py-[1vh]">{obterSaudacao(null)}</p>
      </div>
    </div>
  );
}
