import forca0 from "../assets/assets/forca0.png"
//import forca1 from "../assets/assets/forca1.png"
// import forca2 from "../assets/assets/forca2.png"
// import forca3 from "../assets/assets/forca3.png"
// import forca4 from "../assets/assets/forca4.png"
// import forca5 from "../assets/assets/forca5.png"
// import forca6 from "../assets/assets/forca6.png"

export default function Jogo(props) {

    function escolherPalavra() {

        props.setPal(props.palavra[Math.floor(Math.random() * props.palavra.length)]);
        console.log(Array.from(props.Pal));
        console.log(props.Pal);
        // if(prompt("PALAVRA")===props.Pal)
        // console.log("acertou")
    }


    return (
        <div className="jogo">
            <div className="superior">
                <img src={forca0} alt="imagem-forca" />
                <div className="direita">
                    <div className="escolher">
                        <p onClick={() => escolherPalavra()}>Escolher Palavra</p>
                    </div>
                    <div className="linhas">
                        {Array.from(props.Pal).map(() => <div className="linha">-</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}