import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCarrito,
  deleteCarrito,
} from "../store/slices/productos/productosSlice";

export const ProductoAgregado = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);
  const dispatch = useDispatch();

  // funcion que cambia datos del estado global y de el useState de cantidad
  const seleccionarCantidad = (e, item) => {
    if (parseInt(e.target.value) <= 0) {
      dispatch(deleteCarrito(item));
      return;
    }

    setCantidad(parseInt(e.target.value));
    dispatch(
      addCarrito({
        nombre: item.nombre,
        precio: item?.precio,
        cantidad: parseInt(e.target.value),
      })
    );
  };

  //   cada que el estado global de cantidad cambie esto se ejecutara
  useEffect(() => {
    setCantidad(item.cantidad);
  }, [item.cantidad]);

  return (
    <>
      <div className="ProductoCarrito">
        <div className="ProductoCarrito__seleccionado">
          <h5>{item.nombre}</h5>
          <p>$ {(item.precio * item.cantidad).toLocaleString("es-MX")}.00 MX</p>
        </div>
        <div>
          <select
            onChange={(e) => seleccionarCantidad(e, item)}
            value={cantidad}
          >
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
      </div>
    </>
  );
};
