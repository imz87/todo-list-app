import Modal from "react-modal"
import React, { memo, useEffect, useState } from "react"
import store from "../redux/store"
import { hideModal } from "../redux/actions"
import { addOrUpdateTodoItem, getTodoItemForUpdateOrCreate } from "../services/TodoListService"
import { MyDateTimePicker } from "../components/MyDateTimePicker"
import { StatusDropdown } from "../components/StatusDropdown"
import InputText from "../components/InputText"
import SubmitButton from "../components/SubmitButton"

function TaskModal() {
    const [showModal, setShowModal] = useState(false)
    const [id, setId] = useState(0)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState(new Date())
    const [status, setStatus] = useState("")

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            if(showModal===store.getState().modalReducer.modal) return
            setShowModal(store.getState().modalReducer.modal)
            let todoItem = getTodoItemForUpdateOrCreate()
            setId(todoItem.id)
            setTitle(todoItem.title)
            setDate(todoItem.date)
            setStatus(todoItem.status)
        })
        return () => {
            unsubscribe()
        }
    })

    function handleHideModal(e: any) {
        store.dispatch(hideModal())
    }

    function handleSaveTask(e: any) {
        e.preventDefault()
        let title_ = e.target.elements.title.value
        let status_ = e.target.elements.status.value
        addOrUpdateTodoItem(id, title_, status_, date)
        store.dispatch(hideModal())
    }

    return (
        <Modal
            isOpen={showModal}
            onRequestClose={handleHideModal}
            contentLabel="My dialog"
            className="mymodal"
            overlayClassName="myoverlay"
        >
            <div className="bg-teal-lighter flex items-center w-full">
                <div className="w-full p-8 m-4 bg-white rounded">
                    <h1 className="text-grey-darkest block w-full mb-6 text-center">
                        New Task
                    </h1>
                    <form className="mb-4" onSubmit={handleSaveTask}>
                        <div className="flex flex-col mb-4">
                            <InputText defaultValue={title} name="title" label="Title" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <StatusDropdown value={status} />
                        </div>
                        <div className="flex flex-col mb-4">
                            <MyDateTimePicker value={date} onChange={setDate} />
                        </div>
                        <div className="flex flex-col mb-4">
                            <SubmitButton />
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
export default memo(TaskModal)