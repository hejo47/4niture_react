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
import TotalProductPageAD from "./components/pages/TotalProductsAD";
import ProductDetail from "./components/pages/ProductDetailAD";
import ReviewGetAD from "./components/pages/ReviewGetAD";
import TopBtn from "./components/Common/TopBtnAD";
import CategoryRoutes from "./components/pages/CategoryRoutes";
import OptionRoutesFT from "./components/pages/OptionRoutesFT";
import SearchResultPageFT from "./components/pages/SearchResultPageFT";

function App() {
  return (
    <div className='App'>
      <HeaderFT></HeaderFT>

      <Routes>
        <Route
          path='/' // 메인
          element={
            <>
              <Swipe />
              <ContainerFT>
                <MainNewProductsFT></MainNewProductsFT>
                <MainBestProductsFT></MainBestProductsFT>
              </ContainerFT>
              <MainLongTabFT></MainLongTabFT>
              <ContainerFT>
                <ShowRoomFT></ShowRoomFT>
                <ReviewsFT></ReviewsFT>
                <TopBtn />
              </ContainerFT>
            </>
          }
        />

        <Route path='/products/:id' element={<ProductDetail />}></Route>

        <Route
          path='/login' // 로그인
          element={
            <>
              <ContainerFT>
                <div style={{ maxWidth: 500, margin: "0 auto", paddingTop: 200, paddingBottom: 200 }}>
                  <LoginAD></LoginAD>
                </div>
              </ContainerFT>
            </>
          }
        />
        <Route path='/search' element={<SearchResultPageFT />}></Route>
        <Route
          path='/products/upload' // 새 상품 올리기
          element={
            <>
              <ContainerFT>
                <div style={{ maxWidth: 500, margin: "0 auto", paddingTop: 200, paddingBottom: 200 }}>
                  <UploadAD />
                </div>
              </ContainerFT>
            </>
          }
        ></Route>
        <Route
          path='/review/upload' // 리뷰 올리기
          element={
            <>
              <ContainerFT>
                <div style={{ maxWidth: 500, margin: "0 auto", paddingTop: 200, paddingBottom: 200 }}>
                  <ReviewSub />
                </div>
              </ContainerFT>
              <TopBtn />
            </>
          }
        />
        <Route
          path='/review/reviewPage' // 리뷰페이지
          element={
            <>
              <ContainerFT>
                <div style={{ margin: "0 auto", paddingTop: 100, paddingBottom: 100 }}>
                  <ReviewGetAD />
                </div>
              </ContainerFT>
              <TopBtn />
            </>
          }
        ></Route>
        <Route
          path='/products/new' // 새 상품 리스트
          element={
            <>
              <OptionRoutesFT />
            </>
          }
        ></Route>
        <Route
          path='/products/best' // 베스트 상품 리스트
          element={
            <>
              <OptionRoutesFT />
            </>
          }
        ></Route>
        <Route
          path='/products' // 전체 상품 리스트(장바구니에 링크걸어둠)
          element={
            <>
              <ContainerFT>
                <div style={{ margin: "0 auto", paddingTop: 100, paddingBottom: 100 }}>
                  <TotalProductPageAD />
                </div>
              </ContainerFT>
            </>
          }
        />

        <Route
          path='/products/category/all' // 전체 카테고리 상품 리스트
          element={
            <>
              <ContainerFT>
                <div style={{ margin: "0 auto", paddingTop: 100, paddingBottom: 100 }}>
                  <TotalProductPageAD />
                </div>
              </ContainerFT>
            </>
          }
        />

        <Route path='products/category/storage' element={<CategoryRoutes></CategoryRoutes>}></Route>
        <Route path='products/category/table' element={<CategoryRoutes></CategoryRoutes>}></Route>
        <Route path='products/category/chair' element={<CategoryRoutes></CategoryRoutes>}></Route>
        <Route path='products/category/bedroom' element={<CategoryRoutes></CategoryRoutes>}></Route>
        <Route path='products/category/kitchen' element={<CategoryRoutes></CategoryRoutes>}></Route>
        <Route path='products/category/homedeco' element={<CategoryRoutes></CategoryRoutes>}></Route>
      </Routes>
      <FooterFT></FooterFT>
    </div>
  );
}

export default App;
