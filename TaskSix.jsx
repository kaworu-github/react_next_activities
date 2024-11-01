import React, { useState } from 'react';
import Button from '../components/Button/Button';

let NOTES = [
    {id: 1, title: 'test'},
    {id: 2, title: 'react js'},
    {id: 3, title: 'next js'},
]

export default function TaskSix() {

    let [editedId, setEditedId] = useState(null);
    let [notes, setNotes] = useState(NOTES);
    let [inputValue, setInputValue] = useState('');

    const onClickHandler = (ID) => {
        setEditedId(ID);
        setInputValue(notes.find(({id}) => id===ID).title);
    }

    const onInputHandler = (e) => {
        setInputValue(e.target.value);
    }

    const onBlurHandler = () => {
        setNotes(prevNotes => prevNotes.map(({id, title})=>{
                if(id === editedId){
                    return {
                        id,
                        title: inputValue
                    }
                }
                return {id, title}
        }));
        setEditedId(null);
    };


    return (
        <>
        <h1 className='mb-10'>Notes</h1>
        <ul className='flex flex-col gap-10 ml-10'>
            {
                notes.map(({id, title}) => 
                <li 
                    onClick={()=>onClickHandler(id)}
                    key={id}
                >
                    {
                        editedId === id 
                        ? <input 
                            type="text" 
                            value={inputValue} 
                            className='border border-blue-500 p-1 rounded-md'
                            onInput={onInputHandler}
                            onBlur={onBlurHandler}
                        />
                        : <span>{title}</span>
                    }
                </li>
            )
            }
        </ul>
        </>
    )
}