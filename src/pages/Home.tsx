import AddNewTaskButton from "../parts/AddNewTaskButton"
import TodoListTabs from "../parts/TodoListTabs"
import TaskModal from "../parts/TaskModal"
import React from "react"
import Badge from "../components/Badge"

export function Home() {
    return (
        <div className="sm:mb-0 sm:ml-0 sm:mr-0 sm:mt-20 md:m-20">
            <AddNewTaskButton className="flex justify-end" />
            <TodoListTabs />
            <TaskModal />
        </div>
    )
}
