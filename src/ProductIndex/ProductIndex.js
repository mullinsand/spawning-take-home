import './ProductIndex.css';
import Product from "../Product/Product"
import Data from "../products.json"

function ProductIndex({searchQuery, updateCart}) {
  const productList = Data.filter((product) => {
    if (searchQuery === "") {
      return product;
    } else if (product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return product;
    }
  }).map(product => {
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
        model={product.model}
        updateCart={updateCart} />
    )
  })
  
  return (
    <div className='products-container'>
      {productList}
    </div>
  )
}

export default ProductIndex;