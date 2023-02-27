import { useState } from "react";
import Jogo from "./components/jogo";
import Letras from "./components/letras";
import palavras from "./palavras";

export default function App() {

  const [palavraEscolhida, setpalavraEscolhida] = useState("");
  const [letrasEscolhida, setLetrasEscolhida] = useState([]);
  const [erros, setErros] = useState(0);
  const [fim,setFim]=useState(false);

  return (
    <>
      <Jogo palavra={palavras} setpalavraEscolhida={setpalavraEscolhida} palavraEscolhida={palavraEscolhida} erros={erros} setErros={setErros} setLetrasEscolhida={setLetrasEscolhida} letrasEscolhida={letrasEscolhida} fim={fim} setFim={setFim}/>
      <Letras palavraEscolhida={palavraEscolhida} letrasEscolhida={letrasEscolhida} setLetrasEscolhida={setLetrasEscolhida} erros={erros} setErros={setErros} fim={fim} setFim={setFim}/>
    </>
  );
}
