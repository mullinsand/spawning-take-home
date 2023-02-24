import './App.css';
import Data from "./products.json"

function App() {
  return (
    <div>
      {
        Data.map((product) => {
          return (
          <div className="product">
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
        })
      }
    </div>
  )
}

export default App;
