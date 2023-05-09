import { add_task } from "../Constants/action-types"
import { edit_task } from "../Constants/action-types"
import { check_task } from "../Constants/action-types"
import { Filter_tasks } from "../Constants/action-types"

export const addTask = payload =>{
    return{
        type : add_task,
        payload : payload
    }
}

export const filterTasks = tasks =>{
    return {
        type : Filter_tasks,
        payload: tasks
    }
}

export const editTask = payload =>{
    return{
        type : edit_task,
        payload : payload
    }
}

export const doneTask = payload =>{
    return{
        type : check_task,
        payload : payload
    }
}
