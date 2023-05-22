import { useEffect, useState } from 'react';
import { useCartContext } from "../context/CartContext"
import { useProducts } from "../context/ProductsContext"
import ItemList from "../ItemList/ItemList";


const CartContainer = () => {

    const { productsCart, addToCart } = useCartContext()
    const { loading } = useProducts()
    console.log(productsCart)

    return (
        <div className="contenedor principal">
            <h1 class=" principal__heading">CARRITO DE COMPRAS</h1>
            <ItemList products={productsCart} loading={loading} />
        </div>
    )
}
export default CartContainer