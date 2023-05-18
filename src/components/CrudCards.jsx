import CrudCardRow from "./CrudCardRow";
import CrudHeader from "./CrudHeader";

const CrudCard = ({ data, setDataToEdit, deleteData }) => {
  return (
    <>
      <CrudHeader />
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
