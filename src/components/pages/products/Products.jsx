import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productDetails } from '../../../data/data';

const Products = () => {
  const { brandId, categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filter the productDetails array based on the brandId and categoryId parameters
    const filteredProducts = productDetails.filter(
      (product) => product.brand.id === brandId && product.category.id === categoryId
    );
    setProducts(filteredProducts);
  }, [brandId, categoryId]);
  console.log(productDetails)
  return (
    <div>
    <h2>Brand: {brandId}</h2>
    <h2>Category: {categoryId}</h2>
    {products.map((product) => (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} />
        <h4>Price: {product.price}</h4>
        <p>{product.brand.name}, {product.category.name}</p>
      </div>
    ))}
  </div>
  )
}

export default Products