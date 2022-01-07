import React from 'react';
import Styles from '../components/Frase.module.css'
import PropTypes from 'prop-types'

function PropTypesTeste({marca, ano}){
    return(
        <>
        <h4>Carros</h4>
        <ul>
            <li className={Styles.primeiraFrase}>Marca - {marca}</li>
            <li className={Styles.primeiraFrase}>Ano - {ano}</li>
        </ul>
        </>
    )
}
PropTypesTeste.propTypes ={ 
    marca: PropTypes.string, //Definindo os tipos das props 
    ano: PropTypes.number,
}
PropTypesTeste.defaultProps={
    marca: 'Faltou a marca!',  //Mensagem de erro
    ano: 0,
}

export default PropTypesTeste;