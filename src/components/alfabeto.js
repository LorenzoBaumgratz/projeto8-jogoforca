export default function Alfabeto(props) {
    let c = Array.from(props.palavraEscolhida);




    function selecionarLetra(letra) {


        props.setLetrasEscolhida([...props.letrasEscolhida, letra]);
        console.log("array letras clicadas", [...props.letrasEscolhida, letra]);

        if (c.includes(letra)) {


        } else {

            props.setErros(props.erros + 1)
        }

    }

    return (
        <button data-test="letter" disabled={(props.palavraEscolhida && props.fim === false ? (props.letrasEscolhida.includes(props.letra) ? true : false) : true)} onClick={() => selecionarLetra(props.letra)}> <p>{props.letra}</p></button>
    )
}