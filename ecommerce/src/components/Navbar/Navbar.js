import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () =>{
    return(
        <nav className="Navbar">
            <div>
                <img src="../images/logo2.png" alt="" height="30px" />
            </div>
            <div className="Nav2">
                <button>Productos</button>
                <button>¿Quienes somos?</button>
                <button>Contacto</button>
                <button>Preguntas frecuentes</button>
                <CartWidget />
            </div>
        </nav>
    )
};

export default Navbar;


