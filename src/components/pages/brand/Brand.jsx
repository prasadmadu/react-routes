import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productDetails } from '../../../data/data';

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