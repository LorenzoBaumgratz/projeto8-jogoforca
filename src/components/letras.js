import Alfabeto from "./alfabeto";

export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return(
        <div className="letras">
            {alfabeto.map((l)=><Alfabeto letra={l}/>)}
        </div>
    )
}