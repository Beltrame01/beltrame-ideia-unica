import { useState } from 'react';

function Home()
{
    return (
        <div>
            <h1>HOME</h1>
            <Contador />
        </div>
    )
    
}

function Contador()
{
    const [contador,setContador] = useState("");

        function adicionarContador() 
        {
            if (contador=="")
            {
                setContador(1);
            }
            else
            {
                setContador(parseInt(contador) + 1);
            }
            
        }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home