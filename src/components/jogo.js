import forca0 from "../assets/assets/forca0.png"
import forca1 from "../assets/assets/forca1.png"
import forca2 from "../assets/assets/forca2.png"
import forca3 from "../assets/assets/forca3.png"
import forca4 from "../assets/assets/forca4.png"
import forca5 from "../assets/assets/forca5.png"
import forca6 from "../assets/assets/forca6.png"

export default function Jogo(props) {
    const imgsforca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
    let arr = Array.from(props.palavraEscolhida);
    let res = arr.filter(function (item) { return !props.letrasEscolhida.includes(item) });

    function escolherPalavra() {
        props.setpalavraEscolhida(props.palavra[Math.floor(Math.random() * props.palavra.length)]);
        if (props.fim || props.erros === 6) {
            props.setErros(0);
            props.setLetrasEscolhida([]);
            props.setFim(false)
        } else {

            console.log(Array.from(props.palavraEscolhida));
            console.log(props.palavraEscolhida);
        }
    }
    console.log("Aqui ta o res", res);
    console.log(props.palavraEscolhida);

    function fim() {

        console.log("ERROS", props.erros);
        if (res.length === 0) {
            props.setFim(true)
            console.log("palavra escolhida", props.palavraEscolhida)
            console.log("GANHOU")
        }

        if (props.erros === 6) {
            console.log("PERDEU")
            for (let i = 0; i < props.palavraEscolhida.length; i++) {
                console.log("separado", arr[i]);
                props.letrasEscolhida.push(arr[i]);
                props.setFim(true)
            }
        }
        console.log("letras escolhidas", props.letrasEscolhida);
    }

    function contem(index) {
        fim();
        for (let i = 0; i < props.letrasEscolhida.length; i++) {
            if (Array.from(props.palavraEscolhida)[index] === (props.letrasEscolhida[i])) {
                return true;
            }
        }
    }

    return (
        <div className="jogo">
            <div className="superior">
                <img data-test="game-image" src={imgsforca[props.erros]} alt={`forca${props.erros}`} />
                <div className="direita">
                    <button data-test="choose-word" className="escolher" onClick={() => escolherPalavra()}>
                        Escolher Palavra
                    </button>
                    <div className="linhas" data-test="word">
                        {Array.from(props.palavraEscolhida).map((a, index) => <div className={`linha ${(props.fim === true || props.erros === 6) ? (props.erros === 6 ? "vermelho" : "verde") : ""}`}>{contem(index) ? `${Array.from(props.palavraEscolhida)[index]}` : "_"}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}