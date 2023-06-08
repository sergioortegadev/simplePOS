import { useState } from "react";
import { useModal } from "./hooks/useModal.jsx";
import { FigureModalAdmin } from "./FigureModalAdmin.jsx";
import CrudForm from "./CrudForm";
import CrudFormEdit from "./CrudFormEdit";
import CrudTable from "./CrudTable";
import CrudCards from "./CrudCards";
import { useContext } from "react";
import NavContext from "../context/NavContext";
import db from "../db/db.json";

const product = db.product;
/* 
const product = [
  {
    id: 10000,
    category: 0,
    tags: ["bangho", "laptop", "celeron", "notebook"],
    prodName: "Notebook Bangho Max L4 14'' Celeron 5205u 4gb 120gb Ssd Hd",
    description:
      "Notebook ideal para trasladar y uso casual, recomendamos para el hogar y navegar por internet.  *todos los equipos se entregan con sistema operativo instalado y programas basicos para el uso. Procesador: Marca: intel. Modelo: Celeron 5205u. Nucleos: 2. RAM: 4Gb. Pantalla 14''. Disco: 120Gb. Sistema Operativo Free Dos.",
    price: 111000,
    stock: 10,
    images: [
      "/src/assets/product/10000-01.jpg",
      "/src/assets/product/10000-02.jpg",
      "/src/assets/product/10000-03.jpg",
    ],
  },
  {
    id: 10001,
    category: 0,
    tags: ["asus", "core i3", "i3", "laptop", "notebook"],
    prodName:
      "Notebook Asus F515E 15,6 Fhd Core I3-1115g4 4gb ram 128gb Ssd W11 (teclado americano)",
    description:
      "Procesador: Marca: Intel Modelo: Core i3-1115G4. Nucleos: 2. Frecuencia Maxima: 4.1Ghz. RAM: 4Gb. Pantalla: 15.6''. Disco: 128Gb SSD. Sistema operativo: Windows 10",
    price: 216000,
    stock: 5,
    images: [
      "/src/assets/product/10001-01.jpg",
      "/src/assets/product/10001-02.jpg",
      "/src/assets/product/10001-03.jpg",
    ],
  },
  {
    id: 10002,
    category: 1,
    tags: [""],
    prodName: "Hub usb 2.0 - 4 puertos",
    description:
      "IntCo Hub 4 puertos USB 2.0 KTSH001 HI-SPEED. 4 puertos USB de alta velocidad 2.0. Transfiere datos hasta 480 Mbps. Plug & Play. Led indicador de power.Compatible con USB 1.1/ 2.0. Soporta transferencia de datos en rango de 1.5/12/480Mb/s. Extra protección, puertos individuales. Diseño amigable y ergonómico de fácil transporte. Proporciona más de 500ma por cada puerto. Longitud del cable: 30 cm.",
    price: 1154,
    stock: 20,
    images: [
      "/src/assets/product/10002-01.jpg",
      "/src/assets/product/10002-02.jpg",
      "/src/assets/product/10002-03.jpg",
      "/src/assets/product/10002-04.jpg",
    ],
  },
  {
    id: 10003,
    category: 2,
    tags: ["samsung", "celular"],
    prodName: "SAMSUNG SM-A045M NEGRO",
    description:
      "Más pantalla significa más espacio para jugar. Expandí tu vista a la pantalla Infinity-V de 6,5 pulgadas de tu Galaxy A04 y mirá lo que estuviste perdiendo. Pantalla 6.5''. Almacenamiento 128Gb. RAM 4Gb.",
    price: 75999,
    stock: 15,
    images: [
      "/src/assets/product/10003-01.jpg",
      "/src/assets/product/10003-02.jpg",
      "/src/assets/product/10003-03.jpg",
      "/src/assets/product/10003-04.jpg",
    ],
  },
  {
    id: 10004,
    category: 2,
    tags: ["samsung", "plegable", "fold", "celular"],
    prodName: "SAMSUNG SM-F936B Z FOLD4 NEGRO",
    description:
      "Flexibilizá con todos los demás. Hace mucho en una mano con su pantalla de cubierta de 6.2 pulgadas.1 En ambas manos, la pantalla principal de 7.6 pulgadas lo convierte en el mejor dispositivo para hacer más cosas.2 Y cuando necesites tener las manos libres, simplemente ajustalo, encontrá un buen ángulo y dejalo allí mientras haces más. Almacenamiento: 256Gb. Ram 12Gb. Pantalla: 13",
    price: 609999,
    stock: 0,
    images: [
      "/src/assets/product/10004-01.jpg",
      "/src/assets/product/10004-02.jpg",
      "/src/assets/product/10004-03.jpg",
      "/src/assets/product/10004-04.jpg",
      "/src/assets/product/10004-05.jpg",
    ],
  },
  {
    id: 10005,
    category: 2,
    tags: ["motorola", "celular"],
    prodName: "MOTOROLA MOTO G32 XT2235-1 PLATA",
    description:
      "Celular. Pantalla IPS de 6.49''. Relacion aspecto 20:9. Resolucion 1080 x 2400, FHD+, 405, Mid-HiD, 90Hz. Procesador Qualcomm Snapdragon 680 Octa core (2.4GHz). Capacidad 128 Gb (expandible hasta 1Tb) / RAM 4 Gb. Camara Principal: 50MP (74.26)F1.8Gran Angular: 8MP (118) F2.2Macro: 2MP (88) F2.2. Zoom digital (8x picture / 8x video). Flash LED. Camara frontal 16MP (118) F2.2. Flash frontal backlight. Conexiones: USB C 2.0. Entrada de audio de 3.5mm. Lector de tarjetas micro SD. Wi Fi 802.11 a/b/g/n/ac/k/v/r/u - WIFI5. Bluetooth 5.2. GPS, AGPS, GLONASS, Galileo. Sistema operativo Android 12. Bateria de 5000 mAh. Sensores: acelerometro, de proximidad, brujula (campo magnetico). Giroscopio. Huella dactilar, Luz ambiente. Desbloqueo facial.",
    price: 77999,
    stock: 3,
    images: [
      "/src/assets/product/10005-01.jpg",
      "/src/assets/product/10005-02.jpg",
      "/src/assets/product/10005-03.jpg",
    ],
  },
  {
    id: 10006,
    category: 3,
    tags: ["cable", "usb", "celular"],
    prodName: "Cable usb a micro usb 1 mt negro office",
    description:
      "Cable micro USB. Cable carga rapida. Largo 1.00 Mts. Salida de tension 2.1A Max",
    price: 569,
    stock: 25,
    images: ["/src/assets/product/10006-01.jpg"],
  },
  {
    id: 10007,
    category: 4,
    tags: ["tablet", "lenovo"],
    prodName:
      "Tablet 10.1` lenovo tab m10 2gb ram + 32gb almacenamiento lte wifi bt - no incluye fuente de alimentacion",
    description:
      "Procesador: Qualcomm® Snapdragon™ 429. Sistema operativo Android Oreo Pantalla: 10.1'' (256mm) HD (1280x800), IPS, color gamut 70%, 300 nits Memoria (opcionales)    2GB, 3GB o 4GB / LPDDR3",
    price: 81584,
    stock: 3,
    images: [
      "/src/assets/product/10007-01.jpg",
      "/src/assets/product/10007-02.jpg",
      "/src/assets/product/10007-03.jpg",
    ],
  },
  {
    id: 10008,
    category: 5,
    tags: ["relojes", "smart watch", "smart", "band", "lenovo"],
    prodName: "Smartwatch lenovo s2 pro negro",
    description:
      "Sensor de frecuencia cardíaca - Acelerómetro - Sensor de temperatura. Certificación IP67. LCD de 1.69 pulgadas con resolución 240x280p",
    price: 27000,
    stock: 10,
    images: [
      "/src/assets/product/10008-01.jpg",
      "/src/assets/product/10008-02.jpg",
    ],
  },
  {
    id: 10009,
    category: 6,
    tags: ["auriculares"],
    prodName:
      "Auricular vincha obsession c/microfono rojo 1 plug - klip xtreme",
    description:
      "Este original audífono con micrófono ostenta unidades excitadoras de 40mm que presentan una respuesta en frecuencia amplia, una distorsión baja, así como graves profundos que se escuchan con una fidelidad asombrosa. El audífono de cápsula cerrada, no solo brinda comodidad, sino que además aísla efectivamente el ruido de fondo. La cápsula de mando con micrófono prendida de un cable plano le confiere un sentido de funcionalidad y estilo. El equilibrio perfecto entre lo práctico y un sonido excepcional es lo que encontrarás en este nuevo auricular de Klip Xtreme.",
    price: 2461,
    stock: 15,
    images: ["/src/assets/product/10009-01.jpg"],
  },
  {
    id: 10010,
    category: 6,
    tags: ["auriculares", "haylou", "bluetooth"],
    prodName: "Auriculares Inalámbricos Haylou X1 Neo Negro Bluetooth",
    description:
      "Bluetooth 5.3. Alcance: unos 10 metros (sin ningún obstáculo). Tiempo de carga de los auriculares: aproximadamente 1,5 horas. Duración de la batería de los auriculares: 5 horas de reproducción",
    price: 8000,
    stock: 2,
    images: [
      "/src/assets/product/10010-01.jpg",
      "/src/assets/product/10010-02.jpg",
    ],
  },
  {
    id: 10011,
    category: 7,
    tags: ["wifi", "placa wifi", "interna", "tp-link"],
    prodName: "Placa De Red Wifi Pci-E Tp-Link Tl-Wn781nd 150mbps",
    description:
      "PCI Express. Tipo de Antena: Desmontable omnidireccional (RP-SMA)Ganancia de la Antena: 2dBi",
    price: 4500,
    stock: 1,
    images: [
      "/src/assets/product/10011-01.jpg",
      "/src/assets/product/10011-02.jpg",
    ],
  },
  {
    id: 10012,
    category: 7,
    tags: ["router", "wifi"],
    prodName: "Router wifi MW305R - 300mbps - 3 antenas fijas mercusys",
    description:
      "300Mbps de velocidad inalámbrica ideal para streaming HD, jugar online y descarga de archivos grandes. Tres antenas de 5dBi amuentan la potencia, alcance y estabilidad de la señal inalámbrica. La página web intuitiva lo guía a través del proceso de configuración en minutos",
    price: 7000,
    stock: 3,
    images: [
      "/src/assets/product/10012-01.jpg",
      "/src/assets/product/10012-02.jpg",
      "/src/assets/product/10012-03.jpg",
    ],
  },
  {
    id: 10013,
    category: 8,
    tags: ["impresora", "impresoras", "laser", "blanco y negro"],
    prodName: "Impresora Laser Pantum P2509W Wifi Monocromatica",
    description:
      "Tecnología: Láser monocromático electrofotográfico. Velocidad de impresión: 22 ppm (A4) / 23 ppm (Carta). Velocidad de primera impresión: Menos de 7,8 segundos. Volumen mensual máximo: 15.000 páginas",
    price: 65000,
    stock: 4,
    images: [
      "/src/assets/product/10013-01.jpg",
      "/src/assets/product/10013-02.jpg",
      "/src/assets/product/10013-03.jpg",
    ],
  },
  {
    id: 10014,
    category: 8,
    tags: [
      "impresora",
      "impresoras",
      "tinta",
      "color",
      "sistema continuo",
      "hp",
      "multifuncion",
    ],
    prodName: "Impresora Hp Ink Tank 315 Multifuncion Sistema Continuo",
    description: "Impresora a color, tinta, sistema contínuo. HP. Escaner. ",
    price: 80000,
    stock: 9,
    images: [
      "/src/assets/product/10014-01.jpg",
      "/src/assets/product/10014-02.jpg",
      "/src/assets/product/10014-03.jpg",
      "/src/assets/product/10014-04.jpg",
    ],
  },
  {
    id: 10015,
    category: 9,
    tags: ["teclado", "inalambrico", "kit", "teclado y mouse"],
    prodName: "Kit Teclado + Mouse Wireless Ld210a+Ld990 Eview",
    description:
      "Teclado de membrana y mouse óptico. Conexión: receptor usb nano. Distancia de operacion: 8mt, maximo hasta 10m. Frecuencia: tecnologia inalambrica 2.4 Ghz. Dimensión: teclado 449 x 168 x 28.3mm. Mouse 109 x 67 x 34 mm. Batería 4 x aaa (no incluídas). Distribucion teclado: español es",
    price: 4500,
    stock: 30,
    images: ["/src/assets/product/10015-01.jpg"],
  },
  {
    id: 10016,
    category: 9,
    tags: ["teclado", "gamer"],
    prodName:
      "Teclado Mecanico Gamer Redragon K568 Dark Avenger Negro Dust Proof Red Retroiluminado",
    description:
      "N-KEY ROLLOVER, 100 % ANTI-GHOSTING 87 TECLAS: cada tecla se controla mediante un interruptor independiente que permite que varias teclas funcionen simultáneamente sin conflicto, lo que le brinda una respuesta precisa con alta velocidad y experimenta un nuevo nivel de juego y escritura . DISEÑO ERGONÓMICO, DURADERO E IMPERMEABLE: este teclado está hecho de material ABS de primera calidad, con textura de acabado mate, resistente y lo suficientemente robusto como para protegerlo contra rasguños. Y las teclas escalonadas en sí mismas son cóncavas para adaptarse a la curvatura natural de las yemas de los dedos, lo que genera una sensación mucho más cómoda al presionar cada tecla",
    price: 15000,
    stock: 12,
    images: [
      "/src/assets/product/10016-01.jpg",
      "/src/assets/product/10016-02.jpg",
      "/src/assets/product/10016-03.jpg",
      "/src/assets/product/10016-04.jpg",
    ],
  },
];
 */

