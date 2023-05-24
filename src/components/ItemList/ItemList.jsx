import CartItem from "../CartItem/CartItem";
import Item from "../Item/Item"
import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import { render } from "react-dom";

const ItemList = ({products, routeImg, loading, renderOptions}) => {
    const [dolarPrice, setDolarPrice] = useState(0)
    const {cartPrice} = useCartContext()
    
    const apiDolar = async() => {
        try{
            let response = await fetch("https://criptoya.com/api/dolar")
            let data = await response.json()

            // evitar Re-renderse cuando el dolarPrice sea igual al dolar actual
            if(data.blue !== dolarPrice){
                setDolarPrice(data.blue)             
            }
        }
        catch(error){
            console.log(error)
        }
    }
    console.log('estoy pasando por itemList')

    useEffect(() => {
        apiDolar() 
    },[dolarPrice])

    const renderCart = (product) => {
        return <CartItem key={product.id} product={product} dolarPrice={dolarPrice} />
    }
    const renderItemList = (product) => {
        return <Item key={product.id} routeImg={routeImg} dolarPrice={dolarPrice} product={product} />
    }
    console.log(renderOptions)
    return (
        <>
            <ul className="contenedor seccion cards">
                {loading ? (
                    <h1>Cargando...</h1>
                ) : (
                    products.map(product => (
                        renderOptions ? renderCart(product) : renderItemList(product)
                    ))
                )}
            </ul>
            {renderOptions && <h2>Total a pagar: ${cartPrice}</h2>}
        </>
    )
}
export default ItemList;