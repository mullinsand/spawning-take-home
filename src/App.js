import './App.css';
import Data from "./products.json"

function App() {
  return (
    <div>
      {
        Data.map((product) => {
          return (
          <div className="product">
            <p>{product.name}</p>
          </div>
          )
        })
      }
    </div>
  )
}

export default App;
