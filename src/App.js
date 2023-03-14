import "./App.css";
import HeaderFT from "./components/Common/HeaderFT";
import FooterFT from "./components/Common/FooterFT";
import MainLongTabFT from "./components/pages/MainLongTabFT";
function App() {
  return (
    <div className='App'>
      <HeaderFT></HeaderFT>

      <MainLongTabFT></MainLongTabFT>
      <FooterFT></FooterFT>
    </div>
  );
}

export default App;
