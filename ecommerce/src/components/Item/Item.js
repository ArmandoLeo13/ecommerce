import ItemCount from "../ItemCount/ItemCount";
import './Item.css';

const Item = ({product}) => {
    return(
        <div className="card">
            <div className="imgCard">
                <img src={product.img} />
            </div>
            <div className="contenidoCard">
            <h2>{product.name}</h2>
                <h3>Precio: ${product.price} Importe: $</h3>
                <ItemCount stock={product.stock} />
            </div>
        </div>
    )
};

export default Item;