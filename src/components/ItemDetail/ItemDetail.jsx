import SelectImg from "../SelectImg/SelectImg"
const ItemDetail = ({id, image, name, description, stock}) => {


    return (
        <> 
        <li className='card--coca'>
            <div className='card__imagen'> 
                <picture>
                    <source srcSet={"." + image + ".avif"} type="image/avif" />
                    <source srcSet={"." + image + ".webp"} type="image/webp" />
                    <img loading="lazy" src={"." + image + ".jpg"} width="" height="" alt="imagen bebida" />
                </picture>
            </div>
            {/* <SelectImg image={image}/> */}
            <h2 className='card__heading'>{name}</h2>
            <p className='card__stock'>Stock: {stock} Unidades</p>
            <p>{description}</p>
        </li> 
    </>

    )
}
export default ItemDetail