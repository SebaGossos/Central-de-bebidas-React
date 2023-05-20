import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { useState, useEffect } from 'react'
const CartWidget = () => {
    const { productsCart } = useCartContext()
    const [totalPrductsCart, setTotalProductsCart] = useState(productsCart.length)

    useEffect(() => {
        setTotalProductsCart(productsCart.length)
    }, [productsCart])

    // let totalProductsCart = cart.length
    return (
        <p to='/cart' className='registro__carrito'>
            {totalPrductsCart} 🛒
        </p>
    )
}
export default CartWidget