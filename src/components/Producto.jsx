import { useDispatch, useSelector } from "react-redux";
import { addProductoModal } from "../store/slices/productos/productosSlice";

export const Producto = ({ producto }) => {
  const dispatch = useDispatch();

  // funcion agregar Producto Modal
  const productoModal = (producto) => {
    dispatch(addProductoModal(producto));
  };

  return (
    <div>
      <div onClick={() => productoModal(producto)} className="producto">
        <img
          className="producto__img"
          src={producto.img}
          alt={producto.nombre}
        />
        <div className="producto__informacion">
          <h6 className="producto__nombre">{producto.nombre}</h6>
          <div className="producto__descripcion">
            {producto.descripcion.split(".").map((des, index) => (
              <p key={index}>
                {des}
                <br />
              </p>
            ))}
          </div>
          <h6 className="producto__precio">
            $ {producto?.precio.toLocaleString("es-MX")}.00 MX
          </h6>
        </div>
      </div>
    </div>
  );
};
