import { useEffect } from "react";
import { useCartContext } from "../context/CartContext"
import { useProducts } from "../context/ProductsContext"
import ItemList from "../ItemList/ItemList";


const CartContainer = () => {

    const { productsCart, renderOptions, setRenderOptions} = useCartContext()
    const { loading } = useProducts()
    useEffect(() => setRenderOptions(true), [])

    return (
        <div className="contenedor principal">
            <h1 className=" principal__heading">CARRITO DE COMPRAS</h1>
            <ItemList products={productsCart} renderOptions={renderOptions} loading={loading} />
        </div>
    )
}
export default CartContainer