import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onHandleUpdate }) => {
  const [inputValue, setInputValue] = useState({});
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const { id } = useParams();
  const crtProduct = products.find((item) => item.id == id);
  const onUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...crtProduct, ...inputValue };
    onHandleUpdate(updateData);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={onUpdate}>
          <input
            type="text"
            placeholder="name"
            name="name"
            onInput={onHandleChange}
            defaultValue={crtProduct?.name}
          />

          <input
            type="text"
            placeholder="price"
            name="price"
            onInput={onHandleChange}
            defaultValue={crtProduct?.price}
          />

          <input
            type="text"
            placeholder="description"
            name="description"
            onInput={onHandleChange}
            defaultValue={crtProduct?.description}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;
