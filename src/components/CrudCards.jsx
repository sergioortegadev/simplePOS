import React from "react";
import CrudCardRow from "./CrudCardRow";

const CrudCard = ({ data, setDataToEdit, deleteData }) => {
  return (
    <>
      <h3> [ - Cards con toda la Base - ]</h3>
      <div className="cards-conteneiner">
        {data.length === 0 ? (
          <div className="sin-datos">
            <h4> - Sin Datos - </h4>
          </div>
        ) : (
          data.map((el) => (
            <CrudCardRow
              key={el.id}
              datosElemento={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          ))
        )}
      </div>
    </>
  );
};

export default CrudCard;
