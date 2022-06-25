import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCovids } from "../components/features/covidsSlice";
import Global from "../components/Global/Global";
import Hero from "../components/Hero/Hero";
import Summary from "../components/summary";
import ENDPOINTS from "../utils/constants/endpoint";


/* function Main() {
  
  return (
    <main>
      <h1>Final Project - Covid ID</h1>
      <h2>Good Luck, Bestie</h2>
      <Hello />
    </main>
  );
}
 */
function Home() {
  const dispatch = useDispatch();

  useEffect(()=>{
      getGlobalCovid();
  },[])

  const getGlobalCovid = async()=> {
      const response = await axios(ENDPOINTS.GLOBAL);
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
        },
      ];

      dispatch(updateCovids(covidData))
  }


  return (
    <>
      <Hero />
      <Global title = "Global" title2 = "Data Covid Beerdasarkan Global"/>
      <Summary title = "Summary" title2 ="Summary Data Global"/>
    {/*  <Global global = {global}/>
      <Province province = {province} setProvince = {setProvince} />
      <AddForm province = {province} setProvince = {setProvince} /> */}
    </>
  );
}

export default Home;
