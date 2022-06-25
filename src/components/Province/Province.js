
import { useSelector } from "react-redux";
import styles from "../Province/Province.module.css"
const Province = () => {
    const provinces = useSelector((state)=>state.provinces.provinces)
    let no = 1;
    return(
        <div className = {styles.container}>
            <section className = {styles.province}>
                <h2 className = {styles.province__title}>PROVINSI</h2>
                <p className = {styles.province__title2}>Data Covid Berdasarkan Provinsi</p>
                <div className = {styles.province__container}>
                <table  border = "1px" className = {styles.table}>
                    <thead className = {styles.table__thead}>
                    <tr>
                        <th>No</th>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                    </thead>

                    <tbody className = {styles.table__tbody}>
                    { provinces.map((data)=>{

                    return(
                        <tr>
                                <td>{no++}</td>
                                <td>{data.kota}</td>
                                <td>{data.kasus}</td>
                                <td>{data.sembuh}</td>
                                <td>{data.dirawat}</td>
                                <td>{data.meninggal}</td>
                                
                            </tr>
                        )

                    })
                    
                }
                    </tbody>
            </table>
                </div>
            </section>
        </div>
    )
}
export default Province