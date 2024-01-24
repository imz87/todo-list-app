import { memo } from "react"

type Props = { value: string; isOrange: boolean }

const badge = function Badge({ value, isOrange }: Props) {
    const badgeClassName = isOrange ? "badge-orange" : "badge-indigo"
    return <span className={badgeClassName}>{value}</span>
}
export default memo(badge)
