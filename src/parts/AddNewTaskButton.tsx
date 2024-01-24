import React from "react"
import store from "../redux/store"
import { showModal } from "../redux/actions"

type Props = { className?: string }

function AddNewTaskButton(props: Props) {
    function handleAddTask() {
        store.dispatch(showModal())
    }

    return (
        <div className={props.className}>
            <button onClick={handleAddTask} className="btn btn-indigo">
                Add Task
            </button>
        </div>
    )
}

export default AddNewTaskButton
