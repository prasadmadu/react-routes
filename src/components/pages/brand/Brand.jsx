import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { productDetails, categoryOptions } from '../../../data/data';

const Brand = () => {
  const {id} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filter the productDetails array based on the id parameter
    const filteredProducts = productDetails.filter((product) => product.brand.id === id);
    setProducts(filteredProducts);
  }, [id]);

  console.log(products)
  return (
    <div>Brand: {id}
    {categoryOptions.map((category) => (
        <div key={category.id}>
          <Link to={`/brand/${id}/category/${category.id}`}>{category.name}</Link>
        </div>
      ))}
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

export default Brand