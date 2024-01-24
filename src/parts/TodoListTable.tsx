import { FilterBy, OrderBy } from "../types"
import { useCallback, useState } from "react"
import DateButtonGroup from "../components/DateButtonGroup"
import TodoListTableHeader from "./TodoListTableHeader"
import TodoListBody from "./TodoListBody"

function TodoListTable({ done }: { done: boolean }) {
    const [orderBy, setOrderBy] = useState("")
    const [filterBy, setFilterBy] = useState(FilterBy.NONE)

    function handleOrderBy() {
        setOrderBy(orderBy === OrderBy.TASK_ASC ? OrderBy.TASK_DESC : OrderBy.TASK_ASC)
    }

    const setFilterCallback = useCallback((filter) => setFilterBy(filter), [])
    const handleOrderByCallback = useCallback(handleOrderBy, [orderBy])

    return (
        <div>
            <DateButtonGroup handleOnClick={setFilterCallback} className="mt-14 flex justify-end mb-16" />
            <TodoListTableHeader onTasksHeaderClick={handleOrderByCallback} />
            <TodoListBody done={done} order={orderBy} filter={filterBy} />
        </div>
    )
}
export default TodoListTable
