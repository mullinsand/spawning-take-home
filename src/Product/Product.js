import './Product.css';

function Product({product, updateCart}) {
  return (
    <div className="product" key={product.id}>
      <h3>Product Name: {product.name}</h3>
      <img src={product.image} alt={`Image of ${product.name}`}/>
      <p><b>Description:</b> {product.description}</p>
      <p><b>Category: </b>{product.category}</p>
      <p><b>Price: </b>{product.price}</p>
      <p><b>Quantity: </b>{product.quantity}</p>
      <p><b>Weight: </b>{product.weight}</p>
      <p><b>Model: </b>{product.model}</p>
      <button onClick={() => updateCart(product.id, product.price)} >Add To Cart</button>
    </div>
  )
}

export default Product;