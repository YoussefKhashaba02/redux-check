


const Task = (props) =>{


    return(
        <div className="task">
            <button> Done </button>
            <p>{props.description}</p>
            <button> Delete </button>
        </div>
    )
}

export default Task