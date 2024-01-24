export enum StatusType {
    PAUSED = "Paused",
    IN_PROGRESS = "In Progress",
}

export enum OrderBy {
    TASK_ASC = "tasks",
    TASK_DESC = "-tasks",
}

export enum FilterBy {
    NONE = "",
    MONTH = "month",
    WEEK = "week",
    DAY = "day",
}

export interface TodoItem {
    id: number
    title: string
    date: Date
    status: StatusType | string
    done: boolean
}
