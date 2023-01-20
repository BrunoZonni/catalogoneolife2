import { useEffect, useState } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { ProductoCarrito } from "./ProductoCarrito";
import { NavBar } from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { productosAll } from "../store/slices/productos/productosSlice";
import { Producto } from "./Producto";
import { ModalProducto } from "./ModalProducto";
import "./css/Productos.css";

import producto1 from "../assets/producto1.png";
import producto2 from "../assets/producto2.png";
import producto3 from "../assets/producto3.png";
import producto4 from "../assets/producto4.png";
import producto5 from "../assets/producto5.png";
import producto6 from "../assets/producto6.png";
import producto7 from "../assets/producto7.png";
import producto8 from "../assets/producto8.png";
import producto9 from "../assets/producto9.png";
import producto10 from "../assets/producto10.png";
import producto11 from "../assets/producto11.png";
import producto12 from "../assets/producto12.png";
import producto13 from "../assets/producto13.png";
import producto14 from "../assets/producto14.png";
import producto15 from "../assets/producto15.png";
import producto16 from "../assets/producto16.png";
import producto17 from "../assets/producto17.png";
import producto18 from "../assets/producto18.png";
import producto19 from "../assets/producto19.png";
import producto20 from "../assets/producto20.png";
import producto21 from "../assets/producto21.png";
import producto22 from "../assets/producto22.png";
import producto23 from "../assets/producto23.png";
import producto24 from "../assets/producto24.png";
import producto25 from "../assets/producto25.png";
import producto26 from "../assets/producto26.png";

import producto28 from "../assets/producto28.png";
import producto29 from "../assets/producto29.png";
import producto30 from "../assets/producto30.png";
import producto31 from "../assets/producto31.png";
import producto32 from "../assets/producto32.png";
import producto33 from "../assets/producto33.png";
import producto34 from "../assets/producto34.png";
import producto35 from "../assets/producto35.png";
import producto36 from "../assets/producto36.png";
import producto37 from "../assets/producto37.png";

