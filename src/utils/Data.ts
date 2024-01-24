import { StatusType, TodoItem } from "../types"
import { createDate } from "./DateUtil"

export const todoItems: TodoItem[] = [
    {
        id: 1,
        title: "Wash The Dishes",
        date: new Date(),
        status: StatusType.PAUSED,
        done: false,
    },
    {
        id: 2,
        title: "Pay the Monthly Charge",
        date: createDate(-3),
        status: StatusType.PAUSED,
        done: false,
    },
    {
        id: 3,
        title: "Read IELTS Lessons",
        date: createDate(-10),
        status: StatusType.IN_PROGRESS,
        done: false,
    },
    {
        id: 4,
        title: "Watch TV",
        date: createDate(-40),
        status: StatusType.IN_PROGRESS,
        done: false,
    },
    {
        id: 5,
        title: "Buy a new phone",
        date: new Date(),
        status: StatusType.IN_PROGRESS,
        done: true,
    },
    {
        id: 6,
        title: "Take a rest",
        date: createDate(-3),
        status: StatusType.IN_PROGRESS,
        done: true,
    },
    {
        id: 7,
        title: "Change Lamp",
        date: createDate(-10),
        status: StatusType.IN_PROGRESS,
        done: true,
    },
    {
        id: 8,
        title: "Speak Loader",
        date: createDate(-50),
        status: StatusType.IN_PROGRESS,
        done: true,
    },
]

export const getNextTodoItemId = () => {
    if (todoItems.length === 0) return 1
    return todoItems[todoItems.length - 1].id + 1
}
