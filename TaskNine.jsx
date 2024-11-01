import React, { useState } from 'react';
import Button from '../components/Button/Button';


export default function TaskNine(params) {
    const products_list = [
        {name:"chear", price: 7999},
        {name:"keyboard", price: 3000},
        {name:"mouse", price: 1500},
        {name:"headphones", price: 640},
        {name:"phone", price: 8000},
        {name:"laptop", price: 30000},
        {name:"psp", price: 3500},
        {name:"ps vita", price: 6000},
        {name:"xbox360", price: 10000},
        {name:"cofee", price: 140},
        {name:"mp3player", price: 2000},
        {name:"watch", price: 1500},
        {name:"drink", price: 35},
        {name:"lays", price: 80},
    ];

    let [productCount, setProductCount] = useState(5);


    const onShowFiveMoreProducts = () => {
        setProductCount(productCount=> 5+productCount)
    }

    return (
        <>
        <ul>
            {
                products_list.slice(0,productCount ).map(({name,price})=> <li key={name+price}>Name: {name} , and price: {price} </li>)
            }
        </ul>
        {
            productCount < products_list.length 
            ?  <button onClick={onShowFiveMoreProducts}>Show 5 more products</button>
            : <h1> U got all product we have</h1>
        }
        </>
    )
};

// export default function TaskNine() {
// 	const products_list = [
//         {name:"chear", price: 7999},
//         {name:"keyboard", price: 3000},
//         {name:"mouse", price: 1500},
//     ];
//     const more_product_list = [
//         {name:"headphones", price: 640},
//         {name:"phone", price: 8000},
//         {name:"laptop", price: 30000},
//         {name:"psp", price: 3500},
//         {name:"ps vita", price: 6000},
//         {name:"xbox360", price: 10000},
//         {name:"cofee", price: 140},
//         {name:"mp3player", price: 2000},
//         {name:"watch", price: 1500},
//         {name:"drink", price: 35},
//         {name:"lays", price: 80},
//     ];
//     let [willShow, setWillShow] = useState("none");

//     return(
//         <>
//             <ul>
//                 {products_list.map((product) => (
//                     <li key={product.name}>{product.name}</li>
//                 ))}
//                 <Button onTouch={() => {setWillShow("block")}} >показать еще</Button>
//             </ul>
//             <ul>
//                 {more_product_list.map((item) =>(
//                     <li style={{display:`${willShow}`}} key={item.name}>{item.name}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }