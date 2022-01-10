import { Link } from "react-router-dom";
import styles from '../paginaComRouter/paginaRouter.module.css';

function NavBar(){
    return(
        <ul className={styles.listaNavBar}>
            <li>< Link to="/Home">Home</Link></li>
            <li>< Link to="/Sobre">Sobre</Link></li>
        </ul>
    )
}

export default NavBar;