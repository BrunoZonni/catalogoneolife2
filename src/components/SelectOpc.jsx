import "./css/SelectOpc.css";

import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { useDispatch } from "react-redux";
import {
  addContactos,
  restoreState,
} from "../store/slices/productos/productosSlice";

export const SelectOpc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const viewProducts = (datos, direccion) => {
    dispatch(restoreState());
    dispatch(addContactos(datos));
    navigate(direccion, { replace: "false" });
    localStorage.clear();
    localStorage.setItem("contacto", datos);
  };

  return (
    <div className="opc">
      <NavBar sobreNosotros={null} />

      {/* nuevo banner */}
      <div className="opc__image">
        <div className="opc__traspariencia">
          <div className="opc__banner">
            <h3>EN UNA MISIÓN PARA HACER EL MUNDO</h3>
            <h2>UN LUGAR MÁS SALUDABLE Y MÁS FELIZ</h2>
            <h2>COMENZANDO CON USTED</h2>
          </div>
        </div>
      </div>

      <div className="opciones">
        <div className="opcion">
          <div
            className="capaOpacity"
            onClick={() => viewProducts([], "/productos/Cliente")}
          ></div>
          <button className="cliente">
            {" "}
            <h2>Catalogo Usuarios</h2>
          </button>
        </div>
        <div className="opcion">
          <div
            className="capaOpacity"
            onClick={() =>
              viewProducts(
                ["+5493585329301", "+529631546916"],
                "/productos/Distribuidor"
              )
            }
          ></div>
          <button className="distribuidor">
            {" "}
            <h2>Catalogo Distribuidores</h2>
          </button>
        </div>
      </div>
    </div>
  );
};
