import './ItemCount.css';
import {useState} from 'react';

const ItemCount = ({stock}) =>{
    const [count, setCount] = useState(0);

    const decrement = ()=>{
        if(count>0){
            setCount(count-1);
        }
        
    }

    const increment = ()=>{
        if(stock>count){
            setCount(count+1);
        }
    }

    return(
        <div className='Contador'>
            <button onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    )
};

export default ItemCount;
