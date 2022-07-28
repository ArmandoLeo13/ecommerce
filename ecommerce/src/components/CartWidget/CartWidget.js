import './CartWidget.css';
import ItemCount from '../ItemCount/ItemCount';

const CartWidget = () =>{
    return(
        <div className="cajaCar">
            <img src='images/shopping-cart.png' alt="Cart"/>
            <h1>0</h1>
        </div>
        
    )
};

export default CartWidget;