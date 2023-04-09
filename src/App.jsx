import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  const { theme } = useContext(ContextGlobal);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
