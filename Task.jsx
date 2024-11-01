export default function Task({tasks}){
    return(
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => ( <li key={task}>{task}</li>))}
            </ul>
        </div>
    )
}