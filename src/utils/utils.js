const LATITUDE = "30.401964"
const LONGITUDE = "-97.723780"

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

export {getRandomElement, queryParams, LATITUDE, LONGITUDE}
