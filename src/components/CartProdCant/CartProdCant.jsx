import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";

const CartProdCant = ({ product, stockProd, setStockProd, cantidad, valor, setCantidad }) => {
    const { id } = product
    const { removeFromCart } = useCartContext()
    const {setCartPrice} = useCartContext()
    const [mostrarAgregar, setMostrarAgregar] = useState(false)


    // localStorage
    const pushLocalStorage = (keyName) => {
        // Igualo mi local a la cantidad actual
        const productQuantities = JSON.parse(localStorage.getItem(keyName))
        productQuantities[id] = cantidad
        // Guardo la cantidad actualizada
        const updateData = JSON.stringify(productQuantities)
        localStorage.setItem(keyName, updateData)
    }
    useEffect(() => {
        pushLocalStorage('productQuantitiesCart')
    }, [cantidad])

    useEffect(() => {
        const productQuantities = JSON.parse(localStorage.getItem('productQuantitiesCart'))
        setStockProd((prevStockProd) => prevStockProd - productQuantities[id] || prevStockProd)

    },[])
    
    useEffect(() => {
        const productQuantities = JSON.parse(localStorage.getItem('productQuantitiesCart'))
        setCartPrice((prev) => prev + (valor * productQuantities[id]) || prev)
    },[valor])

    function agregar() {
        if (stockProd < 1) {
            alert('No hay mas stock')
        } else {
            setCantidad((prevCantidad) => prevCantidad + 1)
            setStockProd((prevStockProd) => (prevStockProd - 1))
            setCartPrice((prev) => prev + valor)
        }
    }

    function eliminar() {
        if(cantidad === 1){
            setCantidad((prevCantidad) => prevCantidad - 1)
            setStockProd((prevStockProd) => (prevStockProd + 1))
            setCartPrice((prev) => prev - valor)
            removeFromCart(product)
        }else{
            setCantidad((prevCantidad) => prevCantidad - 1)
            setStockProd((prevStockProd) => (prevStockProd + 1))
            setCartPrice((prev) => prev - valor)
        }
    }

    function handleEliminarCart() {
        setCartPrice((prev) => prev - (valor * cantidad))
        removeFromCart(product)
        // setCantidad(0)
    }

    return(
        <>
            {cantidad === 0 ? (
            <button onClick={agregar} className="card__boton">
                Agregar
            </button>
        ) : (<>
            <div className="mostrar">
                <p className="mostrar__texto">{cantidad}</p>
                <button className="mostrar__mas" onClick={agregar}>
                    +
                </button>
                <button className="mostrar__menos" onClick={eliminar}>
                    -
                </button>
            </div>
            <button onClick={handleEliminarCart} className="card__boton">
                Eliminar
            </button>
        </>
        )}
        </>
    )
}
export default CartProdCant