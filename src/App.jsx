import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mx-auto">
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
