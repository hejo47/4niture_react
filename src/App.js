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
import UploadAD from "./components/pages/UploadAD";
import ReviewSub from "./components/pages/ReviewSubAD";
import NewProductPageAD from "./components/pages/NewProductPageAD";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/" // 메인
          element={
            <>
              <HeaderFT></HeaderFT>
              <Swipe />
              <ContainerFT>
                <MainNewProductsFT></MainNewProductsFT>
                <MainBestProductsFT></MainBestProductsFT>
              </ContainerFT>
              <MainLongTabFT></MainLongTabFT>
              <ContainerFT>
                <ShowRoomFT></ShowRoomFT>
                <ReviewsFT></ReviewsFT>
              </ContainerFT>
              <FooterFT></FooterFT>
            </>
          }
        />

        <Route
          path="/login" // 로그인
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
        <Route
          path="/product/upload" // 새 상품 올리기
          element={
            <>
              <ContainerFT>
                <HeaderFT />
                <div style={{ maxWidth: 500, margin: "0 auto", paddingTop: 200, paddingBottom: 200 }}>
                  <UploadAD />
                </div>
                <FooterFT />
              </ContainerFT>
            </>
          }
        ></Route>
        <Route
          path="/review/upload" // 리뷰 올리기
          element={
            <>
              <ContainerFT>
                <HeaderFT />
                <div style={{ maxWidth: 500, margin: "0 auto", paddingTop: 200, paddingBottom: 200 }}>
                  <ReviewSub />
                </div>
              </ContainerFT>
              <FooterFT></FooterFT>
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/product/new" // 새 상품 리스트
          element={
            <>
              <HeaderFT />
              <ContainerFT>
                <div style={{ margin: "0 auto", paddingTop: 100, paddingBottom: 100 }}>
                  <NewProductPageAD />{/* 여기가 도상님컴포넌트넣는곳 */}
                </div>
              </ContainerFT>
              <FooterFT />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
