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
      "Probi??ticos espec??ficos para el intestino. ?? 5,000,000,000 de microorganismos ???vivos??? por c??psula. ??Exclusivo Sistema de Protecci??n Ent??rica ???Gel-Gard??? que lo protege contra los agresivos ??cidos estomacales y asegura la mayor cantidad de bacterias vivas liberadas en el intestino..",
    precio: 1122,
  },
  {
    nombre: "All-C Masticable",
    img: producto3,
    descripcion:
      "?? 4 naranjas en cada tableta. ??Con rosa mosqueta y cereza acerola ??? las fuentes m??s ricas en vitamina C de la naturaleza. ??Para obtener m??s apoyo para el sistema inmunol??gico, dientes y ojos saludables. ??Una liberaci??n sostenida a lo largo de 4 horas..",
    precio: 389,
  },
  {
    nombre: "All Natural Fiber",
    img: producto2,
    descripcion:
      "??La Neo-Polyfibra exclusiva ayuda a eliminar el colesterol sin quitarle nutrientes. ?? Listo para mezclar en una agradable bebida o en tus recetas favoritas. F??rmula vegetariana. ??Promueve la Regularidad. .",
    precio: 713,
  },
  {
    nombre: "Aloe Vera Plus",
    img: producto4,
    descripcion:
      "??Mezcla especial de t??s herbales. ??Vitamina C para una contribuci??n antioxidante a??adida. ??Endulzado de manera natural para un ???l??mite glic??mico??? propicio tanto para obtener energ??a r??pida como continua..",
    precio: 684,
  },
  {
    nombre: "Betagard",
    img: producto5,
    descripcion:
      "??Basado en alimentos integrales. Antioxidantes, vitaminas y minerales para protegerse contra las toxinas ambientales. ??Formulada espec??ficamente para ayudar en la defensa de su cuerpo contra agentes nocivos en el aire, el agua y los alimentos..",
    precio: 714,
  },
  {
    nombre: "Betagest",
    img: producto6,
    descripcion:
      "??Ayuda a la acidez, gases e hinchaz??n ocasionales. ??Restaura el ??cido natural del est??mago y los factores digestivos comprometidos por la edad o el estr??s. ??Ayuda a digerir los alimentos problem??ticos, incluyendo los productos l??cteos y las prote??nas ..",
    precio: 480,
  },
  {
    nombre: "BG",
    img: producto7,
    descripcion:
      "??Puede ayudar a: 1. Manejar la captaci??n de la glucosa 2. Optimizar la sensibilidad a la insulina 3. Maximizar la funci??n receptora de la insulina 4. Maximizar la funci??n pancre??tica normal para niveles sanos de insulina..",
    precio: 1103,
  },
  {
    nombre: "Bio-Tone NTS",
    img: producto8,
    descripcion:
      "??Retenci??n muscular. ??Movilizaci??n de la grasa. ??Desarrollo del tejido magro. ??Tonificaci??n general del cuerpo. ??Dise??ado para trabajar mientras duerme..",
    precio: 811,
  },
  {
    nombre: "Carotenoid Complex",
    img: producto9,
    descripcion:
      "??Mejora la funci??n inmunol??gica general en un 37% en tan s??lo 20 d??as. ??Reduce la oxidaci??n del colesterol y promueve la salud card??aca. ??Aumenta los niveles de antioxidantes en la sangre para la protecci??n celular a largo plazo contra los da??os de los radicales libres..",
    precio: 981,
  },
  {
    nombre: "CoQ10",
    img: producto10,
    descripcion:
      "??Mejora la funci??n inmunol??gica general en un 37% en tan s??lo 20 d??as. ??Reduce la oxidaci??n del colesterol y promueve la salud card??aca. ??Aumenta los niveles de antioxidantes en la sangre para la protecci??n celular a largo plazo contra los da??os de los radicales libres..",
    precio: 981,
  },
  {
    nombre: "Cruciferous Plus",
    img: producto11,
    descripcion:
      "??Proteje y defiende las c??lulas y los tejidos. ??PROBADO Y COMPROBADO de acuerdo con los protocolos del Instituto Nacional del C??ncer para apoyar la funci??n inmune..",
    precio: 445,
  },
  {
    nombre: "Flavond Complex",
    img: producto12,
    descripcion:
      "??Proporciona diversos fitonutrientes provenientes de frutas y verduras. ??Act??a sobre los enlaces flavonoides para reducir el riesgo de c??ncer, enfermedad card??aca y otras enfermedades degenerativas relacionadas con la edad..",
    precio: 623,
  },
  {
    nombre: "Formula IV",
    img: producto13,
    descripcion:
      "??Amplia gama de minerales, vitaminas naturales A y D, las vitaminas del complejo B, vitamina C, bioflavonoides de cereza acerola y la familia completa de la Vitamina E. ??Exclusiva Mezcla de fitoenzimas para una digesti??n f??cil..",
    precio: 829,
  },
  {
    nombre: "Formula IV Plus",
    img: producto14,
    descripcion:
      "??F??rmula libre de hierro. ??Contribuci??n adicional de minerales de selenio, cromo, molibdeno y 100% de CDR de zinc. ??Enzimas exclusivas de origen vegetal apoyan la f??cil digesti??n y absorci??n de los nutrientes.",
    precio: 857,
  },
  {
    nombre: "Full Motion",
    img: producto15,
    descripcion:
      "??Complejo Regenerativo Mineral, ??? ofrece una mezcla ??nica de minerales clave para la salud de las articulaciones ??? zinc, boro y s??lice. ??Apoya la funci??n saludable de la articulaci??n y regenera el cart??lago da??ado o perdido. ??Incrementa la capacidad aniinflamatoria natural del cuerpo..",
    precio: 486,
  },
  {
    nombre: "Garlic Allium Complex",
    img: producto16,
    descripcion:
      "??Ayuda a mantener niveles normales de colesterol y presi??n sangu??nea. ??Fomenta la circulaci??n saludable y promueve la coagulaci??n saludable. ??Propiedades antimicrobianas naturales. ??4,200 mcg de alicina del extracto puro de ajo en cada porci??n, con compuestos bioactivos de cebolla, cebollino y puerro..",
    precio: 460,
  },
  {
    nombre: "Lecithin",
    img: producto17,
    descripcion:
      "??Apoya funciones clave del cerebro incluyendo la memoria y el control muscular. ??Asiste en el metabolismo de la grasa en el h??gado y en el torrente sangu??neo..",
    precio: 558,
  },
  {
    nombre: "Lipotropic Adjunct",
    img: producto18,
    descripcion:
      "??Ayuda a prevenir la oxidaci??n del colesterol en placa. Evitar las acumulaci??n grasa en el h??gado. ??B6, B12 y acido f??lico ayudan a reducir los niveles de homociste??na. ??Bioflavonoides c??tricos para contribuir a la salud de los vasos sangu??neos..",
    precio: 633,
  },
  {
    nombre: "Liqui Vitae",
    img: producto19,
    descripcion:
      "??Carotenoides para contribuir a la inmunidad. Tre-en-en para la energ??a celular. ??Colina e inositol para contribuir al desarrollo cerebral. ??Gran sabor c??trico, vers??til ???se mezcla f??cilmente en otros l??quidos..",
    precio: 624,
  },
  {
    nombre: "Magnesium Complex",
    img: producto20,
    descripcion:
      "??Apoya la salud metab??lica general a trav??s de la regulaci??n normal de la glucosa en sangre y los niveles hormonales equilibrados. ??Ayuda a tener huesos y dientes fuertes. ??Promueve la contracci??n y relajaci??n muscular saludable. ??Ayuda a prevenir calambres, debilidad muscular y problemas de coordinaci??n asociados con bajos niveles de magnesio. ??Ayuda a estimular el sistema inmune..",
    precio: 403,
  },
  {
    nombre: "Neolifeshake",
    img: producto21,
    descripcion:
      "??Tecnolog??a de Control de la Respuesta Glic??mica. Para ayudar a minimizar la acumulaci??n de grasa y fomentar la quema de grasa. ??BIOL??GICAMENTE Completa con todos los 22 amino??cidos. Incluidos los 9 esenciales. ??Que proporcionan energ??a duradera y animan a tu cuerpo a permanecer en una modalidad de la quema de grasas..",
    precio: 1108,
  },
  {
    nombre: "Phytodefense",
    img: producto22,
    descripcion:
      "??Cl??nicamente demostrado en un estudio conducido por investigadores del USDA. 37% de aumento de la funci??n inmunol??gica en tan s??lo 20 d??as. COMBINANDO TRES NUTRICIONALES POTENTES Cada paquete conveniente ofrece: 3 c??psulas de Carotenoid Complex 2 tabletas de Flavonoid Complex 1 tableta de Cruciferous Plus.",
    precio: 1847,
  },
  {
    nombre: "Provitality",
    img: producto23,
    descripcion:
      "??Energ??a Abundante. ??Protecci??n Antioxidante Poderosa. ??Bienestar Cardiaco. ??Funci??n Cerebral Saludable. ??Articulaciones Saludables y visi??n clara. ??Piel, Cabello y U??as juveniles. ??Funci??n Gen??tica Natural de Antienvejecimiento.",
    precio: 1008,
  },
  {
    nombre: "Quelado Call-Mag",
    img: producto24,
    descripcion:
      "??Proporciona vitamina D3, de forma f??cilmente absorbible y altamente biodisponible. ??Calcio farmac??uticamente puro, derivado de conchas marinas. ??Est?? demostrado que pospone o previene el desarrollo de la osteoporosis. ??Ayuda a la presi??n arterial normal,optimiza la funci??n nerviosa y muscular.",
    precio: 1008,
  },
  {
    nombre: "Salmon Oil Plus",
    img: producto25,
    descripcion:
      "Proporci??n de ??cidos grasos omega-3 y omega-6 mejor??a de un 43% en ocho semanas. ??EQUILIBRA LA INFLAMACI??N Promueve un equilibrio sano de factores pro y antiinflamatorios. ??ndice inflamatorio reducido en un 68% en tan s??lo ocho semanas. Ayuda a la funci??n cerebral. Ayuda al desarrollo fetal del cerebro y de los ojos. Promueve el equilibrio inflamatorio normal durante los d??as de actividad f??sica..",
    precio: 996,
  },
  {
    nombre: "Super B",
    img: producto26,
    descripcion:
      "??Equilibrio perfecto de las 8 vitaminas del complejo B, adem??s de inositol y colina. ??Procedente de alimentos integrales ??nicamente. ??Alta potencia ??? para un apoyo metab??lico ??ptimo. ??Controlado para la liberaci??n sostenida de nutrientes del complejo B durante un per??odo de seis horas. ??Proporciona soporte metab??lico m??ximo para ayudar a satisfacer las altas demandas de nutrientes durante el ejercicio y los per??odos de estr??s..",
    precio: 849,
  },
  {
    nombre: "Super C",
    img: producto26,
    descripcion:
      "??Sistema propio ??ptimo de liberaci??n gradual asegurando la protecci??n del nivel ??ptimo de nutrientes durante m??s de seis horas. ??El poder de la Vitamina C de ocho naranjas en cada tableta. ??Respalda el funcionamiento correcto del sistema inmunol??gico..",
    precio: 694,
  },
  {
    nombre: "Tr??",
    img: producto28,
    descripcion:
      "??Antioxidantes poderosos promueven la buena salud total. ??Tr?? se extrae de un grupo selecto de entre las frutas m??s potentes y ??nicas de la naturaleza. La ciencia ha demostrado que los polifenoles desempe??an una amplia gama de funciones esenciales a la hora de contribuir y promover la salud, la longevidad y las funciones cognitivas. ??Proporciona resveratrol, poder antioxidante y ??cido alfa-lip??ico.",
    precio: 1045,
  },
  {
    nombre: "Tre en en",
    img: producto29,
    descripcion:
      "??Se demostr?? que cuando Tre-en-en est?? presente en la dieta, mejor?? el crecimiento y el desarrollo general, la eficiencia y utilizaci??n de los nutrientes y el desarrollo cardiovascular. ??Energ??a y la vitalidad optimizando el funcionamiento de la membrana celular. Llena de energ??a todo el cuerpo, ayudando a las c??lulas a funcionar de manera m??s eficiente..",
    precio: 811,
  },
  {
    nombre: "Vegan D",
    img: producto30,
    descripcion:
      "La vitamina D ayuda a construir, mantener huesos, dientes y m??sculos fuertes, apoya la presi??n arterial normal y la funci??n nerviosa, as?? como las defensas inmunes. ??? 100% vegano. Hecho completamente sin ingredientes de origen animal de ning??n tipo, Vegan D cumple con los estrictos criterios de las fuentes que esperan los usuarios de suplementos vegetarianos/veganos..",
    precio: 397,
  },
  {
    nombre: "Vita-Gard",
    img: producto31,
    descripcion:
      "??Zinc y selenio para maximizar las defensas de los ni??os de modo que se sientan de lo mejor. ??Tabletas masticables con irresistible sabor a fruta. ??Sin colorantes, sabores, edulcorantes, ni conservantes artificiales a??adidos..",
    precio: 731,
  },
  {
    nombre: "Vitamin E plus",
    img: producto32,
    descripcion:
      "??Ofrece las 8 formas de la vitamina E para una protecci??n de amplio espectro ??Ayuda a inhibir la oxidaci??n del colesterol gracias a sus potentes efectos antioxidantes. ??Mejora la funci??n inmunol??gica, especialmente en los ancianos. ??La tecnolog??a innovadora miscible en agua mejora la absorci??n. ??La vitamina E contribuye a la salud card??aca, del cerebro y la pr??stata ??Promueve la funci??n del pulm??n, el colon y la funci??n inmunol??gica, as?? como una piel de apariencia juvenil..",
    precio: 1238,
  },
  {
    nombre: "Vita-squares",
    img: producto33,
    descripcion:
      "??Proporciona nutrientes que promueven el crecimiento y el desarrollo saludable del cuerpo y la mente. ??Mejorado con colina e inositol para una memoria ??ptima, aprendizaje y concentraci??n. ??Concentrado de granos Tre-en-en para la energ??a celular. ??Sincolorantes,sabores,edulcorantesniconservantes artificiales a??adidos..",
    precio: 498,
  },
  {
    nombre: "Zinc Quelado",
    img: producto34,
    descripcion:
      "??Contribuye a la salud de la visi??n y de la pr??stata. Mantiene su metabolismo trabajando al m??ximo. ??Se ha demostrado que el Zinc mejora la memoria y la atenci??n en los ni??os. ??Quelados para una mayor absorci??n y suaves con tu sistema digestivo. ??Zinc quelado para una mayor absorci??n y suave con tu sistema digestivo..",
    precio: 479,
  },
  {
    nombre: "Aloe Vera Gel",
    img: producto35,
    descripcion:
      "??Contribuye a la salud de la visi??n y de la pr??stata. Mantiene su metabolismo trabajando al m??ximo. ??Se ha demostrado que el Zinc mejora la memoria y la atenci??n en los ni??os. ??Quelados para una mayor absorci??n y suaves con tu sistema digestivo. ??Zinc quelado para una mayor absorci??n y suave con tu sistema digestivo..",
    precio: 479,
  },
  {
    nombre: "Acondicionador Enriquecido",
    img: producto36,
    descripcion:
      "??Enriching Conditioner te devuelve el cabello vibrante, tocable y manejable que amas aportando hidrataci??n donde m??s se necesita. La ProVitamina B5 (Pantenol), el Extracto de Almendras Dulces y los acondicionadores hidratantes restauran el cuerpo y brillo saludables. Retiene la hidrataci??n para un pelo vibrante y suave. Alisa el cabello sin apelmazarlo. Fortalece el cabello con ingredientes naturales..",
    precio: 303,
  },
  {
    nombre: "Shampoo Revitalizante Enriquecido",
    img: producto36,
    descripcion:
      "??Enjuaga las impurezas y a??ade luminosidad con el lujoso champ?? ???Rich Revitalizing Shampoo??? de Nutriance, de calidad de sal??n de belleza. Con Vitamina B3 y ProVitamina B5 (Pantenol), m??s una combinaci??n selecta de ingredientes bot??nicos seleccionados para limpiar y nutrir efectivamente, adem??s de agregar brillo, cuerpo y manejabilidad. Su cabello y cuero cabelludo se sentir??n limpios y revitalizados cada vez que los mimes con esta f??rmula limpiadora suave. Limpia suavemente, elimina la suciedad y los residuos de los productos de belleza. Aporta luminosidad natural, movimiento y brillo a tu cabello. Disfruta de un cabello suave, sedoso y manejable.",
    precio: 303,
  },
];

