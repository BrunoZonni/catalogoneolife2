import { useDispatch, useSelector } from "react-redux";
import "./css/modalProducto.css";
import { FiX } from "react-icons/fi";
import {
  addCarrito,
  addProductoModal,
  deleteCarrito,
} from "../store/slices/productos/productosSlice";
import { useState } from "react";

export const ModalProducto = () => {
  const [cantidad, setCantidad] = useState(0);
  const { modalProducto } = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  // elegir cantidad
  const seleccionarCantidad = (e) => {
    setCantidad(e.target.value);
  };

  // añadir al carrito
  const añadirCarrito = () => {
    if (cantidad <= 0) {
      dispatch(
        deleteCarrito({
          nombre: modalProducto.nombre,
          precio: modalProducto?.precio,
          cantidad: cantidad,
        })
      );
    }

    cantidad > 0 &&
      dispatch(
        addCarrito({
          nombre: modalProducto.nombre,
          precio: modalProducto?.precio,
          cantidad: cantidad,
        })
      );
    dispatch(addProductoModal(null));
  };

  return (
    <div className="modalProducto">
      <div className="modalProducto__view">
        <div className="modalProducto__imagen">
          <FiX
            className="modalProducto__FiX"
            onClick={() => dispatch(addProductoModal(null))}
          />
          <img src={modalProducto?.img} alt={modalProducto?.nombre} />
        </div>
        <div className="modalProducto__informacion">
          <h3>{modalProducto?.nombre}</h3>
          <p>{modalProducto?.descripcion}</p>
        </div>
        <div className="modalProducto__seleccionarCantidad">
          <label htmlFor="cantidad">Cantidad</label>
          <select onChange={seleccionarCantidad}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <button className="btn btn--verde" onClick={() => añadirCarrito()}>
          Agregar {cantidad} unidad ${" "}
          {(cantidad * modalProducto.precio).toLocaleString("es-MX")}.00 MX
        </button>
      </div>
    </div>
  );
};
