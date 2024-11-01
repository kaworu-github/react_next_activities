import { useState } from "react";
import Button from "./Button/Button";

const tasks = [
    'train', 'eat', 'clean teeth', 'study', 'work', 'family time'
];


export default function ShowItem() {
    
    let [inputValue, setInputValue] = useState("");
    let [sortArr, setSortArr] = useState(tasks);
    const onInputHandler = (e) => {
        setInputValue(e.target.value);
    };

    function PushingNewTaskHandler() {
        if (!inputValue) return;
        setSortArr([...sortArr, inputValue]);
        setInputValue("")
    };

    return(
        <div>
            <input
            type="text"
            value={inputValue}
            onChange={onInputHandler}
            placeholder="добавь задачу"
             />
             <ul>
                {
                    sortArr.map((task) =>(
                        <li key={task}>{task}</li>
                    ))
                }   
             </ul>
             <Button isDisabled={!inputValue} onTouch={PushingNewTaskHandler}>добавить задачу</Button>
        </div>
    )
    
}