import { memo } from "react"

function TodoListTableHeader(props: {
    onTasksHeaderClick: (arg: any) => void
}) {
    return (
        <div className="todo-list-header py-5 font-medium text-gray-600">
            <p key="c1" className="w-100" />
            <p key="c2" className="w-1/6 pl-3">
                <button
                    type="button"
                    className="link-button font-medium"
                    onClick={props.onTasksHeaderClick}
                >
                    Tasks
                </button>
            </p>
            <p key="c3" className="w-1/6 pl-3">
                Status
            </p>
            <p key="c4" className="w-1/6 pl-3">
                Date
            </p>
            <p key="c5" className="w-1/6 pl-3">
                Time
            </p>
            <p key="c6" className="w-1/6 pl-3" />
        </div>
    )
}
export default memo(TodoListTableHeader)
