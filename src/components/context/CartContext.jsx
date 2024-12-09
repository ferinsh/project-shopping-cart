
import { useState, useContext, createContext } from 'react'

const CartContext = createContext();
const UpdateCartContext = createContext();

export const useCart = () => {
    return useContext(CartContext)
}

export const useUpdateCart = () => {
    return useContext(UpdateCartContext)
}

export const CartProvider = ({value, children}) => {
    const [cart, setCart] = useState({});
    return (
        <CartContext.Provider value={cart}>
            <UpdateCartContext.Provider value={setCart}>
                {children}
            </UpdateCartContext.Provider>
        </CartContext.Provider>
    )
}

