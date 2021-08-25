import {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    let [count, setCount] = useState(initial);

    const more = () => {
        if(count<stock){
        setCount(count+1);
        }
    }

    const less = () => {
        if(count>0){
        setCount(count-1);
        }
    }

    const addToCart = () => {
        if(stock>0){
            onAdd(count);
        }
    }

    if(stock>0){
    return(
        <div>
            <p>Products added to cart: {count}</p>
            <button onClick={more}>+</button>
            <button onClick={less}>-</button>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
        }else{
            return(
                <div>
                    <p>Products added to cart: {count}</p>
                    <button onClick={more}>+</button>
                    <button onClick={less}>-</button>
                    <button disabled>Add to cart</button>
                </div>
            )
}
}

export default ItemCount;