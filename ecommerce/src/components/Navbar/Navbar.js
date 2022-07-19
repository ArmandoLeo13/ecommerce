import './Navbar.css';

const Navbar = () =>{
    return(
        <nav className="Navbar">
            <div>
                <img src="../images/logo2.png" alt="" />
            </div>
            <div className="Nav2">
                <button>Productos</button>
                <button>¿Quienes somos?</button>
                <button>Contacto</button>
                <button>Preguntas frecuentes</button>
            </div>
        </nav>
    )
};

export default Navbar;


