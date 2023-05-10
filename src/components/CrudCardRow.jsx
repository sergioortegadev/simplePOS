const CrudTableRow = ({ datosElemento, setDataToEdit, deleteData }) => {
  let { id, category, tags, prodName, description, price, stock } =
    datosElemento;
  return (
    <div className="figure-card-row">
      <div className="foto-card">
        <img src={datosElemento.images[0]} alt={datosElemento.prodName} />
      </div>
      <div className="datos-div">
        <h2 className="datos-precio">{"$ " + datosElemento.price}</h2>
        <h3 className="datos-nombre">{datosElemento.prodName}</h3>
        {/*   <td>{datosElemento.description}</td>
        <td>{datosElemento.tags}</td>
        <td>{datosElemento.category}</td>
        <td>{datosElemento.stock}</td> */}
        <div className="datos-btn-td">
          <button onClick={() => setDataToEdit(datosElemento)}>
            ✏️ Editar
          </button>
          <button onClick={() => deleteData(id)}>❌ Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default CrudTableRow;
