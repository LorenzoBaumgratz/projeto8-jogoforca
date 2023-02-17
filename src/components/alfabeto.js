export default function Alfabeto(props) {
    const c = Array.from(props.palavraEscolhida);
    function selecionarLetra(letra) {

        
        props.setLetrasEscolhida([...props.letrasEscolhida, letra]);
        console.log("array letras clicadas", [...props.letrasEscolhida, letra]);

        if (c.includes(letra)) {
            console.log("tem a letra");

        } else {
            console.log("NAO tem a letra");

            //mudar imagem de acordo com contagem de erros
        }

    }

    return (
        <button disabled={(props.palavraEscolhida ? (props.letrasEscolhida.includes(props.letra)? true: false) : true)} onClick={() => selecionarLetra(props.letra)}> <p>{props.letra}</p></button>
    )
}