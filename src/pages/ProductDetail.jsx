import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productID } = useParams();
  const api_url = 'http://localhost:3001/products';
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(api_url + '/' + `${productID}`)
      .then((resp) => resp.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <h1>ProductDetail # {productID}</h1>

      {product && (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}$</p>
        </>
      )}
    </>
  );
}

export default ProductDetail;
