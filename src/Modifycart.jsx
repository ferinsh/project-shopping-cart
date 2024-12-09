import { useCart, useUpdateCart } from "./components/context/CartContext"

const Modifycart = (props) => {
    const {id} = props
    

    const cart = useCart()
    // console.log(cart)
    const updateCart = useUpdateCart()

    const currentQuantity = cart[id] || 0;

    function handleProductRemove(event) {
        // console.log(event.target)
        if(currentQuantity > 0){
            updateCart((prevCart) => {
                const newCart = {...prevCart};
                if(newCart[id] > 1){
                    newCart[id] -= 1
                }else{
                    delete newCart[id]
                }
                return newCart
            })
        }
    }

    function handleProductAdd(event){
        // console.log(event.target.id)
        updateCart((prevCart) => {
            const newCart = {...prevCart};
            newCart[id] = (newCart[id] || 0) + 1;
            return newCart;
        });
    }

    function handleProductChange(event){
        console.log(event.target.value)
    }

    return (
        <div className="addtocart_btn" >
            <button onClick={handleProductRemove} id={id}>-</button>
            <input type="number" value={currentQuantity} className="addtocart_input" id={id} onChange={handleProductChange} disabled/>
            <button onClick={handleProductAdd} id={id}>+</button>
        </div>
    )
}

export default Modifycart