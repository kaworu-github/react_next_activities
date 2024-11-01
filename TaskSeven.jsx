import React, { useState } from 'react';
// /import Button from '../components/Button/Button';

export default function TaskSeven() {
    let to_do_list = [
        {id:1, title: "проведать друга", status:false},
        {id:2, title: "прочитать книгу", status:false},
        {id:3, title: "сделать отчет", status:false},
        {id:4, title: "купить подарок на день рождение дедушки", status:false},
        {id:5, title: "покормить кошку соседа", status:false},
    ];
    let [checkStatus, setCheckSatus] = useState([...to_do_list]);
    let [checkedTasks, setCheckedTasks] = useState([1,2,3]);
    function OnClickVerificationHandler(ID) {

        if(!checkedTasks.includes(ID)){
            setCheckedTasks(checkedTasks => [...checkedTasks, ID])
        }else{
            setCheckedTasks(checkedTasks = checkedTasks.filter(id => id !== ID))
        }

        // let newTasks = checkStatus.map(({id,title, status})=>{
        //     if(id === ID){
        //         return {
        //             id,
        //             title,
        //             status: !status
        //         }
        //     }
        //     return { id, title, status}
        // })

        // setCheckSatus([...newTasks]);
        // let newTask = checkStatus.find(({id})=>id === ID);
        // newTask.status = !newTask.status;
        // [
        //     checkStatus,
        //     ...newTask
        // ]

        // [
        //     ...[
        //         {id:1, title: "проведать друга", status:false},
        //         {id: 2, title: "прочитать книгу", status:false},
        //         {id:3, title: "сделать отчет", status:false},
        //         {id:4, title: "купить подарок на день рождение дедушки", status:false},
        //         {id:5, title: "покормить кошку соседа", status:false},
        //     ],
        //     {id:5, title: "покормить кошку соседа", status:true},
        // ]

        // => 

        //     [
        //         {id:1, title: "проведать друга", status:false},
        //         {id: 2, title: "прочитать книгу", status:false},
        //         {id:3, title: "сделать отчет", status:false},
        //         {id:4, title: "купить подарок на день рождение дедушки", status:false},
        //         {id:5, title: "покормить кошку соседа", status:false},
        //         {id:5, title: "покормить кошку соседа", status:true},
        //     ]
        
    };

    // console.log('checkStatus,',checkStatus);

    return(
            <ul>
                {checkStatus.map((to_do) => 
                   <li 
                        // style={{textDecoration: to_do.status ?'line-through' : ''}}
                        style={{textDecoration: checkedTasks.includes(to_do.id) ?'line-through' : ''}}
                        key={to_do.id} 
                        onClick={()=>OnClickVerificationHandler(to_do.id)}
                    >
                        {to_do.title}
                        <br />
                        {/* <input type='checkbox' checked={to_do.status}/> */}
                        <input type='checkbox' checked={checkedTasks.includes(to_do.id)}/>

                    </li>
                )}
            </ul>
    )
}