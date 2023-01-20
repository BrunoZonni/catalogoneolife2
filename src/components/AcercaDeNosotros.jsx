import "./css/AcercaDeNosotros.css";
import fundador from "../assets/jerry.png";
import { NavBar } from "./NavBar";

/* componentes nuevo */
export const AcercaDeNosotros = () => {
  return (
    <>
      <div className="nosotros">
        <NavBar view={false} />
        <div className="nosotros__imagen">
          <img src={fundador} alt="imagen del fundador" />
        </div>

        <div className="nosotros__info">
          <h1>THE SCIENTIFIC ADVISORY BOARD MEMBER (SAB)</h1>

          <div className="nosotros__descripcion">
            <p>
              Fundado en 1976 por el Dr. Furst, el Consejo de Asesoría
              Científica se encuentra en el centro de una red mundial de
              científicos y centros de investigación dedicados a ofrecer una
              salud óptima basándose en los modelos de la naturaleza. Los
              miembros de nuestro Consejo de Asesoría Científica realizan
              investigaciones de vanguardia de manera activa y son publicados
              regularmente en prestigiosas revistas científicas.
            </p>
            <p>
              Conoce a las mentes claves que ponen su conocimiento especializado
              y reputaciones detrás de todos y cada uno de los productos que
              portan el sello de aprobación del Consejo—de Asesoría Científica
              (SAB, por sus siglas en inglés):
            </p>
          </div>
          <div>
            <h4>Arthur Furst</h4>
            <p>1914-2005</p>
            <p>Miembro Fundador Emérito, SAB</p>
            <p>Ph.D., Sc.D., D-A.T.S.,</p>
            <p>Toxicólogo, Farmacólogo</p>
          </div>
        </div>
      </div>
    </>
  );
};
