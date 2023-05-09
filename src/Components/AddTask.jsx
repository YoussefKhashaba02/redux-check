import { useState } from "react"
import { addTask } from "../Actions/action"
import { useDispatch } from "react-redux"
import ListTask from "./ListTask"

const AddTask = ()=>{
    const dispatch = useDispatch()
    const [title,setTitle] = useState('')

    const handleClick = () =>{
        const newTask = {
            id : Date.now,
            title : title,
            done : false
        }
        dispatch(addTask(newTask))
    }
    return(
        <div>
            <input onChange={e => setTitle(e.target.value)}/>
            <button onClick={handleClick}> Add Task</button>
        </div>
    )
}

export default ListTask