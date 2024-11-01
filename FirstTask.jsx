//import {тут импортируються компоненты}
//import React, { useState } from 'react';
import Task from "./Task";

export default function FirstTaskSection() {
    let my_arr = [
        "react", 
        "12.11.1953",
        "js dev",
        "Kyiv",
        "lenovo"
    ];
    return(
        <div>
            <Task tasks={my_arr}/>
        </div>
    )
}
