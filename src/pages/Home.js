import { useState } from "react";
import AddForm from "../components/AddForm/AddForm";
import Footer from "../components/Footer/Footer";
import Global from "../components/Global/Global";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Province from "../components/Province/Province";
import indonesia from "../utils/constants/indonesia";
import provinces from "../utils/constants/provinces";

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
  const [global] = useState(indonesia.indonesia);
  const [province,setProvince] = useState(provinces.provinces);
  return (
    <>
      <Navbar />
      <Hero />
      <Global global = {global}/>
      <Province province = {province} setProvince = {setProvince} />
      <AddForm province = {province} setProvince = {setProvince} />
      <Footer />
    </>
  );
}

export default Home;
