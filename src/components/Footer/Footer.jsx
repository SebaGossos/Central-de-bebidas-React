
const Footer = () => {

    return (
        
    <footer className="footer" >
        <section className="contenedor footer__grid">
            <div className="footer__flex">
                <div className="footer__img">
                    <a target="_blank" href="https://www.facebook.com/central.de.bebidas.mendoza/">
                        <picture>
                            <source srcset="./build/img/face.avif" type="image/avif" />
                            <source srcset="./build/img/face.webp" type="image/webp" />
                            <img loading="lazy" src="./build/img/face.png" width="" height="" alt= "logo facebook" />
                        </picture>
                    </a>
                </div>
                <div className="footer__img">
                    <a target="_blank" href="https://www.instagram.com/centralde.bebidas/">
                        <picture>
                            <source srcset="./build/img/insta.avif" type="image/avif" />
                            <source srcset="./build/img/insta.webp" type="image/webp" />
                            <img loading="lazy" src="./build/img/insta.png" width="" height="" alt= "logo instagram" />
                        </picture>
                    </a>
                </div>
                <div className="footer__img">
                    <a target="_blank" href="https://api.whatsapp.com/send/?phone=5402612381111">
                        <picture>
                            <source srcset="./build/img/wssp.avif" type="image/avif" />
                            <source srcset="./build/img/wssp.webp" type="image/webp" />
                            <img loading="lazy" src="./build/img/wssp.png" width="" height="" alt= "logo whatsapp" />
                        </picture>
                    </a>
                </div>
            </div>
            <div className="footer__flex">
                <a href="./pages/terminosYCondiciones.html">
                    <h3 className="footer__terminos">Terminos y Condiciones</h3>
                </a>
                <a href="./pages/aboutMe.html">
                    <h3 className="footer__about">About me :)</h3>
                </a>
            </div>
        </section>
    </footer>
    )
}

export default Footer