// estilos de swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const productosViewClientes = [
  {
    nombre: "Acidophilus Plus",
    img: producto1,
    descripcion:
      "Probióticos específicos para el intestino. ° 5,000,000,000 de microorganismos “vivos” por cápsula. °Exclusivo Sistema de Protección Entérica “Gel-Gard” que lo protege contra los agresivos ácidos estomacales y asegura la mayor cantidad de bacterias vivas liberadas en el intestino..",
    precio: 1122,
  },
  {
    nombre: "All-C Masticable",
    img: producto3,
    descripcion:
      "° 4 naranjas en cada tableta. °Con rosa mosqueta y cereza acerola – las fuentes más ricas en vitamina C de la naturaleza. °Para obtener más apoyo para el sistema inmunológico, dientes y ojos saludables. °Una liberación sostenida a lo largo de 4 horas..",
    precio: 389,
  },
  {
    nombre: "All Natural Fiber",
    img: producto2,
    descripcion:
      "°La Neo-Polyfibra exclusiva ayuda a eliminar el colesterol sin quitarle nutrientes. ° Listo para mezclar en una agradable bebida o en tus recetas favoritas. Fórmula vegetariana. °Promueve la Regularidad. .",
    precio: 713,
  },
  {
    nombre: "Aloe Vera Plus",
    img: producto4,
    descripcion:
      "°Mezcla especial de tés herbales. °Vitamina C para una contribución antioxidante añadida. °Endulzado de manera natural para un “límite glicémico” propicio tanto para obtener energía rápida como continua..",
    precio: 684,
  },
  {
    nombre: "Betagard",
    img: producto5,
    descripcion:
      "°Basado en alimentos integrales. Antioxidantes, vitaminas y minerales para protegerse contra las toxinas ambientales. °Formulada específicamente para ayudar en la defensa de su cuerpo contra agentes nocivos en el aire, el agua y los alimentos..",
    precio: 714,
  },
  {
    nombre: "Betagest",
    img: producto6,
    descripcion:
      "°Ayuda a la acidez, gases e hinchazón ocasionales. °Restaura el ácido natural del estómago y los factores digestivos comprometidos por la edad o el estrés. °Ayuda a digerir los alimentos problemáticos, incluyendo los productos lácteos y las proteínas ..",
    precio: 480,
  },
  {
    nombre: "BG",
    img: producto7,
    descripcion:
      "°Puede ayudar a: 1. Manejar la captación de la glucosa 2. Optimizar la sensibilidad a la insulina 3. Maximizar la función receptora de la insulina 4. Maximizar la función pancreática normal para niveles sanos de insulina..",
    precio: 1103,
  },
  {
    nombre: "Bio-Tone NTS",
    img: producto8,
    descripcion:
      "°Retención muscular. °Movilización de la grasa. °Desarrollo del tejido magro. °Tonificación general del cuerpo. °Diseñado para trabajar mientras duerme..",
    precio: 811,
  },
  {
    nombre: "Carotenoid Complex",
    img: producto9,
    descripcion:
      "°Mejora la función inmunológica general en un 37% en tan sólo 20 días. °Reduce la oxidación del colesterol y promueve la salud cardíaca. °Aumenta los niveles de antioxidantes en la sangre para la protección celular a largo plazo contra los daños de los radicales libres..",
    precio: 981,
  },
  {
    nombre: "CoQ10",
    img: producto10,
    descripcion:
      "°Mejora la función inmunológica general en un 37% en tan sólo 20 días. °Reduce la oxidación del colesterol y promueve la salud cardíaca. °Aumenta los niveles de antioxidantes en la sangre para la protección celular a largo plazo contra los daños de los radicales libres..",
    precio: 981,
  },
  {
    nombre: "Cruciferous Plus",
    img: producto11,
    descripcion:
      "°Proteje y defiende las células y los tejidos. °PROBADO Y COMPROBADO de acuerdo con los protocolos del Instituto Nacional del Cáncer para apoyar la función inmune..",
    precio: 445,
  },
  {
    nombre: "Flavond Complex",
    img: producto12,
    descripcion:
      "°Proporciona diversos fitonutrientes provenientes de frutas y verduras. °Actúa sobre los enlaces flavonoides para reducir el riesgo de cáncer, enfermedad cardíaca y otras enfermedades degenerativas relacionadas con la edad..",
    precio: 623,
  },
  {
    nombre: "Formula IV",
    img: producto13,
    descripcion:
      "°Amplia gama de minerales, vitaminas naturales A y D, las vitaminas del complejo B, vitamina C, bioflavonoides de cereza acerola y la familia completa de la Vitamina E. °Exclusiva Mezcla de fitoenzimas para una digestión fácil..",
    precio: 829,
  },
  {
    nombre: "Formula IV Plus",
    img: producto14,
    descripcion:
      "°Fórmula libre de hierro. °Contribución adicional de minerales de selenio, cromo, molibdeno y 100% de CDR de zinc. °Enzimas exclusivas de origen vegetal apoyan la fácil digestión y absorción de los nutrientes.",
    precio: 857,
  },
  {
    nombre: "Full Motion",
    img: producto15,
    descripcion:
      "°Complejo Regenerativo Mineral, – ofrece una mezcla única de minerales clave para la salud de las articulaciones – zinc, boro y sílice. °Apoya la función saludable de la articulación y regenera el cartílago dañado o perdido. °Incrementa la capacidad aniinflamatoria natural del cuerpo..",
    precio: 486,
  },
  {
    nombre: "Garlic Allium Complex",
    img: producto16,
    descripcion:
      "°Ayuda a mantener niveles normales de colesterol y presión sanguínea. °Fomenta la circulación saludable y promueve la coagulación saludable. °Propiedades antimicrobianas naturales. °4,200 mcg de alicina del extracto puro de ajo en cada porción, con compuestos bioactivos de cebolla, cebollino y puerro..",
    precio: 460,
  },
  {
    nombre: "Lecithin",
    img: producto17,
    descripcion:
      "°Apoya funciones clave del cerebro incluyendo la memoria y el control muscular. °Asiste en el metabolismo de la grasa en el hígado y en el torrente sanguíneo..",
    precio: 558,
  },
  {
    nombre: "Lipotropic Adjunct",
    img: producto18,
    descripcion:
      "°Ayuda a prevenir la oxidación del colesterol en placa. Evitar las acumulación grasa en el hígado. °B6, B12 y acido fólico ayudan a reducir los niveles de homocisteína. °Bioflavonoides cítricos para contribuir a la salud de los vasos sanguíneos..",
    precio: 633,
  },
  {
    nombre: "Liqui Vitae",
    img: producto19,
    descripcion:
      "°Carotenoides para contribuir a la inmunidad. Tre-en-en para la energía celular. °Colina e inositol para contribuir al desarrollo cerebral. °Gran sabor cítrico, versátil –se mezcla fácilmente en otros líquidos..",
    precio: 624,
  },
  {
    nombre: "Magnesium Complex",
    img: producto20,
    descripcion:
      "°Apoya la salud metabólica general a través de la regulación normal de la glucosa en sangre y los niveles hormonales equilibrados. °Ayuda a tener huesos y dientes fuertes. °Promueve la contracción y relajación muscular saludable. °Ayuda a prevenir calambres, debilidad muscular y problemas de coordinación asociados con bajos niveles de magnesio. °Ayuda a estimular el sistema inmune..",
    precio: 403,
  },
  {
    nombre: "Neolifeshake",
    img: producto21,
    descripcion:
      "°Tecnología de Control de la Respuesta Glicémica. Para ayudar a minimizar la acumulación de grasa y fomentar la quema de grasa. °BIOLÓGICAMENTE Completa con todos los 22 aminoácidos. Incluidos los 9 esenciales. °Que proporcionan energía duradera y animan a tu cuerpo a permanecer en una modalidad de la quema de grasas..",
    precio: 1108,
  },
  {
    nombre: "Phytodefense",
    img: producto22,
    descripcion:
      "°Clínicamente demostrado en un estudio conducido por investigadores del USDA. 37% de aumento de la función inmunológica en tan sólo 20 días. COMBINANDO TRES NUTRICIONALES POTENTES Cada paquete conveniente ofrece: 3 cápsulas de Carotenoid Complex 2 tabletas de Flavonoid Complex 1 tableta de Cruciferous Plus.",
    precio: 1847,
  },
  {
    nombre: "Provitality",
    img: producto23,
    descripcion:
      "°Energía Abundante. °Protección Antioxidante Poderosa. °Bienestar Cardiaco. °Función Cerebral Saludable. °Articulaciones Saludables y visión clara. °Piel, Cabello y Uñas juveniles. °Función Genética Natural de Antienvejecimiento.",
    precio: 1008,
  },
  {
    nombre: "Quelado Call-Mag",
    img: producto24,
    descripcion:
      "°Proporciona vitamina D3, de forma fácilmente absorbible y altamente biodisponible. °Calcio farmacéuticamente puro, derivado de conchas marinas. °Está demostrado que pospone o previene el desarrollo de la osteoporosis. °Ayuda a la presión arterial normal,optimiza la función nerviosa y muscular.",
    precio: 1008,
  },
  {
    nombre: "Salmon Oil Plus",
    img: producto25,
    descripcion:
      "Proporción de ácidos grasos omega-3 y omega-6 mejoría de un 43% en ocho semanas. °EQUILIBRA LA INFLAMACIÓN Promueve un equilibrio sano de factores pro y antiinflamatorios. Índice inflamatorio reducido en un 68% en tan sólo ocho semanas. Ayuda a la función cerebral. Ayuda al desarrollo fetal del cerebro y de los ojos. Promueve el equilibrio inflamatorio normal durante los días de actividad física..",
    precio: 996,
  },
  {
    nombre: "Super B",
    img: producto26,
    descripcion:
      "°Equilibrio perfecto de las 8 vitaminas del complejo B, además de inositol y colina. °Procedente de alimentos integrales únicamente. °Alta potencia – para un apoyo metabólico óptimo. °Controlado para la liberación sostenida de nutrientes del complejo B durante un período de seis horas. °Proporciona soporte metabólico máximo para ayudar a satisfacer las altas demandas de nutrientes durante el ejercicio y los períodos de estrés..",
    precio: 849,
  },
  {
    nombre: "Super C",
    img: producto26,
    descripcion:
      "°Sistema propio óptimo de liberación gradual asegurando la protección del nivel óptimo de nutrientes durante más de seis horas. °El poder de la Vitamina C de ocho naranjas en cada tableta. °Respalda el funcionamiento correcto del sistema inmunológico..",
    precio: 694,
  },
  {
    nombre: "Tré",
    img: producto28,
    descripcion:
      "°Antioxidantes poderosos promueven la buena salud total. °Tré se extrae de un grupo selecto de entre las frutas más potentes y únicas de la naturaleza. La ciencia ha demostrado que los polifenoles desempeñan una amplia gama de funciones esenciales a la hora de contribuir y promover la salud, la longevidad y las funciones cognitivas. °Proporciona resveratrol, poder antioxidante y ácido alfa-lipóico.",
    precio: 1045,
  },
  {
    nombre: "Tre en en",
    img: producto29,
    descripcion:
      "°Se demostró que cuando Tre-en-en está presente en la dieta, mejoró el crecimiento y el desarrollo general, la eficiencia y utilización de los nutrientes y el desarrollo cardiovascular. °Energía y la vitalidad optimizando el funcionamiento de la membrana celular. Llena de energía todo el cuerpo, ayudando a las células a funcionar de manera más eficiente..",
    precio: 811,
  },
  {
    nombre: "Vegan D",
    img: producto30,
    descripcion:
      "La vitamina D ayuda a construir, mantener huesos, dientes y músculos fuertes, apoya la presión arterial normal y la función nerviosa, así como las defensas inmunes. • 100% vegano. Hecho completamente sin ingredientes de origen animal de ningún tipo, Vegan D cumple con los estrictos criterios de las fuentes que esperan los usuarios de suplementos vegetarianos/veganos..",
    precio: 397,
  },
  {
    nombre: "Vita-Gard",
    img: producto31,
    descripcion:
      "°Zinc y selenio para maximizar las defensas de los niños de modo que se sientan de lo mejor. °Tabletas masticables con irresistible sabor a fruta. °Sin colorantes, sabores, edulcorantes, ni conservantes artificiales añadidos..",
    precio: 731,
  },
  {
    nombre: "Vitamin E plus",
    img: producto32,
    descripcion:
      "°Ofrece las 8 formas de la vitamina E para una protección de amplio espectro °Ayuda a inhibir la oxidación del colesterol gracias a sus potentes efectos antioxidantes. °Mejora la función inmunológica, especialmente en los ancianos. °La tecnología innovadora miscible en agua mejora la absorción. °La vitamina E contribuye a la salud cardíaca, del cerebro y la próstata °Promueve la función del pulmón, el colon y la función inmunológica, así como una piel de apariencia juvenil..",
    precio: 1238,
  },
  {
    nombre: "Vita-squares",
    img: producto33,
    descripcion:
      "°Proporciona nutrientes que promueven el crecimiento y el desarrollo saludable del cuerpo y la mente. °Mejorado con colina e inositol para una memoria óptima, aprendizaje y concentración. °Concentrado de granos Tre-en-en para la energía celular. °Sincolorantes,sabores,edulcorantesniconservantes artificiales añadidos..",
    precio: 498,
  },
  {
    nombre: "Zinc Quelado",
    img: producto34,
    descripcion:
      "°Contribuye a la salud de la visión y de la próstata. Mantiene su metabolismo trabajando al máximo. °Se ha demostrado que el Zinc mejora la memoria y la atención en los niños. °Quelados para una mayor absorción y suaves con tu sistema digestivo. °Zinc quelado para una mayor absorción y suave con tu sistema digestivo..",
    precio: 479,
  },
  {
    nombre: "Aloe Vera Gel",
    img: producto35,
    descripcion:
      "°Contribuye a la salud de la visión y de la próstata. Mantiene su metabolismo trabajando al máximo. °Se ha demostrado que el Zinc mejora la memoria y la atención en los niños. °Quelados para una mayor absorción y suaves con tu sistema digestivo. °Zinc quelado para una mayor absorción y suave con tu sistema digestivo..",
    precio: 479,
  },
  {
    nombre: "Acondicionador Enriquecido",
    img: producto36,
    descripcion:
      "°Enriching Conditioner te devuelve el cabello vibrante, tocable y manejable que amas aportando hidratación donde más se necesita. La ProVitamina B5 (Pantenol), el Extracto de Almendras Dulces y los acondicionadores hidratantes restauran el cuerpo y brillo saludables. Retiene la hidratación para un pelo vibrante y suave. Alisa el cabello sin apelmazarlo. Fortalece el cabello con ingredientes naturales..",
    precio: 303,
  },
  {
    nombre: "Shampoo Revitalizante Enriquecido",
    img: producto36,
    descripcion:
      "°Enjuaga las impurezas y añade luminosidad con el lujoso champú “Rich Revitalizing Shampoo” de Nutriance, de calidad de salón de belleza. Con Vitamina B3 y ProVitamina B5 (Pantenol), más una combinación selecta de ingredientes botánicos seleccionados para limpiar y nutrir efectivamente, además de agregar brillo, cuerpo y manejabilidad. Su cabello y cuero cabelludo se sentirán limpios y revitalizados cada vez que los mimes con esta fórmula limpiadora suave. Limpia suavemente, elimina la suciedad y los residuos de los productos de belleza. Aporta luminosidad natural, movimiento y brillo a tu cabello. Disfruta de un cabello suave, sedoso y manejable.",
    precio: 303,
  },
];

