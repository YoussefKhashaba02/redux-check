import { useDispatch } from "react-redux"
import Task from "./Task"
import { filterTasks } from "../Actions/action"
import { useState } from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
    
    return {
        tasks : state.tasks
    }
}


const ListTask = ({tasks}) =>{
    const [filter,setFilter] = useState(false);
    const dispatch = useDispatch();
    const handleFilter = () =>{
        if(!filter){
            dispatch(filterTasks(tasks))
            setFilter(true);
        }
        else{
            dispatch(filterTasks(tasks))
            setFilter(false)
        }
        
    }

    return (
        <div>
            <button onClick={handleFilter}> Filter </button>
            {tasks.map((task,index) => <Task id={index} props={task}/>)}
        </div>
    )
}

export default connect(mapStateToProps)(ListTask)