export const productosViewDistribuidores = [
  {
    nombre: "Acidophilus Plus",
    img: producto1,
    descripcion:
      "Probi??ticos espec??ficos para el intestino. ?? 5,000,000,000 de microorganismos ???vivos??? por c??psula. ??Exclusivo Sistema de Protecci??n Ent??rica ???Gel-Gard??? que lo protege contra los agresivos ??cidos estomacales y asegura la mayor cantidad de bacterias vivas liberadas en el intestino..",
    precio: 840,
  },
  {
    nombre: "All-C Masticable",
    img: producto3,
    descripcion:
      "?? 4 naranjas en cada tableta. ??Con rosa mosqueta y cereza acerola ??? las fuentes m??s ricas en vitamina C de la naturaleza. ??Para obtener m??s apoyo para el sistema inmunol??gico, dientes y ojos saludables. ??Una liberaci??n sostenida a lo largo de 4 horas..",
    precio: 293,
  },
  {
    nombre: "All Natural Fiber",
    img: producto2,
    descripcion:
      "??La Neo-Polyfibra exclusiva ayuda a eliminar el colesterol sin quitarle nutrientes. ?? Listo para mezclar en una agradable bebida o en tus recetas favoritas. F??rmula vegetariana. ??Promueve la Regularidad. .",
    precio: 537,
  },
  {
    nombre: "Aloe Vera Plus",
    img: producto4,
    descripcion:
      "??Mezcla especial de t??s herbales. ??Vitamina C para una contribuci??n antioxidante a??adida. ??Endulzado de manera natural para un ???l??mite glic??mico??? propicio tanto para obtener energ??a r??pida como continua..",
    precio: 515,
  },
  {
    nombre: "Betagard",
    img: producto5,
    descripcion:
      "??Basado en alimentos integrales. Antioxidantes, vitaminas y minerales para protegerse contra las toxinas ambientales. ??Formulada espec??ficamente para ayudar en la defensa de su cuerpo contra agentes nocivos en el aire, el agua y los alimentos..",
    precio: 537,
  },
  {
    nombre: "Betagest",
    img: producto6,
    descripcion:
      "??Ayuda a la acidez, gases e hinchaz??n ocasionales. ??Restaura el ??cido natural del est??mago y los factores digestivos comprometidos por la edad o el estr??s. ??Ayuda a digerir los alimentos problem??ticos, incluyendo los productos l??cteos y las prote??nas ..",
    precio: 559,
  },
  {
    nombre: "BG",
    img: producto7,
    descripcion:
      "??Puede ayudar a: 1. Manejar la captaci??n de la glucosa 2. Optimizar la sensibilidad a la insulina 3. Maximizar la funci??n receptora de la insulina 4. Maximizar la funci??n pancre??tica normal para niveles sanos de insulina..",
    precio: 829,
  },
  {
    nombre: "Bio-Tone NTS",
    img: producto8,
    descripcion:
      "??Retenci??n muscular. ??Movilizaci??n de la grasa. ??Desarrollo del tejido magro. ??Tonificaci??n general del cuerpo. ??Dise??ado para trabajar mientras duerme..",
    precio: 608,
  },
  {
    nombre: "Carotenoid Complex",
    img: producto9,
    descripcion:
      "??Mejora la funci??n inmunol??gica general en un 37% en tan s??lo 20 d??as. ??Reduce la oxidaci??n del colesterol y promueve la salud card??aca. ??Aumenta los niveles de antioxidantes en la sangre para la protecci??n celular a largo plazo contra los da??os de los radicales libres..",
    precio: 737,
  },
  {
    nombre: "CoQ10",
    img: producto10,
    descripcion:
      "??Mejora la funci??n inmunol??gica general en un 37% en tan s??lo 20 d??as. ??Reduce la oxidaci??n del colesterol y promueve la salud card??aca. ??Aumenta los niveles de antioxidantes en la sangre para la protecci??n celular a largo plazo contra los da??os de los radicales libres..",
    precio: 698,
  },
  {
    nombre: "Cruciferous Plus",
    img: producto11,
    descripcion:
      "??Proteje y defiende las c??lulas y los tejidos. ??PROBADO Y COMPROBADO de acuerdo con los protocolos del Instituto Nacional del C??ncer para apoyar la funci??n inmune..",
    precio: 336,
  },
  {
    nombre: "Flavond Complex",
    img: producto12,
    descripcion:
      "??Proporciona diversos fitonutrientes provenientes de frutas y verduras. ??Act??a sobre los enlaces flavonoides para reducir el riesgo de c??ncer, enfermedad card??aca y otras enfermedades degenerativas relacionadas con la edad..",
    precio: 469,
  },
  {
    nombre: "Formula IV",
    img: producto13,
    descripcion:
      "??Amplia gama de minerales, vitaminas naturales A y D, las vitaminas del complejo B, vitamina C, bioflavonoides de cereza acerola y la familia completa de la Vitamina E. ??Exclusiva Mezcla de fitoenzimas para una digesti??n f??cil..",
    precio: 627,
  },
  {
    nombre: "Formula IV Plus",
    img: producto14,
    descripcion:
      "??F??rmula libre de hierro. ??Contribuci??n adicional de minerales de selenio, cromo, molibdeno y 100% de CDR de zinc. ??Enzimas exclusivas de origen vegetal apoyan la f??cil digesti??n y absorci??n de los nutrientes.",
    precio: 644,
  },
  {
    nombre: "Full Motion",
    img: producto15,
    descripcion:
      "??Complejo Regenerativo Mineral, ??? ofrece una mezcla ??nica de minerales clave para la salud de las articulaciones ??? zinc, boro y s??lice. ??Apoya la funci??n saludable de la articulaci??n y regenera el cart??lago da??ado o perdido. ??Incrementa la capacidad aniinflamatoria natural del cuerpo..",
    precio: 340,
  },
  {
    nombre: "Garlic Allium Complex",
    img: producto16,
    descripcion:
      "??Ayuda a mantener niveles normales de colesterol y presi??n sangu??nea. ??Fomenta la circulaci??n saludable y promueve la coagulaci??n saludable. ??Propiedades antimicrobianas naturales. ??4,200 mcg de alicina del extracto puro de ajo en cada porci??n, con compuestos bioactivos de cebolla, cebollino y puerro..",
    precio: 347,
  },
  {
    nombre: "Lecithin",
    img: producto17,
    descripcion:
      "??Apoya funciones clave del cerebro incluyendo la memoria y el control muscular. ??Asiste en el metabolismo de la grasa en el h??gado y en el torrente sangu??neo..",
    precio: 421,
  },
  {
    nombre: "Lipotropic Adjunct",
    img: producto18,
    descripcion:
      "??Ayuda a prevenir la oxidaci??n del colesterol en placa. Evitar las acumulaci??n grasa en el h??gado. ??B6, B12 y acido f??lico ayudan a reducir los niveles de homociste??na. ??Bioflavonoides c??tricos para contribuir a la salud de los vasos sangu??neos..",
    precio: 633,
  },
  {
    nombre: "Liqui Vitae",
    img: producto19,
    descripcion:
      "??Carotenoides para contribuir a la inmunidad. Tre-en-en para la energ??a celular. ??Colina e inositol para contribuir al desarrollo cerebral. ??Gran sabor c??trico, vers??til ???se mezcla f??cilmente en otros l??quidos..",
    precio: 464,
  },
  {
    nombre: "Magnesium Complex",
    img: producto20,
    descripcion:
      "??Apoya la salud metab??lica general a trav??s de la regulaci??n normal de la glucosa en sangre y los niveles hormonales equilibrados. ??Ayuda a tener huesos y dientes fuertes. ??Promueve la contracci??n y relajaci??n muscular saludable. ??Ayuda a prevenir calambres, debilidad muscular y problemas de coordinaci??n asociados con bajos niveles de magnesio. ??Ayuda a estimular el sistema inmune..",
    precio: 303,
  },
  {
    nombre: "Neolifeshake",
    img: producto21,
    descripcion:
      "??Tecnolog??a de Control de la Respuesta Glic??mica. Para ayudar a minimizar la acumulaci??n de grasa y fomentar la quema de grasa. ??BIOL??GICAMENTE Completa con todos los 22 amino??cidos. Incluidos los 9 esenciales. ??Que proporcionan energ??a duradera y animan a tu cuerpo a permanecer en una modalidad de la quema de grasas..",
    precio: 829,
  },
  {
    nombre: "Phytodefense",
    img: producto22,
    descripcion:
      "??Cl??nicamente demostrado en un estudio conducido por investigadores del USDA. 37% de aumento de la funci??n inmunol??gica en tan s??lo 20 d??as. COMBINANDO TRES NUTRICIONALES POTENTES Cada paquete conveniente ofrece: 3 c??psulas de Carotenoid Complex 2 tabletas de Flavonoid Complex 1 tableta de Cruciferous Plus.",
    precio: 1388,
  },
  {
    nombre: "Provitality",
    img: producto23,
    descripcion:
      "??Energ??a Abundante. ??Protecci??n Antioxidante Poderosa. ??Bienestar Cardiaco. ??Funci??n Cerebral Saludable. ??Articulaciones Saludables y visi??n clara. ??Piel, Cabello y U??as juveniles. ??Funci??n Gen??tica Natural de Antienvejecimiento.",
    precio: 756,
  },
  {
    nombre: "Quelado Call-Mag",
    img: producto24,
    descripcion:
      "??Proporciona vitamina D3, de forma f??cilmente absorbible y altamente biodisponible. ??Calcio farmac??uticamente puro, derivado de conchas marinas. ??Est?? demostrado que pospone o previene el desarrollo de la osteoporosis. ??Ayuda a la presi??n arterial normal,optimiza la funci??n nerviosa y muscular.",
    precio: 522,
  },
  {
    nombre: "Salmon Oil Plus",
    img: producto25,
    descripcion:
      "Proporci??n de ??cidos grasos omega-3 y omega-6 mejor??a de un 43% en ocho semanas. ??EQUILIBRA LA INFLAMACI??N Promueve un equilibrio sano de factores pro y antiinflamatorios. ??ndice inflamatorio reducido en un 68% en tan s??lo ocho semanas. Ayuda a la funci??n cerebral. Ayuda al desarrollo fetal del cerebro y de los ojos. Promueve el equilibrio inflamatorio normal durante los d??as de actividad f??sica..",
    precio: 504,
  },
  {
    nombre: "Super B",
    img: producto26,
    descripcion:
      "??Equilibrio perfecto de las 8 vitaminas del complejo B, adem??s de inositol y colina. ??Procedente de alimentos integrales ??nicamente. ??Alta potencia ??? para un apoyo metab??lico ??ptimo. ??Controlado para la liberaci??n sostenida de nutrientes del complejo B durante un per??odo de seis horas. ??Proporciona soporte metab??lico m??ximo para ayudar a satisfacer las altas demandas de nutrientes durante el ejercicio y los per??odos de estr??s..",
    precio: 639,
  },
  {
    nombre: "Super C",
    img: producto26,
    descripcion:
      "??Sistema propio ??ptimo de liberaci??n gradual asegurando la protecci??n del nivel ??ptimo de nutrientes durante m??s de seis horas. ??El poder de la Vitamina C de ocho naranjas en cada tableta. ??Respalda el funcionamiento correcto del sistema inmunol??gico..",
    precio: 523,
  },
  {
    nombre: "Tr??",
    img: producto28,
    descripcion:
      "??Antioxidantes poderosos promueven la buena salud total. ??Tr?? se extrae de un grupo selecto de entre las frutas m??s potentes y ??nicas de la naturaleza. La ciencia ha demostrado que los polifenoles desempe??an una amplia gama de funciones esenciales a la hora de contribuir y promover la salud, la longevidad y las funciones cognitivas. ??Proporciona resveratrol, poder antioxidante y ??cido alfa-lip??ico.",
    precio: 739,
  },
  {
    nombre: "Tre en en",
    img: producto29,
    descripcion:
      "??Se demostr?? que cuando Tre-en-en est?? presente en la dieta, mejor?? el crecimiento y el desarrollo general, la eficiencia y utilizaci??n de los nutrientes y el desarrollo cardiovascular. ??Energ??a y la vitalidad optimizando el funcionamiento de la membrana celular. Llena de energ??a todo el cuerpo, ayudando a las c??lulas a funcionar de manera m??s eficiente..",
    precio: 605,
  },
  {
    nombre: "Vegan D",
    img: producto30,
    descripcion:
      "La vitamina D ayuda a construir, mantener huesos, dientes y m??sculos fuertes, apoya la presi??n arterial normal y la funci??n nerviosa, as?? como las defensas inmunes. ??? 100% vegano. Hecho completamente sin ingredientes de origen animal de ning??n tipo, Vegan D cumple con los estrictos criterios de las fuentes que esperan los usuarios de suplementos vegetarianos/veganos..",
    precio: 298,
  },
  {
    nombre: "Vita-Gard",
    img: producto31,
    descripcion:
      "??Zinc y selenio para maximizar las defensas de los ni??os de modo que se sientan de lo mejor. ??Tabletas masticables con irresistible sabor a fruta. ??Sin colorantes, sabores, edulcorantes, ni conservantes artificiales a??adidos..",
    precio: 549,
  },
  {
    nombre: "Vitamin E plus",
    img: producto32,
    descripcion:
      "??Ofrece las 8 formas de la vitamina E para una protecci??n de amplio espectro ??Ayuda a inhibir la oxidaci??n del colesterol gracias a sus potentes efectos antioxidantes. ??Mejora la funci??n inmunol??gica, especialmente en los ancianos. ??La tecnolog??a innovadora miscible en agua mejora la absorci??n. ??La vitamina E contribuye a la salud card??aca, del cerebro y la pr??stata ??Promueve la funci??n del pulm??n, el colon y la funci??n inmunol??gica, as?? como una piel de apariencia juvenil..",
    precio: 928,
  },
  {
    nombre: "Vita-squares",
    img: producto33,
    descripcion:
      "??Proporciona nutrientes que promueven el crecimiento y el desarrollo saludable del cuerpo y la mente. ??Mejorado con colina e inositol para una memoria ??ptima, aprendizaje y concentraci??n. ??Concentrado de granos Tre-en-en para la energ??a celular. ??Sincolorantes,sabores,edulcorantesniconservantes artificiales a??adidos..",
    precio: 373,
  },
  {
    nombre: "Zinc Quelado",
    img: producto34,
    descripcion:
      "??Contribuye a la salud de la visi??n y de la pr??stata. Mantiene su metabolismo trabajando al m??ximo. ??Se ha demostrado que el Zinc mejora la memoria y la atenci??n en los ni??os. ??Quelados para una mayor absorci??n y suaves con tu sistema digestivo. ??Zinc quelado para una mayor absorci??n y suave con tu sistema digestivo..",
    precio: 361,
  },
  {
    nombre: "Aloe Vera Gel",
    img: producto35,
    descripcion:
      "??Contribuye a la salud de la visi??n y de la pr??stata. Mantiene su metabolismo trabajando al m??ximo. ??Se ha demostrado que el Zinc mejora la memoria y la atenci??n en los ni??os. ??Quelados para una mayor absorci??n y suaves con tu sistema digestivo. ??Zinc quelado para una mayor absorci??n y suave con tu sistema digestivo..",
    precio: 220,
  },
  {
    nombre: "Acondicionador Enriquecido",
    img: producto36,
    descripcion:
      "??Enriching Conditioner te devuelve el cabello vibrante, tocable y manejable que amas aportando hidrataci??n donde m??s se necesita. La ProVitamina B5 (Pantenol), el Extracto de Almendras Dulces y los acondicionadores hidratantes restauran el cuerpo y brillo saludables. Retiene la hidrataci??n para un pelo vibrante y suave. Alisa el cabello sin apelmazarlo. Fortalece el cabello con ingredientes naturales..",
    precio: 274,
  },
  {
    nombre: "Shampoo Revitalizante Enriquecido",
    img: producto36,
    descripcion:
      "??Enjuaga las impurezas y a??ade luminosidad con el lujoso champ?? ???Rich Revitalizing Shampoo??? de Nutriance, de calidad de sal??n de belleza. Con Vitamina B3 y ProVitamina B5 (Pantenol), m??s una combinaci??n selecta de ingredientes bot??nicos seleccionados para limpiar y nutrir efectivamente, adem??s de agregar brillo, cuerpo y manejabilidad. Su cabello y cuero cabelludo se sentir??n limpios y revitalizados cada vez que los mimes con esta f??rmula limpiadora suave. Limpia suavemente, elimina la suciedad y los residuos de los productos de belleza. Aporta luminosidad natural, movimiento y brillo a tu cabello. Disfruta de un cabello suave, sedoso y manejable.",
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
