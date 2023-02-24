import './Product.css';

function Product(product) {
  return (
    <div className="product" key={product.id} >
      <p>Product Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <img src={product.image} alt={`Image of ${product.name}`}/>
      <p>Weight: {product.weight}</p>
      <p>Model: {product.model}</p>
    </div>
  )
}

export default Product;