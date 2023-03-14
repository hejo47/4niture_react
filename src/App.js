import "./App.css";
import HeaderFT from "./components/Common/HeaderFT";
import FooterFT from "./components/Common/FooterFT";
import MainLongTabFT from "./components/pages/MainLongTabFT";
import ShowRoomFT from "./components/pages/ShowRoomFT";
import ReviewsFT from "./components/pages/ReviewsFT";
function App() {
  return (
    <div className="App">
      <HeaderFT></HeaderFT>

      <MainLongTabFT></MainLongTabFT>
      <ShowRoomFT></ShowRoomFT>
      <ReviewsFT></ReviewsFT>
      <FooterFT></FooterFT>
    </div>
  );
}

export default App;
