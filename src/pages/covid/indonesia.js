import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCovids } from "../../components/features/covidsSlice";
import Global from "../../components/Global/Global";
import Hero from "../../components/Hero/Hero";
import IndoSummary from "../../components/summary/indoSummary";
import ENDPOINTS from "../../utils/constants/endpoint";

const IndonesiaCovid = ()=> {
    const dispatch = useDispatch();

    useEffect(()=>{
        getIndonesiaCovid();
    },[])

    const getIndonesiaCovid = async()=> {
        const response = await axios(ENDPOINTS.INDO);
        const covidData = [
            {
                statusName : "Confirmed",
                ...response.data.confirmed,
            },
            {
                statusName : "Recovered",
                ...response.data.recovered,
            },
            {
                statusName : "Deaths",
                ...response.data.deaths,
            }
        ];
        dispatch(updateCovids(covidData))
    }

    return (
        <>
            <Hero/>
            <Global title="Indonesia" title2 = "Data Covid Berdasarkan Indonesia"/>
            <IndoSummary  title="Summary" title2 = "Summary Data Indonesia" />
        </>
    )
}

export default IndonesiaCovid