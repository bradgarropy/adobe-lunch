const format = number => {
    const options = {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
    }

    const formatter = new Intl.NumberFormat("default", options)
    const formatted = formatter.format(number)

    return formatted
}

const percent = (numerator, denominator) => {
    const decimal = numerator / denominator
    const percent = decimal * 100

    return percent
}

export {format, percent}
