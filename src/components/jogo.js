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

        props.setpalavraEscolhida(props.palavra[Math.floor(Math.random() * props.palavra.length)]);
        console.log(Array.from(props.palavraEscolhida));
        console.log(props.palavraEscolhida);
        // if(prompt("PALAVRA")===props.Pal)
        // console.log("acertou")
    }
    console.log(Array.from(props.palavraEscolhida));
    console.log(props.palavraEscolhida);

    function contem(index) {
        for (let i = 0; i < props.letrasEscolhida.length; i++) {
            if (Array.from(props.palavraEscolhida[index]) == (props.letrasEscolhida[i])) {
                return true;
            }
        }
    }

    return (
        <div className="jogo">
            <div className="superior">
                <img src={imgsforca[props.erros]} alt={`forca${props.erros}`} />
                <div className="direita">
                    <div className="escolher">
                        <p onClick={() => escolherPalavra()}>Escolher Palavra</p>
                    </div>
                    <div className="linhas">
                        {Array.from(props.palavraEscolhida).map((a, index) => <div className={`linha ${(props.fim)? "verde": "vermelho"}`}>{(contem(index)) ? `${Array.from(props.palavraEscolhida)[index]}` : "_"}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}