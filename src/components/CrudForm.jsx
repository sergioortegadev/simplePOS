import React, { useState, useEffect } from "react";
const initialForm = {
  id: undefined,
  category: undefined,
  tags: "",
  prodName: "",
  description: "",
  price: undefined,
  stock: undefined,
  images: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (
    //   !form.category ||
    //   !form.tags ||
    //   !form.prodName ||
    //   !form.description ||
    //   !form.price ||
    //   !form.stock
    // ) {
    //   alert("Datos incompletos");
    //   return;
    // }

    if (form.id === undefined) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <>
      <h3>Ingresar Productos</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="id"
          placeholder="id (5 cifras)"
          onChange={handleChange}
          value={form.id}
        />
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
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </>
  );
};

export default CrudForm;
