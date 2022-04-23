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
                        <li className = {styles.footer__item }>Global</li>
                        <li className = {styles.footer__item }>Indonesia</li>
                        <li className = {styles.footer__item }>Provinsi</li>
                        <li className = {styles.footer__item }>About</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

//export Footer
export default Footer;