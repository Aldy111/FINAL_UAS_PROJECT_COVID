import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () =>{
    return (
        <div className = {styles.container}>
            <nav className = {styles.navbar}>
                <div>
                    <h1 className = {styles.navbar__title} >
                        <Link className={styles.navbar__link} to="/">Covid ID</Link>        
                    </h1>
                </div>
                <div>
                    <ul className = {styles.navbar__list}>
                        <li className = {styles.navbar__item }>
                            <Link className={styles.navbar__link} to="/">Global</Link>
                        </li>
                        <li className = {styles.navbar__item }>
                            <Link className={styles.navbar__link} to="/covid/indonesia">Indonesia</Link>
                        </li>
                        <li className = {styles.navbar__item }>
                            <Link className={styles.navbar__link} to="/covid/provinsi">Provinsi</Link>
                        </li>
                        <li className = {styles.navbar__item }>
                            <Link className={styles.navbar__link} to="/covid/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

//export Navbar
export default Navbar;
