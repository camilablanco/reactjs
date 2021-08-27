import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount';

const promise = () => {
    return new Promise((resolve,reject) =>
    setTimeout([
        resolve([
        {id:27, show: true, name: 'Lady Million'},
        {id:28, show: false, name: 'Chanel N5'},
        {id:29, show: true, name: 'Very Irresistible'},
        {id:30, show: false, name: 'Be Delicious'},
         ]),
      2000
    ])  
    )
}

export const show = () =>{

    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        promise().then((data)=>{
            let aux = data.filter((product) => {product.show}) 
            setDataToShow(aux);
        }
        )
    }, [])

    return (
        dataToShow.length === 0?(
            <h1>Loading...</h1>
        ):(
            <ul>
                {dataToShow.map((element) =>(
                    <li key={element.id}>{element.name}</li>
                ))}
            </ul>
        )
    )
}

export default Item;