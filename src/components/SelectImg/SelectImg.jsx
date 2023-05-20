
import { useState } from "react";

const SelectImg = ({image, routeImg=true}) => {
    const [option, setOption] = useState(0);
    
    //console.log(image)
    const handleOption = (select) => {
        setOption(select);
    }

    // ruta de la imagen dependiendo de la category (alcohol, sinAlcohol)
    let section = routeImg === true ? '.' : '';

    // selecciona la imagen dependiendo de la opcion. Por defecto siempre selecciona la primera.
    let imageOption = option !== 0 ? option : image[0].img;
    return (
        <>
            {Array.isArray(image) ? ( 
                    // si es un array de imagenes
                <>
                    <div className=''>
                        <div> 
                            <picture>
                                <source srcSet={section + imageOption + ".avif"} type="image/avif" />
                                <source srcSet={section + imageOption + ".webp"} type="image/webp" />
                                <img loading="lazy" src={section + imageOption + ".jpg"} width="" height="" alt="imagen bebida" />
                            </picture>
                        </div>
                        <div className="options">
                            {image.map((item) => (
                                <div key={item.img} >
                                    <input 
                                        type="radio" 
                                        id={item.img} 
                                        className="options__radio" 
                                        value={item.value}
                                        checked={option === item.img}
                                        onChange={() => handleOption(item.img)} />
                                        
                                    <label htmlFor={item.img}>{item.value}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                // si es una sola imagen
                <div> 
                    <picture>
                        <source srcSet={section + image + ".avif"} type="image/avif" />
                        <source srcSet={section + image + ".webp"} type="image/webp" />
                        <img loading="lazy" src={section + image + ".jpg"} width="" height="" alt="imagen bebida" />
                    </picture>
                </div>
            )}
            

        </>
    )
}
export default SelectImg;