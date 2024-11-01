import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function FifthTask() {
    const tasks = [
        'train', 'eat', 'clean teeth', 'study', 'work', 'family time'
    ];

    
    let [inputValue, setInputValue] = useState("");
    let [sortArr, setSortArr] = useState(tasks);

    const onInputHandler = (e) => {
        setInputValue(e.target.value)
        setSortArr(tasks.filter( task => task.includes(e.target.value)));
    };

    // function IncludeValueHandler() {
    //     if (!inputValue) return;
    //     setSortArr([...sortArr, inputValue]);
    // };

    return(
        <div>
            <input 
            type="text"
            placeholder='введи название таски'
            value={inputValue}
            onChange={onInputHandler}
             />
            <ul>
                {
                    sortArr.map((task) =>(
                        <li key={task}>{task}</li>
                    ))
                }   
            </ul>
        </div>
    )
};