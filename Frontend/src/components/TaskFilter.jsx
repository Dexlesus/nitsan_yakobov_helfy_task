function TaskFilter(props) {
    return (
        <div>
            <button onClick={()=>props.setFilter("all")}>
                All
            </button>
            <button onClick={()=> props.setFilter("completed")}>
                Completed
            </button>
            <button onClick={()=>props.setFilter("pending")}>
                Pending
            </button>
        </div>
    );
}
export default TaskFilter;