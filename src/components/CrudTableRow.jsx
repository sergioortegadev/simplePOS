const CrudTableRow = ({ datosElemento, setDataToEdit, deleteData }) => {
  let { id, category, tags, prodName, description, price, stock } =
    datosElemento;
  return (
    <>
      <tr className="figure-table-row">
        <td className="foto-td">
          <img src={datosElemento.images[0]} alt={datosElemento.prodName} />
        </td>
        <td>{datosElemento.category}</td>
        {/* <td>{datosElemento.tags}</td> */}
        <td className="nombre-td">{datosElemento.prodName}</td>
        {/* <td>{datosElemento.description}</td> */}
        <td className="precio-td">{"$ " + datosElemento.price}</td>
        <td>{datosElemento.stock}</td>
        <td className="btn-td">
          <button onClick={() => setDataToEdit(datosElemento)}>✏️</button>
          <button onClick={() => deleteData(id)}>❌ </button>
        </td>
      </tr>
    </>
  );
};

export default CrudTableRow;
