import { combineReducers, createStore } from "redux"
import { modalReducer } from "./reducer"

const rootReducer = combineReducers({
    modalReducer,
})

const store = createStore(rootReducer)

export default store
