import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import "./css/NavBar.css";

export const NavBar = ({ view }) => {
  const { enlaces } = useSelector((state) => state.productos);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="navbar__enlaces">
        <a onClick={() => navigate("/Nosotros")}>
          <p className="navbar__drive">Sobre Nosotros</p>
        </a>
        {enlaces.length > 0 && view && (
          <a
            href="https://drive.google.com/file/d/1jYH__ahoFEiUI_ncBOfAHsFwsxjEFCSt/view"
            target="_BLANK"
          >
            <p className="navbar__drive">Registro</p>
          </a>
        )}
      </div>
    </div>
  );
};
