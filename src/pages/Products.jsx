import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

import Swal from 'sweetalert2';

function Products() {
  const [products, SetProducts] = useState([]);
  const api_url = 'http://localhost:3001/products';

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = () => {
    fetch(api_url)
      .then((resp) => resp.json())
      .then((data) => SetProducts(data));
  };

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are You Sure To Delete ${product.title} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(api_url + '/' + `${product.id}`, {
          method: 'DELETE',
        })
          .then((resp) => resp.json())
          .then(() => getAllProduct());
      }
    });
  };

  return (
    <>
      <h1>Products Page</h1>

      <Link className="btn btn-success mt-5" to="add">
        Add New Product
      </Link>

      <table className="table table-striped products-table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description.slice(0, 20)}...</td>
              <td>{product.price}$</td>
              <td>
                <button
                  onClick={() => deleteProduct(product)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-info btn-sm"
                >
                  View
                </Link>
                <button className="btn btn-primary btn-sm">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
