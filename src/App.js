import "./App.css";
import HeaderFT from "./components/Common/HeaderFT";
import FooterFT from "./components/Common/FooterFT";
import Swiper  from "./components/Common/BannerFT";

function App() {
  return (
    <div className='App'>
      <HeaderFT></HeaderFT>
      <Swiper />
      <FooterFT></FooterFT>
      
    </div>
  );
}

export default App;
