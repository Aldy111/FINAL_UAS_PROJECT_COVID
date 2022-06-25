import AddForm from "../../components/AddForm/AddForm"
import Hero from "../../components/Hero/Hero"
import Province from "../../components/Province/Province"

const ProvinsiCovid = ({province, setProvince})=> {
    return(
        <>
                <Hero/>
                <Province province = {province} setProvince = {setProvince} />
                <AddForm province = {province} setProvince = {setProvince}/>
        </>
    )
}

export default ProvinsiCovid