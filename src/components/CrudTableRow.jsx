const CrudTableRow = ({ datosElemento }) => {
  return (
    <>
      <tr>
        <td>{datosElemento.category}</td>
        <td>{datosElemento.tags}</td>
        <td>{datosElemento.prodName}</td>
        <td>{datosElemento.description}</td>
        <td>{datosElemento.price}</td>
        <td>{datosElemento.stock}</td>
        <td>
          <img src={datosElemento.images[0]} alt={datosElemento.prodName} />
        </td>
        <td>
          <button>✏️ Editar</button>
          <button>❌ Eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default CrudTableRow;
