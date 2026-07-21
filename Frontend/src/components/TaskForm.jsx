import { useState } from "react";
function TaskForm(props){
    const [task,setTask]=useState({
    title:"",
    description:"",
    priority:"low"
});
function handleChange(event){;
    const {name,value}=event.target;
    setTask((prevTask)=>({
        ...prevTask,[name]: value
    }
    ));
  }

  function handleSubmit(event){
    event.preventDefault();
    props.addTask(task);
    setTask({
        title:"",
        description:"",
        priority:"low"
    })
  }

  return(
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        />
        <input
        type="text"
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        />
        <select>
            <option value="low">low</option>
            <option value="medium">med</option>
            <option value="high">high</option>
        </select>
        <button type="submit">
            add task
        </button>
    </form>
  )

}
export default TaskForm;