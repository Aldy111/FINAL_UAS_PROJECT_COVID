import styles from "./Hero.module.css";
import assets from "../../Assets/Hero.png";
const Hero = () => {
    return(
        <div className = {styles.container}>
            <section className = {styles.hero}>
                <div className = {styles.hero__left}>
                    <h2 className = {styles.hero__title}>Covid ID</h2>
                    <span className = {styles.hero__title2}>Monitoring Perkembangan Covid</span>
                    <p className = {styles.hero__description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ut reiciendis esse id, architecto illo ad est exercitationem atque pariatur.</p>
                    <button className = {styles.hero__button}>Vaccine</button>
                </div>
                <div className = {styles.hero__right}>
                    <img className = {styles.hero__image} src={assets} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Hero