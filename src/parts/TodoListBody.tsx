import { FilterBy, TodoItem } from "../types"
import TodoListTableRow from "./TodoListTableRow"
import { getTodoList } from "../services/TodoListService"
import { useEffect, useState } from "react"
import store from "../redux/store"

type Props = { done: boolean; order: string; filter: FilterBy }

function TodoListTableBody({ done, order, filter }: Props) {
    const [modalState, setModalState] = useState(false)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setModalState(!modalState)
        })
        return () => {
            unsubscribe()
        }
    })

    let items = getTodoList(done, filter, order)
    return (
        <div>
            {items.map((item: TodoItem) => {
                return <TodoListTableRow key={item.id} todoItem={item} />
            })}
        </div>
    )
}
export default TodoListTableBody
