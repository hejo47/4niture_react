import "./App.css";
import HeaderFT from "./components/Common/HeaderFT";
import FooterFT from "./components/Common/FooterFT";
import MainNewProductsFT from "./components/pages/MainNewProductsFT";
import MainBestProductsFT from "./components/pages/MainBestProductsFT";
import MainLongTabFT from "./components/pages/MainLongTabFT";
import ReviewsFT from "./components/pages/ReviewsFT";
import LoginAD from "./components/pages/LoginAD";
import { Routes, Route } from "react-router-dom";
import ContainerFT from "./components/UI/ContainerFT";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/login'
          element={
            <>
              <ContainerFT>
                <div style={{ maxWidth: 500, margin: "0 auto", paddingTop: 200, paddingBottom: 200 }}>
                  <LoginAD></LoginAD>
                </div>
              </ContainerFT>
              <FooterFT></FooterFT>
            </>
          }
        />
      </Routes>
      <HeaderFT></HeaderFT>
      <MainNewProductsFT></MainNewProductsFT>
      <MainBestProductsFT></MainBestProductsFT>
      <MainLongTabFT></MainLongTabFT>

      <ReviewsFT></ReviewsFT>
      <FooterFT></FooterFT>
    </div>
  );
}

export default App;
