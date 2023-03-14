import "./App.css";
import HeaderFT from "./components/Common/HeaderFT";
import FooterFT from "./components/Common/FooterFT";
<<<<<<< HEAD
import Swiper  from "./components/Common/BannerFT";

=======
import MainLongTabFT from "./components/pages/MainLongTabFT";
import ReviewsFT from "./components/pages/ReviewsFT";
import LoginAD from "./components/pages/LoginAD";
import { Routes, Route } from "react-router-dom";
import ContainerFT from "./components/UI/ContainerFT";
>>>>>>> 917c69ee8bc6eb7d00109a939e2a37d9784d863f
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
<<<<<<< HEAD
      <Swiper />
=======

      <MainLongTabFT></MainLongTabFT>

      <ReviewsFT></ReviewsFT>
>>>>>>> 917c69ee8bc6eb7d00109a939e2a37d9784d863f
      <FooterFT></FooterFT>
      
    </div>
  );
}

export default App;
