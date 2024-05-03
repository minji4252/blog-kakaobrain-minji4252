import ReactDOM from "react-dom/client";
import MbHeader from "./components/MbHeader";
import Popup from "./components/Popup";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import "./css/reset.css";
import "./css/common.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Popup></Popup>
    <div className="wrap">
      <Header></Header>
      <MbHeader></MbHeader>
      <Main></Main>
      <Footer></Footer>
    </div>
  </>
);
