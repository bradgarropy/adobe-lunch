const LATITUDE = "30.401964"
const LONGITUDE = "-97.723780"

const queryParams = params => {
    const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join("&")

    return query
}

module.exports = {
    queryParams,
    LATITUDE,
    LONGITUDE,
}
