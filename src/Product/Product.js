import './Product.css';

function Product({id, name, description, category, price, quantity, image, weight, model, updateCart}) {
  return (
    <div className="product" key={id}>
      <p>Product Name: {name}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <img src={image} alt={`Image of ${name}`}/>
      <p>Weight: {weight}</p>
      <p>Model: {model}</p>
      <button onClick={() => updateCart(id, price)} >Add To Cart</button>
    </div>
  )
}

export default Product;