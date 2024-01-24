import React from "react"
// @ts-ignore
import DateTimePicker from "react-datetime-picker"

export function MyDateTimePicker(props: { value: Date, onChange: (date: Date) => void }) {
    return <>
        <label className="modal-label" htmlFor="date">
            Date
        </label>
        <DateTimePicker
            id="date"
            name="date"
            className="text-grey-darkest px-3 py-2 border"
            value={props.value}
            onChange={props.onChange}
        />
    </>
}