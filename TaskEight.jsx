import React, { useState } from 'react';
import Button from '../components/Button/Button';
export default function TaskEight() {
    const numbers_list = [1, 5, 2, 7, 8, 3, 4, 10, -2];
    
    const letters_list = ["b", "a", "c", "e", "d"];
    // console.log(numbers_list);
    // console.log(letters_list);
    
    let [sorted, setSorted] = useState([...numbers_list]);

    function onClickHandler() { 
        setSorted([...sorted.sort((a, b) => a - b)])
        // console.log(sorted.sort((a, b) => a - b));
        // console.log([1,2,3] === [1,2,3]);
    };

    console.log('in component',sorted);

    function onSecondClickHandler() {
        letters_list.sort();
        console.log(letters_list);
          
    };
    return(
        <>
            <ul>
                {sorted.map((number) => (
                    <li key={number}>{number}</li>
               ))}
            </ul>
            <Button onTouch={onClickHandler}>станьте по очериди!</Button>
            <Button onTouch={onSecondClickHandler}>cтаньте за алфавитом!</Button>
        </>
    )
}