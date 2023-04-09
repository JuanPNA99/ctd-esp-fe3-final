import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import "./Navbar.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={`nav navBar-${theme}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <img className={`logo logo-${theme}`} src="./images/DH.png" alt="dh" />
      <div className="navGroup">
        <ul className="list navList">
          <li>
            <Link to={"home"}> Home </Link>
          </li>
          <li>
            <Link to={"contact"}> Contact </Link>
          </li>
          <li>
            <Link to={"favs"}> Favs </Link>
          </li>
        </ul>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button
          className={`themeButton themeButton-${theme}`}
          onClick={() => toggleTheme()}
        >
          <img className="themeIcon" src="./images/moon.png" alt="Moon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
