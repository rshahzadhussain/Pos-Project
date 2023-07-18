import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Posdata from "./components/Posdata";
import Cartdata from "./components/Cartdata";
import Customerdata from "./components/Customerdata";
import Paymentmtd from "./components/Paymentmtd";

function App() {
  return (
    <>
      <Navbar />
      <Posdata />
      <Cartdata />
      <Customerdata />
      <Paymentmtd />
    </>
  );
}

export default App;
