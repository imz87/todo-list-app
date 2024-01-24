import { FilterBy } from "../types"
import { memo } from "react"

function DateButtonGroup({handleOnClick, className}: {handleOnClick: any, className?: string}) {
    console.log("DateButtonGroup")
    return (
        <div className={className}>
            <div className="inline-flex">
                <button
                    onClick={() => handleOnClick(FilterBy.MONTH)}
                    className="focus:text-blue-400 rounded-l-md px-4 py-2 text-gray-800 border-t-2 border-b-2 border-l-2"
                >
                    Month
                </button>
                <button
                    onClick={() => handleOnClick(FilterBy.WEEK)}
                    className="focus:text-blue-400 px-4 py-2 text-gray-800 border-t-2 border-b-2 border-l-2"
                >
                    Week
                </button>
                <button
                    onClick={() => handleOnClick(FilterBy.DAY)}
                    className="focus:text-blue-400 rounded-r-md px-4 py-2 text-gray-800 border-t-2 border-b-2 border-l-2 border-r-2"
                >
                    Day
                </button>
            </div>
        </div>
    )
}

export default memo(DateButtonGroup)
