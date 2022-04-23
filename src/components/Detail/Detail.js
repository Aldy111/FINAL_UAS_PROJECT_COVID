
import styles from "../Detail/Detail.module.css"
const Detail =  (props) => {
    const {detail} = props;
    return(
        <div className = {styles.detail}>
            <p className = {styles.detail__title}>{detail.status}</p>
            <p className = {detail.status === 'Positif' ? styles.detail__positif : detail.status === 'Sembuh' ? styles.detail__sembuh : styles.detail__meninggal}>{detail.total}</p>
        </div>
    )
}
export default Detail