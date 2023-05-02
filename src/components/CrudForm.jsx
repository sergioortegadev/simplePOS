import { useState, useEffect } from "react";
const initialForm = {
  id: null,
  category: "",
  tags: "",
  prodName: "",
  description: "",
  price: "",
  stock: "",
  images: "",
};

// eslint-disable-next-line react/prop-types
const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else setForm(initialForm);
  }, [dataToEdit]);

  const handleChange = (e) => {
    // Actualizamos la var de estado "form", tomando lo que tenía, y con spread operator agregamos lo que viene en cada input.
    //En los input de texto esto es suficiente. Para números, arreglos y otros, hay que usar el siguiente switch: para ajustar el tipo de dato antes de pasarlo a la var de estado.
    switch (e.target.name) {
      case "category":
        setForm({
          ...form,
          [e.target.name]: parseInt(e.target.value),
        });
        break;

      case "stock":
        setForm({
          ...form,
          [e.target.name]: parseInt(e.target.value),
        });
        break;

      case "price":
        setForm({
          ...form,
          [e.target.name]: parseFloat(e.target.value),
        });
        break;

      case "tags":
        setForm({
          ...form,
          [e.target.name]: e.target.value.split(","),
        });
        break;

      case "images":
        setForm({
          ...form,
          [e.target.name]: e.target.value.split(","),
        });
        break;

      default:
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.category ||
      !form.tags ||
      !form.prodName ||
      !form.description ||
      !form.price ||
      !form.stock
    ) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
      console.log(form);
    } else {
      updateData(form);
    }

    handleReset();
  };
  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {/* <input
          type="number"
          name="id"
          placeholder="id (5 cifras)"
          onChange={handleChange}
          value={form.id}
        /> */}
        <input
          type="number"
          name="category"
          placeholder="Número de categoría"
          onChange={handleChange}
          value={form.category}
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags separados por coma"
          onChange={handleChange}
          value={form.tags}
        />
        <input
          type="text"
          name="prodName"
          placeholder="Título de la publicación. Nombre producto"
          onChange={handleChange}
          value={form.prodName}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción del producto"
          onChange={handleChange}
          value={form.description}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          onChange={handleChange}
          value={form.price}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock - Existencias"
          onChange={handleChange}
          value={form.stock}
        />
        <input
          type="text"
          name="images"
          placeholder="[''/src/assets/product/id-01.jpg'']"
          onChange={handleChange}
          value={form.images}
        />
        <div className="input-btn-div">
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpiar" onClick={handleReset} />
        </div>
      </form>
    </>
  );
};

export default CrudForm;
