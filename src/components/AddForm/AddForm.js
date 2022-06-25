import { useState } from "react";
import styles from "../AddForm/AddForm.module.css"
import asset from "../../Assets/form.png"
import { useDispatch } from "react-redux";
import { updateProvinces } from "../features/provinceSlice";
const AddForm = (props) =>{
    const {province } = props;
    const [ kota, setKota] = useState("");
    const [ status, setStatus ] = useState("kasus");
    const [ jumlah, setJumlah ] = useState();

    const dispatch = useDispatch();

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
        
        const dataProvinces = {status,jumlah,kota};
        dispatch(updateProvinces(dataProvinces))

        console.log(dataProvinces)
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
                                                <option value={data.kota}>{data.kota}</option>
                                            )
                                        })
                                    }
                                </select>
                        </div>
                        <div className = {styles.form__group}>
                            <label className = {styles.form__label} htmlFor="">status</label>
                                    <select className = {styles.form__select} name="status" id="status" value={status} onChange = {handleStatus}>
                                        <option value="kasus">Positif</option>
                                        <option value="sembuh">Sembuh</option>
                                        <option value="dirawat">Dirawat</option>
                                        <option value="meninggal">Meninggal</option>
                                        
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