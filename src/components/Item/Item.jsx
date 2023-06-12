import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectImg from "../SelectImg/SelectImg";
import ProdCantidad from "../ProdCantidad/ProdCantidad";
import { useProducts } from "../context/ProductsContext";


const Item = ({ product, routeImg, dolarPrice }) => {
    const { id, image, name, price, stock } = product
    const [finalPrice, setFinalPrice] = useState(null)
    const {controlStock, setControlStock} = useProducts()

    const [stockProd, setStockProd] = useState(() => {
        // Si tengo una cantidad en mi carrito de compra de este producto, lo disminuyo en mi stock local.
        const storedData = localStorage.getItem('productQuantitiesCart') ? JSON.parse(localStorage.getItem('productQuantitiesCart')) : {}
        const quantityProduct = storedData[id] ? stock - storedData[id] : stock
        return quantityProduct
    })

    useEffect(() => {
        if(controlStock){
            setStockProd(stock)
            setControlStock(false)
        }
    },[stock])

    useEffect(() => {
        let valor = Math.ceil(price * dolarPrice)
        setFinalPrice(valor)
    }, [price, dolarPrice])


    // nombre de clase dependiendo de la bebida
    let nameClass = null
    name === 'Coca Cola'
        ? nameClass = 'card--coca'
        : nameClass = 'card'


    return (
        <>
            <li className={nameClass}>
                <SelectImg image={image} routeImg={routeImg} />
                <h2 className='card__heading'>{name}</h2>
                <p className='card__stock' >{`Stock: ${stockProd} Unidades`}</p>
                <p className='card__price' >{`$ ${finalPrice}`}</p>
                <Link to={`/detail/${id}/${finalPrice}`} className="card__description">Descripción</Link>
                <ProdCantidad product={product} stockProd={stockProd} setStockProd={setStockProd} />
            </li>
        </>
    );
}
export default React.memo(Item);