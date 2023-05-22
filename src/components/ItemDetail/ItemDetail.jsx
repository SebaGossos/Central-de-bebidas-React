import { useEffect, useState } from "react";
const ItemDetail = ({id, image, name, description, stock}) => {
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        if(Array.isArray(image)) {
            setSelectedImage(image[0].img);
        }
    },[])
    console.log(selectedImage)

    const handleOptionChange = (event) => {
        setSelectedImage(event.target.value)
    }

    const renderImage = (imageUrl) => (
        <div className="card__imagen">
            <picture>
                <source srcSet={`.${imageUrl}.avif`} type="image/avif" />
                <source srcSet={`.${imageUrl}.webp`} type="image/webp" />
                <img loading="lazy" src={`.${imageUrl}.jpg`} alt="imagen bebida" />
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
            <h2 className="card__heading">{name}</h2>
            <p className="card__stock">Stock: {stock} Unidades</p>
            <p>{description}</p>
        </li>
      )
}
export default ItemDetail