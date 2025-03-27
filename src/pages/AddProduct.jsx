import React, { useState } from 'react';

function AddProduct() {
  const [title, SetTitle] = useState('');
  const [description, SetDescription] = useState('');
  const [price, SetPrice] = useState(0);

  const api_url = 'http://localhost:3001/products';

  const formSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      price,
    };

    fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((c) => console.log(c));
  };

  return (
    <>
      <div>AddProduct</div>
      <form className="mt-5" onSubmit={formSubmit}>
        <div className="mb-3 ">
          <label htmlFor="inputProductTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputProductTitle"
            placeholder="Product Title"
            aria-describedby="productTitle"
            onChange={(e) => {
              SetTitle(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="inputDescription"
            placeholder="Product Description"
            rows="3"
            onChange={(e) => {
              SetDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            onChange={(e) => {
              SetPrice(e.target.value);
            }}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
