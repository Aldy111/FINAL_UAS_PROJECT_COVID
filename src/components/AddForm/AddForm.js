import { useState } from "react";
import styles from "../AddForm/AddForm.module.css"
import asset from "../../Assets/form.png"
const AddForm = (props) =>{
    const {province , setProvince} = props;
    const [ kota, setKota] = useState("");
    const [ status, setStatus ] = useState("");
    const [ jumlah, setJumlah ] = useState();

    function handleKota (e) {
        setKota(e.target.value);
    }

    function handleStatus (e) {
        setStatus(e.target.value);
    }

    function handleJumlah (e) {
        setJumlah(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        const data = province;

        if (jumlah > 0) {
        let value = parseInt(jumlah);
        let nama = data.findIndex((data) => data.kota === kota);

        if (status === "Positif" || status === "kasus") {

            data[nama].kasus = parseInt(data[nama].kasus) + value;

        } else if (status === "Dirawat") {

            data[nama].dirawat = parseInt(data[nama].dirawat) + value;

        } else if (status === "Sembuh") {
            
            data[nama].sembuh = parseInt(data[nama].sembuh) + value;

        } else if (status === "Meninggal") {
            
            data[nama].meninggal = parseInt(data[nama].meninggal) + value;

        }
        setProvince([...data]);

        } 
    }

    
    return(
        <div className = {styles.container}>
            <section className = {styles.form}>
                <div className = {styles.form__left}>
                    <img className={styles.form__image} src={asset} alt="placeholder" />
                </div>
                <div className = {styles.form__right}>
                    <h2 className = {styles.form__title}>Form Covid</h2>
                    <form action="" onSubmit = {handleSubmit}>
                        <div className = {styles.form__group}>
                            <label className = {styles.form__label} htmlFor="">Provinsi</label>
                                <select className = {styles.form__select} name="province" id="province" value={kota} onChange = {handleKota}>
                                    <option>pilih provinsi</option>
                                    {
                                        province.map((data)=>{
                                            return (
                                                <option key={data.kota} value={data.kota}>{data.kota}</option>
                                            )
                                        })
                                    }
                                </select>
                        </div>
                        <div className = {styles.form__group}>
                            <label className = {styles.form__label} htmlFor="">status</label>
                                    <select className = {styles.form__select} name="status" id="status" value={status} onChange = {handleStatus}>
                                        <option value="Positif">Positif</option>
                                        <option value="Sembuh">Sembuh</option>
                                        <option value="Meninggal">Meninggal</option>
                                        <option value="Dirawat">Dirawat</option>
                                    </select>
                        </div>
                        <div className = {styles.form__group}>
                                    <label htmlFor="jumlah" className={styles.form__label}>Jumlah</label>
                                    <input id="jumlah" className={styles.form__input} type="number" name="jumlah" value={jumlah} onChange={handleJumlah}/>
                        </div>
                        <div className = {styles.form__group}>
                                    <button className={styles.form__button}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default AddForm