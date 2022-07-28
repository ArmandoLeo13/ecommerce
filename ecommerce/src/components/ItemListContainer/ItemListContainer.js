import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList.js/ItemList';

const ItemListContainer = (props) =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(response =>{
            setProducts(response)
        })
    },[])


    return(
        <div>
            <h1 className="ItemH1">{props.greetings}</h1>
            <ItemList products={products} />
        </div>
    )
};

export default ItemListContainer;