const API="http://localhost:4000/api/tasks";


const getTasks=async()=>{
    const res=await fetch(API);
    if(!res.ok) throw new Error("Failed to get tasks");
    return await res.json();
}

const addTask=async(task)=>{
    const res=await fetch(API,
        {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(task)
    })
    if(!res.ok) throw new Error("Failed to add new task");
    return await res.json();
}

const updateTask=async(id,task)=>{
    const res=await fetch(`${API}/${id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });
    if (!res.ok)throw new Error("Failed to update task");
    return await res.json();
};

const deleteTask=async(id)=>{
    const res=await fetch(`${API}/${id}`,{
        method: "DELETE"
    });
    if (!res.ok)throw new Error("Failed to delete task");
    return await res.json();
};

const toggleTask = async (id) => {
    const res = await fetch(`${API}/${id}/toggle`,{
        method: "PATCH"
    });
    if (!res.ok) throw new Error("Failed to toggle task");
    return await res.json();
};
export {getTasks,addTask,updateTask,deleteTask,toggleTask};
