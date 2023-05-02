import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <>
      <h3> [ - Base de Datos Completa - ]</h3>
      <table className="table">
        {/* <thead>
          <tr>
            <th>Category</th>
            <th>Tags</th>
            <th>Nombre Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock - Existencias</th>
            <th>Foto</th>
            <th>[Acciones]</th>
          </tr>
        </thead> */}
        <tbody className="cards-conteneiner">
          {data.length === 0 ? (
            <tr>
              <td colSpan="3"> - Sin Datos - </td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                datosElemento={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
