import { ModalActionTypes } from "./actionTypes"

export interface ModalAction {
    type: ModalActionTypes
    payload?: any
}

export function showModal(): ModalAction {
    return {
        type: ModalActionTypes.ShowModal,
    }
}

export function showEditModal(id: number): ModalAction {
    return {
        type: ModalActionTypes.ShowModal,
        payload: id
    }
}

export function hideModal(): ModalAction {
    return {
        type: ModalActionTypes.HideModal,
    }
}
