import React, { memo } from "react"

function SubmitButton() {
    return (
        <button
            className="btn btn-indigo items-center justify-center"
            type="submit"
        >
            Save
        </button>
    )
}

export default memo(SubmitButton)