export const calculateHostingTime = (spot) => {
    const today = new Date()
    const spotDate = new Date(spot.createdAt)

    const diff = Math.abs(today - spotDate)
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24))

    // calculate how many years ago
    if (diffDays / 365 > 1) {
        return `${Math.floor(diffDays / 365)} years`

    // if only 1 year
    } else if (diffDays / 365 === 1) {
        return `1 year`

    // if less than a year, how many months ago
    } else if (diffDays / 30 > 1) {
        return `${Math.floor(diffDays / 30)} months`

    // if only one month ago
    } else if (diffDays / 30 === 1) {
        return `1 month`

    // if less than a month, how many days ago
    } else if (diffDays > 1) {
        return `${diffDays} days`

    // if only one day ago
    } else if (diffDays === 1) {
        return `1 day`

    // if today
    } else {
        return "today!"
    }
}