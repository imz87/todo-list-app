import { getNextTodoItemId, todoItems } from "../utils/Data"
import { FilterBy, OrderBy, StatusType, TodoItem } from "../types"
import store from "../redux/store"
import { createDate } from "../utils/DateUtil"

export function titleComparable(a: TodoItem, b: TodoItem) {
    const titleA = a.title.toUpperCase()
    const titleB = b.title.toUpperCase()
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
}

export function isDateIn(date: Date, filter: FilterBy) {
    if (filter === FilterBy.DAY) return date >= createDate(-1)
    if (filter === FilterBy.WEEK) return date >= createDate(-7)
    if (filter === FilterBy.MONTH) return date >= createDate(-30)
    return false
}

export function getTodoList(
    done: boolean,
    filterBy: FilterBy,
    orderBy: string,
) {
    let myTodoItems = [...todoItems]

    myTodoItems = myTodoItems.filter((i) => i.done === done)

    if (filterBy !== FilterBy.NONE) {
        myTodoItems = myTodoItems.filter((i) => isDateIn(i.date, filterBy))
    }

    if (orderBy !== "") {
        if (orderBy === OrderBy.TASK_ASC) {
            myTodoItems.sort((a, b) => titleComparable(a, b))
        } else {
            myTodoItems.sort((a, b) => titleComparable(b, a))
        }
    }
    return myTodoItems
}

export function deleteTodoItemById(id: number) {
    let index = todoItems.findIndex((i) => i.id === id)
    todoItems.splice(index, 1)
}

export function toggleTodoItemDoneStateById(id: number) {
    let todoItem1 = todoItems.filter((i) => i.id === id)[0]
    todoItem1.done = !todoItem1.done
}

export function getTodoItemForUpdateOrCreate() {
    if (store.getState().modalReducer.payload) {
        return todoItems.filter(
            (i) => i.id === store.getState().modalReducer.payload,
        )[0]
    } else {
        return {
            id: 0,
            title: "",
            date: new Date(),
            status: StatusType.IN_PROGRESS,
        }
    }
}

export function addOrUpdateTodoItem(
    id: number,
    title: string,
    status: string,
    date: Date,
) {
    const status_ = StatusType[status as keyof typeof StatusType]
    if (id === 0) {
        addTodoItem(title, status_, date)
    } else {
        updateTodoItem(id, title, status_, date)
    }
}

function addTodoItem(title: string, status: StatusType, date: Date) {
    const todoItem: TodoItem = {
        id: getNextTodoItemId(),
        title: title,
        status: status,
        date: date,
        done: false,
    }
    todoItems.push(todoItem)
}

function updateTodoItem(
    id: number,
    title: string,
    status: StatusType,
    date: Date,
) {
    let todoItem = todoItems.filter((i) => i.id === id)[0]
    todoItem.title = title
    todoItem.status = status
    todoItem.date = date
}
