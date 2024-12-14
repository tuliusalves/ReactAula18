import React,{useState} from "react";

function BotaoAlterador(){
    const [status,setStatus]=useState('Ligado');
    const handleClick = () =>{
        setStatus(status=='Ligado' ? 'Desligado' : 'Ligado');
    }
    
    return(
        <div>
           <button onClick={handleClick}>{status}</button>
        </div>
    );

}export default BotaoAlterador;
