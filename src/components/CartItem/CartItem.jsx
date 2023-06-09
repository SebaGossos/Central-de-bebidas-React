import React, {useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import SelectImg from "../SelectImg/SelectImg";
import CartProdCant from "../CartProdCant/CartProdCant";
import ProdCantidad from "../ProdCantidad/ProdCantidad";
import { useCartContext } from "../context/CartContext"



const CartItem = ({product, dolarPrice}) => {

    const {id, image, name , price, stock} = product
    const finalPrice = useRef(null)
    const [stockProd, setStockProd] = useState(stock)
    const [cantidad, setCantidad] = useState(() => {
        const productQuantities = JSON.parse(localStorage.getItem('productQuantitiesCart'))
        return productQuantities[id]
    })

    let valor = Math.ceil(price * dolarPrice)
    
    useEffect(() =>{
        finalPrice.current.textContent = `$ ${valor}`
    },[dolarPrice, price, stockProd])

    // nombre de clase dependiendo de la bebida
    let nameClass = null
    name === 'Coca Cola'
        ? nameClass = 'card--coca'
        : nameClass = 'card'

    return (
        <> 
            <li className={nameClass}>
                <SelectImg image={image}/>
                <h2 className='card__heading'>{name}</h2>
                <p className='card__stock'>Stock: {stockProd} Unidades</p>
                <p ref={finalPrice} className='card__price' />
                <CartProdCant valor={valor} cantidad={cantidad} setCantidad={setCantidad} product={product} stockProd={stockProd} setStockProd={setStockProd} />
            </li> 
        </>
    )
}
export default React.memo(CartItem)