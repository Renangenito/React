import React from 'react';
import styles from '../components/Frase.module.css'
 
function Frase(props){
    
    function maiusculo(palavra){
        
        return palavra.toUpperCase();
      }
    return(
        <>
        <p className={styles.primeiraFrase}>{maiusculo("A " + props.nome +
         " é o melhor instrumento musical "
        )}</p>
        <p className={styles.segundaFrase}> {maiusculo("A "+
        props.nome +" é uma arte")}</p>
        </>
    )
}


export default Frase;