import { useEffect, useState } from "react";
import ProdCantidad from "../ProdCantidad/ProdCantidad";
const ItemDetail = ({product, finalPrice}) => {
    const {id, image, name, description, stock} = product
    const [selectedImage, setSelectedImage] = useState(null)
    
    const [stockProd, setStockProd] = useState(() => {
        // Si tengo una cantidad en mi carrito de compra de este producto, lo disminuyo en mi stock local.
        const storedData = localStorage.getItem('productQuantitiesCart') ? JSON.parse(localStorage.getItem('productQuantitiesCart')) : {}
        const quantityProduct = storedData[id] ? stock - storedData[id] : stock
        return quantityProduct
    })

    useEffect(() => {
        if(Array.isArray(image)) {
            setSelectedImage(image[0].img);
        }
    },[image])

    const handleOptionChange = (event) => {
        setSelectedImage(event.target.value)
    }

    const renderImage = (imageUrl) => (
        <div className="card__imagen card__imagen--detail">
            <picture>
                <source srcSet={`../../${imageUrl}.avif`} type="image/avif" />
                <source srcSet={`../../${imageUrl}.webp`} type="image/webp" />
                <img loading="lazy" src={`../../${imageUrl}.jpg`} alt="imagen bebida" />
            </picture>
        </div>
    )
    
    const renderOptions = (options) => (
        <div className="options">
            {options.map((option) => (
                <div key={option.img}>
                    <input
                        type="radio"
                        id={option.img}
                        className="options__radio"
                        value={option.img}
                        checked={selectedImage === option.img}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor={option.img}>{option.value}</label>
                </div>
            ))}
        </div>
    )

    return (
        <li className="card--coca">
            {Array.isArray(image) ? (
                <div>
                    <div>{renderImage(selectedImage)}</div>
                    <div>{renderOptions(image)}</div>
                </div>
            ) : (
                <div>{renderImage(image)}</div>
            )}
            <div className="card__container">
                <div className="card__container--text">
                    <h2 className="card__heading">{name}</h2>
                    <p className="card__stock">Stock: {stock} Unidades</p>
                    <p className="card__price">{`$ ${finalPrice}`}</p>
                </div>
                <div className="card__container--price">
                    <ProdCantidad product={product} stockProd={stockProd} setStockProd={setStockProd}/>
                </div>
            </div>
            <p>{description}</p>
        </li>
      )
}
export default ItemDetail