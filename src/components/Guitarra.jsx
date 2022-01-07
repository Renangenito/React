import React from 'react';

function Guitarra({modelo, cor, braco, captadores, dono}){
    return(
        <div>
            <h3>Guitarra</h3>
            <p>Modelo: {modelo}</p>
            <p>Cor: {cor}</p>
            <p>Braço: {braco}</p>
            <p>Captadores: {captadores}</p>
            <p>Dono: {dono}</p>
            
        </div>
    )
}

export default Guitarra;