const CrudApp = () => {
  /* Apertura y Cierre Ventanas Modales */
  const [isOpenModal, openModal, closeModal] = useModal(false);

  // Esta var de estado envía los datos del producto mediante props al componente FigureModal que se abre como una ventana modal
  const [data, setData] = useState({});

  function openOneModal(id) {
    setData({});
    product.forEach((el) => {
      if (id === el.id) {
        setData({
          id: el.id,
          prodName: el.prodName,
          description: el.description,
          price: el.price,
          image: el.images[0],
        });
      }
    });
    openModal();
  }

  const { openForm, openFormEdit, openTable, openCards } =
    useContext(NavContext);

  const [db, setDb] = useState(product);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (form) => {
    // Nuevo id: se recorre la db y se busca el sigiente número
    let idMayor = 1;
    db.forEach((el) => {
      if (el.id >= idMayor) {
        idMayor = el.id;
      }
    });
    // console.log(form);
    idMayor++;
    form.id = idMayor;
    // Tomamos la db y le agregamos data
    setDb([...db, form]);
    console.log(db);
  };

  const updateData = (form) => {
    // Busco en la base (db) el id del dato a modificar que viene en "form" (form.id, cuando coincida que le asigne todo lo que viene en "form" a la var newData y la guarde en la base.)
    let newData = db.map((el) => (el.id === form.id ? form : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(`Confirmar eliminación`);

    if (isDelete) {
      // en el siguiente newData filtro la base para guardar todos los registros menos el que tiene el id que quiero eliminar.
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  /* CANTIDAD de unidades para agregar al carrito, dentro de las Modales */
  const [cantidad, setCantidad] = useState(1);

  return (
    <>
      {openForm && (
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      )}
      {openFormEdit && (
        <CrudFormEdit
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      )}
      {openTable && (
        <CrudTable
          key={db.id}
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          openModal={openOneModal}
        />
      )}
      {openCards && (
        <CrudCards
          key={db.id}
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          openModal={openOneModal}
        />
      )}

      {/*  - - Modals - - */}
      {isOpenModal && (
        <FigureModalAdmin
          key={data.id}
          data={data}
          isOpenModal={isOpenModal}
          closeModal={closeModal}
          cantidad={cantidad}
          /*  sumarCantidad={sumarCantidad}
          restarCantidad={restarCantidad}
          agregarCarrito={agregarCarrito} */
        />
      )}
    </>
  );
};

export default CrudApp;
