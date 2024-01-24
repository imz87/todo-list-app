import { StatusType } from "../types"

type Props = { value: string }

export function StatusDropdown({ value }: Props) {
    console.log("StatusDropdown")
    return <>
        <label className="modal-label" htmlFor="status">
            Status
        </label>
        <select
            defaultValue={value}
            className="text-grey-darkest px-3 py-2 border"
            name="status"
            id="status"
        >
            {Object.keys(StatusType).map((s) => (
                <option value={s} id={s} key={s}>
                    {StatusType[s as keyof typeof StatusType]}
                </option>
            ))}
        </select>
    </>
}