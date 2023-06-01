import { useProducts } from "../context/ProductsContext";

const Register = () => {
    const { setMenu } = useProducts() 
    setMenu(true)
    return (
        <main className="contenedor registrar">
            <h2 className="registrar__heading">Registro de Usario</h2>
            <div className="registrar__contenedor">
                <form id="formulario" className="registrar__formulario" action="">
                    <div className="registrar__campo">
                        <label className="registrar__label" for="nombre">Nombre</label>
                        <input className="registrar__input" type="text" id="nombre" placeholder="Tu Nombre" />
                    </div>
                    <div className="registrar__campo">
                        <label className="registrar__label" for="contrasena">Contraseña</label>
                        <input className="registrar__input" type="password" id="contrasena" placeholder="Tu Contraseña" />
                    </div>
                    <div className="registrar__campo">
                        <label className="registrar__label" for="email">Email</label>
                        <input className="registrar__input" type="email" id="email" placeholder="Tu Email" />
                    </div>

                    <div className="registrar__campo">
                        <label className="registrar__label" for="fecha">Fecha de nacimiento</label>
                        <input className="registrar__input" type="date" id="edad" />
                    </div>

                    <div className="registrar__campo--submit">
                        <input className="registrar__input--submit" type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </main>
    );

}
export default Register;