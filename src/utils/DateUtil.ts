export function toLocaleDate(date: Date) {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export function toLocaleTime(date: Date) {
    return date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    })
}

export function createDate(days: number) {
    let date = new Date()
    date.setDate(date.getDate() + days)
    return date
}

export function getWeek(d: Date) {
    let date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7))
    const firstJan = new Date(Date.UTC(date.getUTCFullYear(), 0, 1))
    return Math.ceil(((+date - +firstJan) / 86400000 + 1) / 7)
}
