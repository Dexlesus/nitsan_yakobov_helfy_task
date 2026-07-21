import { toggleTask } from "../services/api";
function TaskItem(props){
    return (
        <div>
            <h2>{props.task.id}</h2>
            <h2>{props.task.title}</h2>
            <h4>{props.task.description}</h4>
            <p>Priority:{props.task.priority}</p>
            <p>status:{props.task.completed?"Completed":"Uncompleted"}</p>
            <p>Created at:{props.task.createdAt}</p>
            <button onClick={()=>props.deleteTask(props.task.id)}>
                delete
            </button>
            <button onClick={()=>toggleTask(props.task.id)} >
                {props.task.completed ? "Undo" : "Complete"}
            </button>
        </div>
    )
}
export default TaskItem;