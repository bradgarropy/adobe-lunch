const getRandomElement = array => {
    const index = Math.floor(Math.random() * array.length)
    const element = array[index]

    return element
}

const queryParams = params => {
    const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join("&")

    return query
}

export {getRandomElement, queryParams}
