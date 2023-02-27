import { useState } from "react";
import Alfabeto from "./alfabeto";

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [chute, setChute] = useState("");

    function chutar() {
        props.setFim(true)
        if (chute === props.palavraEscolhida) {
            console.log("bom chute");

            for (let i = 0; i < props.palavraEscolhida.length; i++) {
                props.letrasEscolhida.push(Array.from(props.palavraEscolhida)[i]);
                console.log("array pós chute", props.letrasEscolhida)
            }

        } else {
            console.log("errooou feio, errooou rude");
            props.setErros(6);
        }


        setChute("");
        console.log("fui clicado");
    }

    return (
        <div className="baixo">
            <div className="letras">
                {alfabeto.map((l) => <Alfabeto letra={l} palavraEscolhida={props.palavraEscolhida} letrasEscolhida={props.letrasEscolhida} setLetrasEscolhida={props.setLetrasEscolhida} setErros={props.setErros} erros={props.erros} fim={props.fim} />)}
            </div>
            <div className="chute">
                Já sei a palavra!
                <input type="text" id="fname" name="fname" data-test="guess-input" value={chute} onChange={(e) => setChute(e.target.value)} disabled={(props.palavraEscolhida && props.fim === false) ? false : true}></input>
                <button type="button" data-test="guess-button" onClick={() => chutar()} disabled={(props.palavraEscolhida && props.fim === false) ? false : true}><p>Chutar</p></button>
            </div>
        </div>
    )
}