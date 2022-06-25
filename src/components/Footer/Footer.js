import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <div className = {styles.container}>
            <nav className = {styles.footer}>
                <div>
                    <h3 className = {styles.footer__title} >Covid ID</h3>
                    <p className = {styles.footer__created}> Developed by aldy111</p>
                </div>
                <div>
                    <ul className = {styles.footer__list}>
                        <li className = {styles.footer__item }>
                            <Link className={styles.footer__link} to="/">Global</Link>
                        </li>
                        <li className = {styles.footer__item }>
                            <Link className={styles.footer__link} to="/covid/indonesia">Indonesia</Link>
                        </li>
                        <li className = {styles.footer__item }>
                            <Link className={styles.footer__link} to="/covid/provinsi">Provinsi</Link>
                        </li>
                        <li className = {styles.footer__item }>
                            <Link className={styles.footer__link} to="/covid/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

//export Footer
export default Footer;