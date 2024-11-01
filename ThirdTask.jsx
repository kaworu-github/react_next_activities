import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function ThirdTask() {
    const to_do_list = [
        "do homework",
        "coding", 
        "time to lunch",
        "again coding",
        "sleep"
    ];

    const to_do_list_next = [
        {title:"do homework", id: '12323', time: '15:40', date: '12.10.2024', isDone: false, prevValues: ['do math, read book']},
        {title:"coding", id:'1334'} , 
        {title:"time to lunch", id: '987'},
        {title:"again coding", id: '567890'},
        {title:"sleep", id: '45678'}
    ];


    let [filteredArr, setFilteredArr] = useState(to_do_list);
    let [todo, setTodo] = useState(to_do_list_next);

    
    function onDelateNameHandler(move) {
        setFilteredArr(filteredArr.filter((funct)=> funct !== move));
    };


    const onRemoveToDo = (ID) => {
        setTodo(prevTodo => prevTodo.filter(({id}) => id !== ID));
    }

    return(
        <>
            <ul>
                {filteredArr.map((doing) =>
                    <li 
                        key={doing}
                    >
                        {doing} 
                        <Button onTouch={() => onDelateNameHandler(doing)}>Удалить {doing}</Button>
                    </li>
                )}
            </ul>
            <ul>
                {todo.map(({title, id, prevValues}) =>
                    <li 
                        key={id}
                    >
                        {title} 
                        <div>
                            <h1>Prev values of this todo</h1>
                            {
                               prevValues && prevValues.length && prevValues.map(value=><li>{value}</li>)
                            }
                        </div>
                        <Button onTouch={() => onRemoveToDo(id)}>Удалить</Button>
                    </li>
                )}
            </ul>
        </>
    )
};