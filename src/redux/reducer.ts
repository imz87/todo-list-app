import { ModalActionTypes } from "./actionTypes"
import { ModalAction } from "./actions"

const modalInitialState = {
    modal: false,
    payload: null
}

export function modalReducer(state = modalInitialState, action: ModalAction) {
    switch (action.type) {
        case ModalActionTypes.ShowModal:
            return {
                ...state,
                modal: true,
                payload: action.payload
            }
        case ModalActionTypes.HideModal:
            return {
                ...state,
                modal: false,
                payload: null
            }
        default:
            return state
    }
}
