import { useEffect, useState } from 'react';
import { useCartContext } from "../context/CartContext"
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../../asyncMock";

const CartContainer = () => {

    const { productsCart, addToCart } = useCartContext()



    return (
        <div className="contenedor principal">
            <h1 class=" principal__heading">CARRITO DE COMPRAS</h1>
            <ItemList products={productsCart} loading={loading} />
            {console.log(productsCart)}
        </div>
    )
}
export default CartContainer