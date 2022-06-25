import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/globalStyle";
import Layout from "./components/Layout";
import AboutCovid from "./pages/covid/about";
import IndonesiaCovid from "./pages/covid/indonesia";
import ProvinsiCovid from "./pages/covid/provinsi";
import Home from "./pages/Home";
import theme from "./utils/constants/theme";
import provinces from "./utils/constants/provinces";


function App() {
  const [covids,setCovids] = useState([]);
  const [province,setProvince] = useState(provinces.provinces);
  return (
    <>
      <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Layout>
            <Routes>
              <Route path="/" element={<Home covids= {covids} setCovids={setCovids}/>}/>
              <Route path="/covid/indonesia" element={<IndonesiaCovid/>}/>
              <Route path="/covid/provinsi" element={<ProvinsiCovid province={province} setProvince={setProvince}/>}/>
              <Route path="/covid/about" element={<AboutCovid/>}/>
            </Routes>
          </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
