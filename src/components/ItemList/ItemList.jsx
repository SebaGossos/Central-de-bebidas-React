import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Item from "../Item/Item"
import { useCartContext } from "../context/CartContext";
import CartNotification from "../CartNotification/CartNotification";

const ItemList = ({products, routeImg, loading, renderOptions}) => {
    const [dolarPrice, setDolarPrice] = useState(0)
    const [renderElements, setRenderElements] = useState(null)
    const [mostrarAgregar, setMostrarAgregar] = useState(false)
    const {cartPrice, setCartPrice, setRenderOptions, setProductCart} = useCartContext()
    
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
    useEffect(() => {
        apiDolar() 
    },[dolarPrice])
    
    console.log('estoy pasando por itemList', cartPrice)

    // si no tengo productos en mi carrito, no muestro la seccion de comprar
    useEffect(() => {
        if(!products.length){
            setRenderElements(
                <div className="contenedor finalizar">
                    <h2 className="finalizar__titulo">Carrito vacio</h2>
                    <Link to="/" className="finalizar__boton">Volver al menu</Link>
                </div>
            )
        }else{
            setRenderElements(
                <div className="contenedor finalizar">
                    <h2 className="finalizar__titulo">Total a pagar: ${cartPrice}</h2>
                    <button className="finalizar__boton" onClick={handleVoid}>Vaciar Carrito</button>
                    <button className="finalizar__boton" onClick={handleBuyer}>Comprar</button>
                </div>
            )
        }              
    },[renderOptions, cartPrice])


    const renderCart = (product) => {
        return <CartItem key={product.id} product={product} dolarPrice={dolarPrice} />
    }
    const renderItemList = (product) => {
        return <Item key={product.id} routeImg={routeImg} dolarPrice={dolarPrice} product={product} />
    }

    const handleVoid = (e) => {
        localStorage.setItem('productQuantitiesCart', JSON.stringify({}))
        setProductCart([])
        setCartPrice(0)
        setRenderElements(
            <div className="contenedor finalizar">
                <h2 className="finalizar__titulo">Carrito vacio</h2>
                <Link to="/" className="finalizar__boton">Volver al menu</Link>
            </div>
        )
    }
    const handleBuyer = (e) => {
        localStorage.setItem('productQuantitiesCart', JSON.stringify({}))
        setProductCart([])
        setCartPrice(0)
        setRenderElements(
            <div className="contenedor finalizar">
                <h2 className="finalizar__titulo">Carrito vacio</h2>
                <Link to="/" className="finalizar__boton">Volver al menu</Link>
            </div>
        )
        setMostrarAgregar(true)
    }

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
            {renderOptions && renderElements}
            {mostrarAgregar && <CartNotification text={"Compra realizada con exito!"} setMostrarAgregar={setMostrarAgregar} />}
        </>
    )
}
export default ItemList;