import { useState } from 'react'
import './App.css'

function AppTest() {
  const [count, setCount] = useState(0)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 5.99,
    }
  ]

  const listItems = products.map((product) => (
    <li key={product.id}>
      {product.name} - ${product.price}
    </li>
  ))

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </section>
      <section id="products">
        <ul>
          {listItems}
        </ul>
      </section>
      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default AppTest
