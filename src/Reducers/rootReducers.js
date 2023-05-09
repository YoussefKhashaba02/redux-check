import { Filter_tasks, add_task, unfilter_tasks } from "../Constants/action-types"

const initialState = {
    tasks : [
        {
            id : 1,
            title : 'First Task',
            done : false
        }
    ]
}

export const rootReducer = (state = initialState,action) =>{
    switch(action.type){
        case Filter_tasks:
            return state.filter(task =>task.isDone ==true)
        case unfilter_tasks:
            return 
        case add_task:
            return [...state, action.payload]
        
    }
}