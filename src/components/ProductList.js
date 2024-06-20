import React , { useState } from 'react'

export default function  ProductList()
 {
  const [products] = useState([
    {
    id: 101,
    prdname: "Bottle",
    price: 500,
    image: "./images/pharma/bottle.jpg"
  },
  {
    id: 102,
    prdname: "Tralley",
    price: 340,
    image: "./images/pharma/tralley.jpg"
  },
  {
    id: 103,
    prdname: "BP Reader",
    price: 190,
    image: "./images/pharma/readingmachine.jfif"
  },
  {
    id: 104,
    prdname: "OIP",
    price: 400,
    image: "./images/pharma/OIP.jfif"
  }
]);
  return (
    <div>
      <h1>Product List</h1>
      <div className="container">
        <div className="row">
          {products && products.map((product) => (
            <div className="col-md-3">
              <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.prdname}</h5>
                  <p className="card-text">Price: {product.price}</p>
                  <a href="/" className="btn btn-primary">Add to Cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

//export default ProductList
