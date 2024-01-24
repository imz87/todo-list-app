import { memo } from "react"

type Props = { defaultValue: string, name: string, label: string }

function InputText(props: Props) {
    return (
        <>
            <label className="modal-label" htmlFor={props.name}>
                {props.label}
            </label>
            <input
                className="text-grey-darkest px-3 py-2 border"
                type="text"
                name={props.name}
                id={props.name}
                defaultValue={props.defaultValue}
            />
        </>
    )
}
export default memo(InputText)
