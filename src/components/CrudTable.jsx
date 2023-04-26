import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data }) => {
  return (
    <>
      <h3> [ - Tabla de Datos - ]</h3>
      <table>
        <thead>
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
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3"> - Sin Datos - </td>
            </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} datosElemento={el} />)
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
