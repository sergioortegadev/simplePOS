import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <>
      <h3> [ - Tabla con Base de Datos Completa - ]</h3>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>{/* Foto */}</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Nombre Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>{/* Acciones */}</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr className="sin-datos">
              <td colSpan="8"> - Sin Datos - </td>
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
