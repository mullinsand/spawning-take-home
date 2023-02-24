import './ProductIndex.css';
import Product from "../Product/Product"
import Data from "../products.json"

function ProductIndex() {
  const productList = Data.map((product) => {
    return (
      <Product product={product} />
    )
  })
  
  return (
    <div>
      {productList}
    </div>
  )
}

export default ProductIndex;