import React,{useState} from "react";

function Contador(){

    const [numero,setNumero]= useState(0);
    return(
        <div>
            <p>Número:{numero}</p>
            <button onClick={()=> setNumero(numero+1)}>Adicione</button>
            <button onClick={()=> setNumero(numero-1)}>Diminua</button>
        </div>
    );
}export default Contador;
