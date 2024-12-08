import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [filter, setFilter] = useState('all-products')

  // const shopareaStyle = {
  //   height: '90%',
  //   width: '100%',
  //   paddingLeft: '10%',
  //   paddingRight: '10%',
  //   boxSizing: 'border-box',
    
  // }


  return (
    <>
    
      <Navbar />
      <div id="shoparea">
        <div id="shopHeader" style={{paddingTop: '50px'}}>
          <h1 style={{marginTop: 0}}>Shop</h1>
          <span id='filter' >
            <p>{"Product"}</p>
            <select name="selectproduct" id="select_product">
              <option value="all-products">All</option>
              <option value="none-products">None</option>
            </select>
          </span>
        </div>
        <div id="product_display">

        </div>
      </div>
    

    </>
  )
}

export default App
