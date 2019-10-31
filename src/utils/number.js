const format = number => {
    const options = {minimumFractionDigits: 1}

    const formatter = new Intl.NumberFormat("default", options)
    const formatted = formatter.format(number)

    return formatted
}

export {format}
