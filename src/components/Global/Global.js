import Detail from "../Detail/Detail";
import styles from "../Global/Global.module.css"
const Global = (props) => {
    const {global} = props;
    return (
        <div className = {styles.container}>
            <section className = {styles.Global}>
                    <h2 className = {styles.Global__title}>Indonesia</h2>
                    <p className = {styles.Global__title2}>Data Covid Berdasarkan Global</p>
                        <div className = {styles.Global__container}>

                            {/*
                                looping data array global.
                                render Component detail dan kirim props detail
                             */}
                                {
                                    global.map((detail)=>{
                                        return <Detail key = {detail.status} detail = {detail}/>
                                    })
                                }
                        </div>
            </section>
        </div>
    )
}

export default Global