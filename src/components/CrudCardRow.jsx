import { useContext } from "react";
import NavContext from "../context/NavContext";

const CrudTableRow = ({
  datosElemento,
  setDataToEdit,
  deleteData,
  openModal,
}) => {
  let { id, category, tags, prodName, description, price, stock } =
    datosElemento;

  const { openNav } = useContext(NavContext);
  return (
    <figure className="figure-card-row">
      <div className="foto-card" onClick={(e) => openModal(id)}>
        {datosElemento.images[0] ? (
          <img src={datosElemento.images[0]} alt={datosElemento.prodName} />
        ) : (
          <img src="../src/assets/no-fotos.png" alt="" />
        )}
      </div>
      <div className="datos-div">
        <h3 className="datos-nombre" onClick={(e) => openModal(id)}>
          {datosElemento.prodName}
        </h3>
        <h2 className="datos-precio" onClick={(e) => openModal(id)}>
          {"$ " + datosElemento.price}
        </h2>
        {/*   <td>{datosElemento.description}</td>
        <td>{datosElemento.tags}</td>
        <td>{datosElemento.category}</td>
        <td>{datosElemento.stock}</td> */}
        <div className="datos-btn-td">
          <button
            onClick={() => {
              setDataToEdit(datosElemento);
              openNav("edit");
            }}
          >
            ✏️
          </button>
          <button onClick={() => deleteData(id)}>❌</button>
        </div>
      </div>
    </figure>
  );
};

export default CrudTableRow;
