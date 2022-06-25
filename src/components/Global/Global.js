
import { useSelector } from "react-redux";
import Detail from "../Detail/Detail";
import styles from "../Global/Global.module.css"
const Global = ({title ,title2}) => {
    /* const {covids,title,title2,setCovids} = props; */
   /*  const arrayCovid = [covids.confirmed , covids.recovered , covids.deaths]; */
    /* console.log(arrayCovid) */
    const covids = useSelector((state)=>state.covids.covids)
    return (
        <div className = {styles.container}>
            <section className = {styles.Global}>
                    <h2 className = {styles.Global__title}>{title}</h2>
                    <p className = {styles.Global__title2}>{title2}</p>
                        <div className = {styles.Global__container}>

                            {/*
                                looping data array global.
                                render Component detail dan kirim props detail
                             */}
                                {
                                    covids.map((detail)=>{
                                        return <Detail key = {detail.statusName} detail = {detail}/>
                                    })
                                }
                        </div>
            </section>
        </div>
    )
}

export default Global