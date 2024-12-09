import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import ProductDisplay from './ProductDisplay'


function App() {
  const [category, setCategory] = useState('all')
  
  const navigate = useNavigate()
  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
    navigate(`/shop/${event.target.value}`)
  }

  return (
    <>
      <Navbar />
      <div id="shoparea">
        <div id="shopHeader" style={{paddingTop: '50px'}}>
          <h1 style={{marginTop: 0}}>Shop</h1>
          <span id='filter' >
            <p>{"Product"}</p>
            <select name="selectproduct" id="select_product" onChange={handleCategoryChange} value={category}>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Mens Clothing</option>
              <option value="women's clothing">Womens Clothing</option>

            </select>
          </span>
        </div>
        <ProductDisplay />
      </div>
    

    </>
  )
}

export default App
