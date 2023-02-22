import forca0 from "../assets/assets/forca0.png"
import forca1 from "../assets/assets/forca1.png"
import forca2 from "../assets/assets/forca2.png"
import forca3 from "../assets/assets/forca3.png"
import forca4 from "../assets/assets/forca4.png"
import forca5 from "../assets/assets/forca5.png"
import forca6 from "../assets/assets/forca6.png"

export default function Jogo(props) {
    const imgsforca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
    function escolherPalavra() {
        if (props.fim || props.erros === 6) {
            window.location.reload(true);
        } else {
            props.setpalavraEscolhida(props.palavra[Math.floor(Math.random() * props.palavra.length)]);
            console.log(Array.from(props.palavraEscolhida));
            console.log(props.palavraEscolhida);
        }
    }
    console.log(Array.from(props.palavraEscolhida));
    console.log(props.palavraEscolhida);

    function fim() {
        const arr = Array.from(props.palavraEscolhida);
        const res = arr.filter(function (item) { return !props.letrasEscolhida.includes(item) });
        if (res.length === 0) {
            props.setFim(true)
            console.log("palavra escolhida", props.palavraEscolhida)
        }

        if(props.erros===6){
            for(let i=0;i<props.palavraEscolhida.length;i++){
               props.letrasEscolhida.push(arr[i]);
               props.setFim(true) //FUNCIONA?
            }
        }
    }

    function contem(index) {
        for (let i = 0; i < props.letrasEscolhida.length; i++) {
            if (Array.from(props.palavraEscolhida[index]) == (props.letrasEscolhida[i])) {
                fim();
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
                        {Array.from(props.palavraEscolhida).map((a, index) => <div className={`linha ${(props.fim === true || props.erros === 6) ? (props.erros === 6 ? "vermelho" : "verde") : ""}`}>{(contem(index)) ? `${Array.from(props.palavraEscolhida)[index]}` : "_"}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}