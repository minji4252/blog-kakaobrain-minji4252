import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MbHeader from "./components/MbHeader";
import Popup from "./components/Popup";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./css/reset.css";
import "./css/common.css";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Wrap = () => {
  // js 코드 자리
  const [mbMenuOpen, setMbMenuOpen] = useState(false);
  const clickMbbt = () => {
    setMbMenuOpen(prev => {
      return !prev;
    });
  };

  return (
    <div className="wrap">
      <Header clickMbbt={clickMbbt} mbMenuOpen={mbMenuOpen}></Header>
      <MbHeader
        mbMenuOpen={mbMenuOpen}
        setMbMenuOpen={setMbMenuOpen}
      ></MbHeader>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};
root.render(
  <>
    <Popup></Popup>
    <Wrap></Wrap>
  </>,
);
