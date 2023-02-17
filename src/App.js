import { useState } from "react";
import Jogo from "./components/jogo";
import Letras from "./components/letras";
import palavras from "./components/palavras";

export default function App() {
  const [Botao,setBotao]=useState(true);
  const [palavraEscolhida, setpalavraEscolhida] = useState("");
  const [letrasEscolhida,setLetrasEscolhida]=useState([]);
  
  return (
    <>
      <Jogo palavra={palavras} setpalavraEscolhida={setpalavraEscolhida} palavraEscolhida={palavraEscolhida} setBotao={setBotao}/>
      <Letras Botao={Botao} setBotao={setBotao} palavraEscolhida={palavraEscolhida} letrasEscolhida={letrasEscolhida} setLetrasEscolhida={setLetrasEscolhida}/>
    </>
  );
}
