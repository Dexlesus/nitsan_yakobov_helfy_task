import React,{useState,useEffect} from "react";
import { getTasks} from "./services/api.js";
import {addTask} from "./services/api.js";
import { deleteTask as deleteTaskApi}  from "./services/api.js";
import {toggleTask as toggleTaskApi} from "./services/api.js";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskFilter from "./components/TaskFilter.jsx";
function App(){
    const [tasks,setTasks]=useState([]);
    const [filter,setFilter]=useState("everything");
    useEffect(()=>{
        async function fetchTasks(){
            try {
                const data=await getTasks();
                setTasks(data);
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchTasks();

    },[])
    async function addNewTask(newTask){
        try {
            const task=await addTask(newTask);
            setTasks((prevValue)=>[...prevValue,task]);
        } catch (error) {
            console.log(error)
        }
    };
    async function deleteTask(id){
        try {
        await deleteTaskApi(id);
        setTasks(prevValue=>prevValue.filter(task => task.id !== id));
    } catch (error) {
        console.log(error);
    }
};
    async function toggleTask(id){
        try {
            const updatedTask = await toggleTaskApi(id);
            setTasks(prevValue =>prevValue.map(task =>task.id === id? updatedTask: task));
        } catch (error) {
            console.log(error);
        }
};
    const filteredTasks = tasks.filter(task => {
    if(filter==="all") return true;

    if(filter==="completed")
        return task.completed;

    if(filter==="pending")
        return !task.completed;
});
    return(
    <>
    <TaskList 
    tasks={filteredTasks}
    deleteTask={deleteTask}
    toggleTask={toggleTask}
    
    />
    <TaskFilter setFilter={setFilter} />
    <TaskForm addTask={addNewTask}/>
    </>
    )
}
export default App;