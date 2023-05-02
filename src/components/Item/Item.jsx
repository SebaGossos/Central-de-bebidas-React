import React, { useRef, useEffect} from "react";
import { Link } from "react-router-dom";
const Item = ({id, image, name, price, stock, img, dolarPrice}) => {

    const finalPrice = useRef(null)

    useEffect(() =>{
        let valor = Math.ceil(price * dolarPrice)
        finalPrice.current.textContent = `$ ${valor}`
    },[dolarPrice, price])

    // ruta de la imagen dependiendo de la bebida
    let section = null
    img === true
        ? section = '.'
        : section = ''
    console.log('estoy pasando por item')

    // nombre de clase dependiendo de la bebida
    let nameClass = null
    name === 'Coca Cola'
        ? nameClass = 'card--coca'
        : nameClass = 'card'


    return (
        <> 
            <li className={nameClass}>
                <div className='card__imagen'> 
                    <picture>
                        <source srcSet={section + image + ".avif"} type="image/avif" />
                        <source srcSet={section + image + ".webp"} type="image/webp" />
                        <img loading="lazy" src={section + image + ".jpg"} width="" height="" alt="imagen bebida" />
                    </picture>
                </div>
                <h2 className='card__heading'>{name}</h2>
                <p className='card__stock'>Stock: {stock} Unidades</p>
                <p ref={finalPrice} className='card__price' />
                <Link to={`/detail/${id}`} className="card__description">Descripción</Link>
                <button className="card__boton">Agregar</button>
            </li> 
        </>
    );
}
export default React.memo(Item);