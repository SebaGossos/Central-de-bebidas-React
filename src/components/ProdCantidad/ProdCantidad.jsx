import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import CartNotification from "../CartNotification/CartNotification";


const ProdCantidad = ({ product, stockProd, setStockProd }) => {
    const { stock, id } = product
    const { productsCart, addToCart } = useCartContext()
    const [mostrarAgregar, setMostrarAgregar] = useState(false)

    // Segun el localStorage devuelve al estado 0 o la cantidad que tiene el item especifico.
    const [cantidad, setCantidad] = useState(() => {
        const storedData = localStorage.getItem('productQuantities')
        if (storedData) {
            const productQuantities = JSON.parse(storedData)
            return productQuantities[id] || 0
        } else {
            localStorage.setItem('productQuantities', JSON.stringify({}))
        }
        return 0
    })

    // localStorage
    const pushLocalStorage = (keyName) => {
        const storedData = localStorage.getItem(keyName)
        if (!storedData) {
            // Ingresa solo la primera vez y crea un objeto vacio
            const productQuantities = {}
            const updateData = JSON.stringify(productQuantities)
            localStorage.setItem(keyName, updateData)
        } else {
            const productQuantities = JSON.parse(storedData)
            productQuantities[id] = cantidad
            const updateData = JSON.stringify(productQuantities)
            localStorage.setItem(keyName, updateData)
        }

    }
    useEffect(() => {
        pushLocalStorage('productQuantities')
    }, [cantidad])
    useEffect(() => {
        const productQuantities = JSON.parse(localStorage.getItem('productQuantities'))
        setStockProd((prevStockProd) => prevStockProd - productQuantities[id] || prevStockProd)
    },[])
    
    function agregar() {
        if (stockProd < 1) {
            alert('No hay mas stock')
        } else {
            setCantidad((prevCantidad) => prevCantidad + 1)
            setStockProd((prevStockProd) => (prevStockProd - 1))
        }
    }

    function eliminar() {
        setCantidad((prevCantidad) => prevCantidad - 1)
        setStockProd((prevStockProd) => (prevStockProd + 1))
    }

    function handleAgregarCart() {
        addToCart(product, cantidad)
        setMostrarAgregar(true)
        setCantidad(0)
    }

    return <>
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
            <button onClick={handleAgregarCart} className="card__boton">
                Agregar al carrito
            </button>
        </>
        )}
        {mostrarAgregar && <CartNotification text={"Se agregó al carrito"} setMostrarAgregar={setMostrarAgregar} />}
    </>

}

export default ProdCantidad;