export const productosViewDistribuidores = [
  {
    nombre: "Acidophilus Plus",
    img: producto1,
    descripcion:
      "Probióticos específicos para el intestino. ° 5,000,000,000 de microorganismos “vivos” por cápsula. °Exclusivo Sistema de Protección Entérica “Gel-Gard” que lo protege contra los agresivos ácidos estomacales y asegura la mayor cantidad de bacterias vivas liberadas en el intestino..",
    precio: 840,
  },
  {
    nombre: "All-C Masticable",
    img: producto3,
    descripcion:
      "° 4 naranjas en cada tableta. °Con rosa mosqueta y cereza acerola – las fuentes más ricas en vitamina C de la naturaleza. °Para obtener más apoyo para el sistema inmunológico, dientes y ojos saludables. °Una liberación sostenida a lo largo de 4 horas..",
    precio: 293,
  },
  {
    nombre: "All Natural Fiber",
    img: producto2,
    descripcion:
      "°La Neo-Polyfibra exclusiva ayuda a eliminar el colesterol sin quitarle nutrientes. ° Listo para mezclar en una agradable bebida o en tus recetas favoritas. Fórmula vegetariana. °Promueve la Regularidad. .",
    precio: 537,
  },
  {
    nombre: "Aloe Vera Plus",
    img: producto4,
    descripcion:
      "°Mezcla especial de tés herbales. °Vitamina C para una contribución antioxidante añadida. °Endulzado de manera natural para un “límite glicémico” propicio tanto para obtener energía rápida como continua..",
    precio: 515,
  },
  {
    nombre: "Betagard",
    img: producto5,
    descripcion:
      "°Basado en alimentos integrales. Antioxidantes, vitaminas y minerales para protegerse contra las toxinas ambientales. °Formulada específicamente para ayudar en la defensa de su cuerpo contra agentes nocivos en el aire, el agua y los alimentos..",
    precio: 537,
  },
  {
    nombre: "Betagest",
    img: producto6,
    descripcion:
      "°Ayuda a la acidez, gases e hinchazón ocasionales. °Restaura el ácido natural del estómago y los factores digestivos comprometidos por la edad o el estrés. °Ayuda a digerir los alimentos problemáticos, incluyendo los productos lácteos y las proteínas ..",
    precio: 559,
  },
  {
    nombre: "BG",
    img: producto7,
    descripcion:
      "°Puede ayudar a: 1. Manejar la captación de la glucosa 2. Optimizar la sensibilidad a la insulina 3. Maximizar la función receptora de la insulina 4. Maximizar la función pancreática normal para niveles sanos de insulina..",
    precio: 829,
  },
  {
    nombre: "Bio-Tone NTS",
    img: producto8,
    descripcion:
      "°Retención muscular. °Movilización de la grasa. °Desarrollo del tejido magro. °Tonificación general del cuerpo. °Diseñado para trabajar mientras duerme..",
    precio: 608,
  },
  {
    nombre: "Carotenoid Complex",
    img: producto9,
    descripcion:
      "°Mejora la función inmunológica general en un 37% en tan sólo 20 días. °Reduce la oxidación del colesterol y promueve la salud cardíaca. °Aumenta los niveles de antioxidantes en la sangre para la protección celular a largo plazo contra los daños de los radicales libres..",
    precio: 737,
  },
  {
    nombre: "CoQ10",
    img: producto10,
    descripcion:
      "°Mejora la función inmunológica general en un 37% en tan sólo 20 días. °Reduce la oxidación del colesterol y promueve la salud cardíaca. °Aumenta los niveles de antioxidantes en la sangre para la protección celular a largo plazo contra los daños de los radicales libres..",
    precio: 698,
  },
  {
    nombre: "Cruciferous Plus",
    img: producto11,
    descripcion:
      "°Proteje y defiende las células y los tejidos. °PROBADO Y COMPROBADO de acuerdo con los protocolos del Instituto Nacional del Cáncer para apoyar la función inmune..",
    precio: 336,
  },
  {
    nombre: "Flavond Complex",
    img: producto12,
    descripcion:
      "°Proporciona diversos fitonutrientes provenientes de frutas y verduras. °Actúa sobre los enlaces flavonoides para reducir el riesgo de cáncer, enfermedad cardíaca y otras enfermedades degenerativas relacionadas con la edad..",
    precio: 469,
  },
  {
    nombre: "Formula IV",
    img: producto13,
    descripcion:
      "°Amplia gama de minerales, vitaminas naturales A y D, las vitaminas del complejo B, vitamina C, bioflavonoides de cereza acerola y la familia completa de la Vitamina E. °Exclusiva Mezcla de fitoenzimas para una digestión fácil..",
    precio: 627,
  },
  {
    nombre: "Formula IV Plus",
    img: producto14,
    descripcion:
      "°Fórmula libre de hierro. °Contribución adicional de minerales de selenio, cromo, molibdeno y 100% de CDR de zinc. °Enzimas exclusivas de origen vegetal apoyan la fácil digestión y absorción de los nutrientes.",
    precio: 644,
  },
  {
    nombre: "Full Motion",
    img: producto15,
    descripcion:
      "°Complejo Regenerativo Mineral, – ofrece una mezcla única de minerales clave para la salud de las articulaciones – zinc, boro y sílice. °Apoya la función saludable de la articulación y regenera el cartílago dañado o perdido. °Incrementa la capacidad aniinflamatoria natural del cuerpo..",
    precio: 340,
  },
  {
    nombre: "Garlic Allium Complex",
    img: producto16,
    descripcion:
      "°Ayuda a mantener niveles normales de colesterol y presión sanguínea. °Fomenta la circulación saludable y promueve la coagulación saludable. °Propiedades antimicrobianas naturales. °4,200 mcg de alicina del extracto puro de ajo en cada porción, con compuestos bioactivos de cebolla, cebollino y puerro..",
    precio: 347,
  },
  {
    nombre: "Lecithin",
    img: producto17,
    descripcion:
      "°Apoya funciones clave del cerebro incluyendo la memoria y el control muscular. °Asiste en el metabolismo de la grasa en el hígado y en el torrente sanguíneo..",
    precio: 421,
  },
  {
    nombre: "Lipotropic Adjunct",
    img: producto18,
    descripcion:
      "°Ayuda a prevenir la oxidación del colesterol en placa. Evitar las acumulación grasa en el hígado. °B6, B12 y acido fólico ayudan a reducir los niveles de homocisteína. °Bioflavonoides cítricos para contribuir a la salud de los vasos sanguíneos..",
    precio: 633,
  },
  {
    nombre: "Liqui Vitae",
    img: producto19,
    descripcion:
      "°Carotenoides para contribuir a la inmunidad. Tre-en-en para la energía celular. °Colina e inositol para contribuir al desarrollo cerebral. °Gran sabor cítrico, versátil –se mezcla fácilmente en otros líquidos..",
    precio: 464,
  },
  {
    nombre: "Magnesium Complex",
    img: producto20,
    descripcion:
      "°Apoya la salud metabólica general a través de la regulación normal de la glucosa en sangre y los niveles hormonales equilibrados. °Ayuda a tener huesos y dientes fuertes. °Promueve la contracción y relajación muscular saludable. °Ayuda a prevenir calambres, debilidad muscular y problemas de coordinación asociados con bajos niveles de magnesio. °Ayuda a estimular el sistema inmune..",
    precio: 303,
  },
  {
    nombre: "Neolifeshake",
    img: producto21,
    descripcion:
      "°Tecnología de Control de la Respuesta Glicémica. Para ayudar a minimizar la acumulación de grasa y fomentar la quema de grasa. °BIOLÓGICAMENTE Completa con todos los 22 aminoácidos. Incluidos los 9 esenciales. °Que proporcionan energía duradera y animan a tu cuerpo a permanecer en una modalidad de la quema de grasas..",
    precio: 829,
  },
  {
    nombre: "Phytodefense",
    img: producto22,
    descripcion:
      "°Clínicamente demostrado en un estudio conducido por investigadores del USDA. 37% de aumento de la función inmunológica en tan sólo 20 días. COMBINANDO TRES NUTRICIONALES POTENTES Cada paquete conveniente ofrece: 3 cápsulas de Carotenoid Complex 2 tabletas de Flavonoid Complex 1 tableta de Cruciferous Plus.",
    precio: 1388,
  },
  {
    nombre: "Provitality",
    img: producto23,
    descripcion:
      "°Energía Abundante. °Protección Antioxidante Poderosa. °Bienestar Cardiaco. °Función Cerebral Saludable. °Articulaciones Saludables y visión clara. °Piel, Cabello y Uñas juveniles. °Función Genética Natural de Antienvejecimiento.",
    precio: 756,
  },
  {
    nombre: "Quelado Call-Mag",
    img: producto24,
    descripcion:
      "°Proporciona vitamina D3, de forma fácilmente absorbible y altamente biodisponible. °Calcio farmacéuticamente puro, derivado de conchas marinas. °Está demostrado que pospone o previene el desarrollo de la osteoporosis. °Ayuda a la presión arterial normal,optimiza la función nerviosa y muscular.",
    precio: 522,
  },
  {
    nombre: "Salmon Oil Plus",
    img: producto25,
    descripcion:
      "Proporción de ácidos grasos omega-3 y omega-6 mejoría de un 43% en ocho semanas. °EQUILIBRA LA INFLAMACIÓN Promueve un equilibrio sano de factores pro y antiinflamatorios. Índice inflamatorio reducido en un 68% en tan sólo ocho semanas. Ayuda a la función cerebral. Ayuda al desarrollo fetal del cerebro y de los ojos. Promueve el equilibrio inflamatorio normal durante los días de actividad física..",
    precio: 504,
  },
  {
    nombre: "Super B",
    img: producto26,
    descripcion:
      "°Equilibrio perfecto de las 8 vitaminas del complejo B, además de inositol y colina. °Procedente de alimentos integrales únicamente. °Alta potencia – para un apoyo metabólico óptimo. °Controlado para la liberación sostenida de nutrientes del complejo B durante un período de seis horas. °Proporciona soporte metabólico máximo para ayudar a satisfacer las altas demandas de nutrientes durante el ejercicio y los períodos de estrés..",
    precio: 639,
  },
  {
    nombre: "Super C",
    img: producto26,
    descripcion:
      "°Sistema propio óptimo de liberación gradual asegurando la protección del nivel óptimo de nutrientes durante más de seis horas. °El poder de la Vitamina C de ocho naranjas en cada tableta. °Respalda el funcionamiento correcto del sistema inmunológico..",
    precio: 523,
  },
  {
    nombre: "Tré",
    img: producto28,
    descripcion:
      "°Antioxidantes poderosos promueven la buena salud total. °Tré se extrae de un grupo selecto de entre las frutas más potentes y únicas de la naturaleza. La ciencia ha demostrado que los polifenoles desempeñan una amplia gama de funciones esenciales a la hora de contribuir y promover la salud, la longevidad y las funciones cognitivas. °Proporciona resveratrol, poder antioxidante y ácido alfa-lipóico.",
    precio: 739,
  },
  {
    nombre: "Tre en en",
    img: producto29,
    descripcion:
      "°Se demostró que cuando Tre-en-en está presente en la dieta, mejoró el crecimiento y el desarrollo general, la eficiencia y utilización de los nutrientes y el desarrollo cardiovascular. °Energía y la vitalidad optimizando el funcionamiento de la membrana celular. Llena de energía todo el cuerpo, ayudando a las células a funcionar de manera más eficiente..",
    precio: 605,
  },
  {
    nombre: "Vegan D",
    img: producto30,
    descripcion:
      "La vitamina D ayuda a construir, mantener huesos, dientes y músculos fuertes, apoya la presión arterial normal y la función nerviosa, así como las defensas inmunes. • 100% vegano. Hecho completamente sin ingredientes de origen animal de ningún tipo, Vegan D cumple con los estrictos criterios de las fuentes que esperan los usuarios de suplementos vegetarianos/veganos..",
    precio: 298,
  },
  {
    nombre: "Vita-Gard",
    img: producto31,
    descripcion:
      "°Zinc y selenio para maximizar las defensas de los niños de modo que se sientan de lo mejor. °Tabletas masticables con irresistible sabor a fruta. °Sin colorantes, sabores, edulcorantes, ni conservantes artificiales añadidos..",
    precio: 549,
  },
  {
    nombre: "Vitamin E plus",
    img: producto32,
    descripcion:
      "°Ofrece las 8 formas de la vitamina E para una protección de amplio espectro °Ayuda a inhibir la oxidación del colesterol gracias a sus potentes efectos antioxidantes. °Mejora la función inmunológica, especialmente en los ancianos. °La tecnología innovadora miscible en agua mejora la absorción. °La vitamina E contribuye a la salud cardíaca, del cerebro y la próstata °Promueve la función del pulmón, el colon y la función inmunológica, así como una piel de apariencia juvenil..",
    precio: 928,
  },
  {
    nombre: "Vita-squares",
    img: producto33,
    descripcion:
      "°Proporciona nutrientes que promueven el crecimiento y el desarrollo saludable del cuerpo y la mente. °Mejorado con colina e inositol para una memoria óptima, aprendizaje y concentración. °Concentrado de granos Tre-en-en para la energía celular. °Sincolorantes,sabores,edulcorantesniconservantes artificiales añadidos..",
    precio: 373,
  },
  {
    nombre: "Zinc Quelado",
    img: producto34,
    descripcion:
      "°Contribuye a la salud de la visión y de la próstata. Mantiene su metabolismo trabajando al máximo. °Se ha demostrado que el Zinc mejora la memoria y la atención en los niños. °Quelados para una mayor absorción y suaves con tu sistema digestivo. °Zinc quelado para una mayor absorción y suave con tu sistema digestivo..",
    precio: 361,
  },
  {
    nombre: "Aloe Vera Gel",
    img: producto35,
    descripcion:
      "°Contribuye a la salud de la visión y de la próstata. Mantiene su metabolismo trabajando al máximo. °Se ha demostrado que el Zinc mejora la memoria y la atención en los niños. °Quelados para una mayor absorción y suaves con tu sistema digestivo. °Zinc quelado para una mayor absorción y suave con tu sistema digestivo..",
    precio: 220,
  },
  {
    nombre: "Acondicionador Enriquecido",
    img: producto36,
    descripcion:
      "°Enriching Conditioner te devuelve el cabello vibrante, tocable y manejable que amas aportando hidratación donde más se necesita. La ProVitamina B5 (Pantenol), el Extracto de Almendras Dulces y los acondicionadores hidratantes restauran el cuerpo y brillo saludables. Retiene la hidratación para un pelo vibrante y suave. Alisa el cabello sin apelmazarlo. Fortalece el cabello con ingredientes naturales..",
    precio: 274,
  },
  {
    nombre: "Shampoo Revitalizante Enriquecido",
    img: producto36,
    descripcion:
      "°Enjuaga las impurezas y añade luminosidad con el lujoso champú “Rich Revitalizing Shampoo” de Nutriance, de calidad de salón de belleza. Con Vitamina B3 y ProVitamina B5 (Pantenol), más una combinación selecta de ingredientes botánicos seleccionados para limpiar y nutrir efectivamente, además de agregar brillo, cuerpo y manejabilidad. Su cabello y cuero cabelludo se sentirán limpios y revitalizados cada vez que los mimes con esta fórmula limpiadora suave. Limpia suavemente, elimina la suciedad y los residuos de los productos de belleza. Aporta luminosidad natural, movimiento y brillo a tu cabello. Disfruta de un cabello suave, sedoso y manejable.",
    precio: 220,
  },
];

