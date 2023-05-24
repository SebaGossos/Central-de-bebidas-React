import React, {useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import SelectImg from "../SelectImg/SelectImg";
import CartProdCant from "../CartProdCant/CartProdCant";
import ProdCantidad from "../ProdCantidad/ProdCantidad";
import { useCartContext } from "../context/CartContext"



const CartItem = ({product, dolarPrice}) => {
    const {setCartPrice} = useCartContext()
    const {id, image, name , price, stock} = product
    const finalPrice = useRef(null)

    const [stockProd, setStockProd] = useState(() => {
        // Disminuyo en mi stock local.
        const storedData = JSON.parse(localStorage.getItem('productQuantitiesCart'))
        return stock - storedData[id]
    })

    useEffect(() =>{
        let valor = Math.ceil(price * dolarPrice)
        let cantidad = stock - stockProd
        setCartPrice((prev) => prev + (valor * cantidad))
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
                <Link to={`/detail/${id}`} className="card__description">Descripción</Link>
                <CartProdCant product={product} stockProd={stockProd} setStockProd={setStockProd} />
            </li> 
        </>
    )
}
export default React.memo(CartItem)