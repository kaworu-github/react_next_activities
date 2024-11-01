import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function SecondTask() {
    // task 2
    const product_list = [
        {name: "adapter",price: 90},

        {name:"powerBank", price:120},

        {name:"phone", price:190},

        {name:"mouse", price:75},

        {name:"keyboard", price:99}
    ];

    let [filtered_arr, setFiltered_Arr] = useState(product_list);

    function OnClickHandler() {
        // let filtered = filtered_arr.filter((item) => item.price<100)
        // setFiltered_Arr(filtered);
        setFiltered_Arr(filtered_arr.filter(({price}) => price<100));
    };

    console.log(filtered_arr);
    
    
    return(
        <>
        <ul>
            {filtered_arr.map((device)=>(
                <li key={device.name}>
                    {device.name}:{device.price}
                </li>
            ))}
        </ul>
            <Button onTouch={OnClickHandler}>УБРАТЬ ДОРОГИЕ ДЕВАЙСЫ!</Button>
        </>
    );
};