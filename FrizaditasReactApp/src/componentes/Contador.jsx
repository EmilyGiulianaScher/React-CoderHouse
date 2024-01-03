import { useState } from "react";

function Contador () {

    const[contador,setContador] = useState(0);
    console.log(`el contador va por: ${contador}`);
    console.log(`el componente se renderizo`);
    return(
        <div>
           <button onClick={()=> setContador(contador + 1)}>Sumar</button>
           <h3>{contador}</h3>
           <button onClick={()=> setContador(contador - 1)}>restar</button>
        </div>
    );
    
};

export default Contador; 