import "./App.css";
import HeaderFT from "./components/Common/HeaderFT";
import FooterFT from "./components/Common/FooterFT";
import MainNewProductsFT from "./components/pages/MainNewProductsFT";
import MainBestProductsFT from "./components/pages/MainBestProductsFT";
import Swipe from "./components/Common/BannerFT";
import MainLongTabFT from "./components/pages/MainLongTabFT";
import ReviewsFT from "./components/pages/ReviewsFT";
import LoginAD from "./components/pages/LoginAD";
import { Routes, Route } from "react-router-dom";
import ContainerFT from "./components/UI/ContainerFT";
import ShowRoomFT from "./components/pages/ShowRoomFT";
import { Header } from "antd/es/layout/layout";
import UploadAD from "./components/pages/UploadAD";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <HeaderFT></HeaderFT>
              <Swipe />
              <ContainerFT>
                <MainLongTabFT></MainLongTabFT>
                <MainNewProductsFT>
                </MainNewProductsFT>
                <MainBestProductsFT></MainBestProductsFT>
                <ShowRoomFT></ShowRoomFT>
                <ReviewsFT></ReviewsFT>
              </ContainerFT>
              <FooterFT></FooterFT>
            </>
          }
        />
        
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
        <Route path='/upload'
        element={
          <>
          <ContainerFT>
            <HeaderFT/>
            <UploadAD/>
            <FooterFT/>
          </ContainerFT>
          </>
        }>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
