import { StatusType, TodoItem } from "../types"
import { toLocaleDate, toLocaleTime } from "../utils/DateUtil"

import pencilIcon from "../assets/images/pencil.svg"
import deleteIcon from "../assets/images/x.svg"
import store from "../redux/store"
import { hideModal, showEditModal } from "../redux/actions"
import { deleteTodoItemById, toggleTodoItemDoneStateById } from "../services/TodoListService"
import Badge from "../components/Badge"
import { memo } from "react"

type Props = { todoItem: TodoItem }

function TodoListTableRow({ todoItem }: Props) {
    function handleEdit(id: number) {
        store.dispatch(showEditModal(id))
    }

    function handleDone(id: number) {
        toggleTodoItemDoneStateById(id)
        store.dispatch(hideModal())
    }

    function handleDelete(id: number) {
        deleteTodoItemById(id)
        store.dispatch(hideModal())
    }

    return (
        <div className="todo-list-body font-sans">
            <div className="w-100 p-0 mt-5 mb-5 ml-5">
                <input
                    type="checkbox"
                    defaultChecked={todoItem.done}
                    onClick={() =>
                        setTimeout(() => handleDone(todoItem.id), 200)
                    }
                />
            </div>
            <div className="w-1/6 m-5">{todoItem.title}</div>
            <div className="w-1/6 m-5">
                <Badge
                    value={todoItem.status}
                    isOrange={todoItem.status === StatusType.PAUSED}
                />
            </div>
            <div className="w-1/6 m-5">{toLocaleDate(todoItem.date)}</div>
            <div className="w-1/6 m-5">{toLocaleTime(todoItem.date)}</div>
            <div className="flex w-1/6 m-5">
                <button
                    type="button"
                    className="link-button"
                    onClick={() => handleEdit(todoItem.id)}
                >
                    <div className="w-5 h-5 p-0.5 m-3 mb-2">
                        <img src={pencilIcon} alt="edit" />
                    </div>
                </button>
                <button
                    type="button"
                    className="link-button"
                    onClick={() => handleDelete(todoItem.id)}
                >
                    <div className="w-5 h-5 m-3">
                        <img src={deleteIcon} alt="delete" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default memo(TodoListTableRow)
