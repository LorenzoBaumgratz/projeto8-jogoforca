import { useState } from "react";
import Jogo from "./components/jogo";
import Letras from "./components/letras";
import palavras from "./components/palavras";

export default function App() {
  //const [Botao,setBotao]=useState(false);
  const [palavraEscolhida, setpalavraEscolhida] = useState("");
  
  return (
    <>
      <Jogo palavra={palavras} setPal={setpalavraEscolhida} Pal={palavraEscolhida}/>
      <Letras /*habilitar={botao}*//>
    </>
  );
}
