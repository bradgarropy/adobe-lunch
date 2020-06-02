const LATITUDE = "30.401964"
const LONGITUDE = "-97.723780"

const queryParams = params => {
    const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join("&")

    return query
}

const getRandomElement = array => {
    const index = Math.floor(Math.random() * array.length)
    const element = array[index]

    return element
}

module.exports = {
    queryParams,
    LATITUDE,
    LONGITUDE,
    getRandomElement,
}
