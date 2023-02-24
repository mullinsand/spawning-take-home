import './ProductIndex.css';
import Product from "../Product/Product"
import Data from "../products.json"

function ProductIndex() {
  const productList = Data.map(product => {
    return (
      <Product 
        id={product.id}
        name={product.name}
        description={product.description}
        category={product.category}
        price={product.price}
        quantity={product.quantity}
        image={product.image}
        weight={product.weight}
        model={product.model} />
    )
  })
  
  return (
    <div>
      {productList}
    </div>
  )
}

export default ProductIndex;