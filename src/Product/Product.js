import './Product.css';

function Product({id, name, description, category, price, quantity, image, weight, model, updateCart}) {
  return (
    <div className="product" key={id}>
      <h3>Product Name: {name}</h3>
      <img src={image} alt={`Image of ${name}`}/>
      <p><b>Description:</b> {description}</p>
      <p><b>Category: </b>{category}</p>
      <p><b>Price: </b>{price}</p>
      <p><b>Quantity: </b>{quantity}</p>
      <p><b>Weight: </b>{weight}</p>
      <p><b>Model: </b>{model}</p>
      <button onClick={() => updateCart(id, price)} >Add To Cart</button>
    </div>
  )
}

export default Product;