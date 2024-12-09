import { useEffect, useState } from 'react';
import Navbar from './Navbar'
import { useCart, useUpdateCart } from './components/context/CartContext'

const Cart = () => {
    const cart = useCart();
    console.log(cart)
    const updateCart = useUpdateCart();
    
    const [products, setProducts] = useState([])
    console.log(products)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log("running effect...")
        const fetchProducts = async () => {
            setLoading(true)
            setError(null)
            try {
                const fetchPromises = Object.entries(cart).map(([productId, quantity]) =>
                    fetch(`https://fakestoreapi.com/products/${productId}`)
                        .then((response) => response.json())
                        .then((data) => ({
                            ...data,
                            quantity,
                        }))
                );  
                const productsData = await Promise.all(fetchPromises);
                setProducts(productsData);
            } catch (err) {
                console.error("Failed Fetching cart Products:", err);
                setError("Failed to fetch products, Please try again")
            } finally {
                setLoading(false)
            }
        };

        if(Object.keys(cart).length > 0) {
            fetchProducts()
        } else {
            setProducts([])
        }
    }, [cart])

    function handleProductDelete(event) {
        console.log(event.target.id)
        updateCart((prevCart) => {
            const newCart = {...prevCart}
            delete newCart[event.target.id]
            return newCart
        })
    }

    if(loading){
        return (
            <div id="cart">
                <Navbar />
                <div id="cart_details">
                    <div id="cart_products">
                        {"Loading..."}      
                    </div>
                    <div id="cart_checkout"></div>
                </div>
            </div>
        )
    }

    if(error){
        return (

            <div id="cart">
                <Navbar />
                <div id="cart_details">
                    <div id="cart_products">
                        {error}      
                    </div>
                    <div id="cart_checkout"></div>
                </div>
            </div>
        )
    }

    if(products.length === 0){
        return (
            <div id="cart">
                <Navbar />
                <div id="cart_details">
                    <div id="cart_products">
                        {"Cart Empty"}      
                    </div>
                    <div id="cart_checkout"></div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div id="cart">
                <Navbar />
                <div id="cart_details">
                    <div id="cart_products">

                        {products.map((product) => {
                            return (
                                <div id={`product_cart_${product.id}`} key={product.id} className='cart_product_card'>
                                    <div className="cart_product_img">
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className="cart_product_details">
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="cart_product_controls">
                                        <span className="cart_product_price">$ {product.price}</span>
                                        <span className="cart_product_amount">{product.quantity}</span>
                                        <button className="cart_product_delete" id={product.id} onClick={handleProductDelete}>❌</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div id="cart_checkout"></div>
                </div>
            </div>

        </>
    )
}

export default Cart