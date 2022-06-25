import styles from "./Summary.module.css";
const Summary = (props) => {
    const{title,title2} = props;
    
    return(
        <div className={styles.container}>
            <section className={styles.Summary}>
                <h2 className={styles.Summary__title}>{title}</h2>
                <p className={styles.Summary__title2}>{title2}</p>
                <img className={styles.Summary__image} src={`https://covid19.mathdro.id/api/og`} alt="gambar" />
            </section>
        </div>
    )
}
export default Summary