import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Modifycart from "./Modifycart";

const ProductDisplay = () => {
    const { category } = useParams();
    const [products, setProducts ] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                setError(null)
                if(category === "all"){
                    const response = await fetch("https://fakestoreapi.com/products")
                    if(!response.ok){
                        throw new Error('Failed to fetch promise');
                    }                    
                    const data = await response.json()
                    setProducts(data)
                }
                else{
                    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
                    const data = await response.json()
                    setProducts(data)
                }
            } catch (err) {
                console.error("Error fetching files: ", err);
                setError("Failed to load Products, Please try again later");
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [category])

    if(loading) {
        return (
            <p style={{color: 'black'}}>Loading...</p>
        )
    }

    if(error) {
        return(
            <p style={{color: 'black'}}>{error}</p>
        )
    }

    if(products.length === 0){
        return(
            <p style={{color: 'black'}}>Error Loading Products</p>
        )
    }

    return (
        <div id="product_display">
            {products.map((product) => {
                return (
                    <div id={`product_card_${product.id}`} key={product.id} className="product_card">
                        <div className="product_img">
                            <img src={product.image} alt="" />
                        </div>
                        <h4 style={{margin: 0}} className="product_title">{product.title}</h4>
                        <section className="product_price">$ {product.price}</section>
                        <section className='product_rating'>
                            <span className="product_rating_stars">
                            {Array.from({length: Math.floor(product.rating.rate) }, (_, index) => (
                                '⭐'
                            ))}</span>
                            <span className="product_rating_count">({product.rating.count})</span>
                        </section>                        
                        <Modifycart id={product.id}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductDisplay