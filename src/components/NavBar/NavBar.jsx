import '../../../build/css/app.css'
export function NavBar(){
    const logoCentralBebidas = "./src/assets/img/central.png"

    return(
        <header className='contenedor header'>
            <Logo ruta={logoCentralBebidas}/>
            <Opciones name1='Iniciar Sesion' name2='Registrarse'/>  
        </header>
    )
}


function Logo(){
    return (
        <div className="header__logo">
            <a href="index.html">
                <picture>
                    <source srcset="build/img/central.avif" type="image/avif"/>
                    <source srcset="build/img/central.webp" type="image/webp"/>
                    <img className="header__imagen" loading="lazy" src="build/img/central.png" width="" height="" alt="logo Central Bebidas" />
                </picture>
            </a>
        </div>
    )
}
        
function Opciones(props){
    return  <nav class="registro">
                <button className="registro__inicioSesion">{props.name1}</button>
                <button className="registro__crearCuenta">{props.name2}</button>
                <div className='registro__carrito'>3🛒</div>
            </nav>
}