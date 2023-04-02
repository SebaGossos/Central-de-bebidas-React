export function NavBar(){
    const logoCentralBebidas = "./src/assets/img/central.png"

    return(
        <section>
            <Logo ruta={logoCentralBebidas}/>
            <Opciones name1='Iniciar Sesion' name2='Registrarse'/>  
        </section>
    )
}


function Logo(props){
    return <img src={props.ruta} alt="Logo" />
}


function Opciones(props){
    return  <nav>
                <button>{props.name1}</button>
                <button>{props.name2}</button>
            </nav>
}