// instalar modulo virtual
SwiperCore.use([Virtual, Navigation, Pagination]);

export const Productos = () => {
  const [total, setTotal] = useState(0);
  const [setSwiperRef] = useState(null);
  const [tipoDePago, setTipoDePago] = useState(null);
  const { productos, modalProducto, carrito, enlaces } = useSelector(
    (state) => state.productos
  );
  const dispatch = useDispatch();

  // agrega los productos al estado global
  useEffect(() => {
    dispatch(
      productosAll(
        enlaces.length <= 0
          ? productosViewClientes
          : productosViewDistribuidores
      )
    );
  }, []);

  // sumar valor de todos los productos y da el total
  useEffect(() => {
    const sumWithInitial = carrito.reduce(
      (valorAnterior, ValorActual) =>
        valorAnterior + ValorActual.precio * ValorActual.cantidad,
      0
    );

    setTotal(sumWithInitial);
  }, [carrito]);

  // enviar productos a whatsapp clientes
  const enviarWhatsappCliente = () => {
    carrito.length > 0
      ? window.open(
          `https://wa.me/?text=hola!%0A%0APEDIDO: Prueba de tienda%0A%0A${
            carrito.length > 0 &&
            productosPedir().map((element) => {
              return JSON.stringify(element);
            })
          }%0A%0ATotal: $ ${total.toLocaleString("es-MX")}`,
          "_blank"
        )
      : alert("Ningun producto agregado");
  };

  // enviar productos a whatsapp distribuidores
  const enviarWhatsappDistribuidor = (posicionTelefono) => {
    tipoDePago !== null && carrito.length > 0
      ? window.open(
          `https://wa.me/${
            enlaces[posicionTelefono]
          }?text=hola!%0A%0APEDIDO: Prueba de tienda%0A%0A${
            carrito.length > 0 &&
            productosPedir().map((element) => {
              return JSON.stringify(element);
            })
          }%0A%0ATotal: $ ${total.toLocaleString(
            "es-MX"
          )}%0AForma de pago: ${tipoDePago}`,
          "_blank"
        )
      : alert("Campos requeridos");
  };

  // retorna los productos a pedir por whatsapp
  const productosPedir = () => {
    const prod = [];
    carrito.map((item, index) => {
      prod.push(
        `-- [${++index}] ${item.nombre} > $${(
          item.cantidad * item.precio
        ).toLocaleString("es-MX")}.00 MX%0A`
      );
    });

    return prod;
  };

  // cambiar tipo de Pago
  const changeTipoPago = (e) => {
    setTipoDePago(e.target.value);
  };

  return (
    <>
      {modalProducto && <ModalProducto />}
      <NavBar sobreNosotros={"SOBRE NOSOTROS"} />
      <div className="productos">
        <div className="productos__slice">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            virtual
          >
            {productos?.map((item) => (
              <SwiperSlide key={item.nombre}>
                <Producto producto={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="productos__carrito">
          {/* estado de pedido */}
          <div className="productos__carrito__informacion">
            <div className="productos__carrito__productos">
              {carrito?.length <= 0 ? (
                <div className="productos__carrito__vacio">
                  <h5>Carrito</h5>
                  <p>$0</p>
                </div>
              ) : (
                <ProductoCarrito />
              )}
            </div>

            {/* forma de pago */}

            <div className="productos__carrito__masInf">
              <p>Total estimado: $ {total.toLocaleString("es-MX")}.00 MX</p>
              {enlaces.length > 0 && (
                <form className="productos__carrito__form">
                  <h6>
                    Forma de pago <span>*</span>
                  </h6>
                  <div className="productos__carrito__opc">
                    <div className="productos__carrito__opcPago">
                      <label htmlFor="Efectivo">Efectivo</label>
                      <input
                        onChange={(e) => changeTipoPago(e)}
                        type="radio"
                        name="Forma de pago"
                        value="Efectivo"
                      />
                    </div>
                    <div className="productos__carrito__opcPago">
                      <label htmlFor="Mercado_Pago">
                        Transferencia Bancaria
                      </label>
                      <input
                        onChange={(e) => changeTipoPago(e)}
                        type="radio"
                        name="Forma de pago"
                        value="Mercado Pago"
                      />
                    </div>
                    <div className="productos__carrito__opcPago">
                      <label htmlFor="Tarjeta">Tarjeta de debito/Credito</label>
                      <input
                        onChange={(e) => changeTipoPago(e)}
                        type="radio"
                        name="Forma de pago"
                        value="Tarjeta de debito/Credito"
                      />
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* hacer pedido por whatsapp */}
            <div className="productos__carrito__hacerPedido">
              <h6>Pedir por whatsapp</h6>
              {enlaces.length <= 0 ? (
                <button
                  className="btnGeneral"
                  onClick={() => {
                    enviarWhatsappCliente();
                  }}
                >
                  Elegir en mis contactos{" "}
                  <AiOutlineWhatsApp className="productos__carrito__hacerPedido--icon" />
                </button>
              ) : (
                <>
                  <button
                    className="btnGeneral"
                    onClick={() => enviarWhatsappDistribuidor(0)}
                  >
                    Distribuidor 1{" "}
                    <AiOutlineWhatsApp className="productos__carrito__hacerPedido--icon" />
                  </button>
                  <button
                    className="btnGeneral"
                    onClick={() => enviarWhatsappDistribuidor(1)}
                  >
                    Distribuidor 2{" "}
                    <AiOutlineWhatsApp className="productos__carrito__hacerPedido--icon" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
