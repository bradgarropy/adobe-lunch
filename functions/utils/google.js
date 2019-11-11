const Google = require("@google/maps")
const {LATITUDE, LONGITUDE} = require("./utils")

const google = Google.createClient({
    key: process.env.GOOGLE_PLACES_API_KEY,
    Promise: Promise,
})

const search = async({
    latitude = LATITUDE,
    longitude = LONGITUDE,
    radius = 1600,
    type = "restaurant",
} = {}) => {
    const query = {
        location: {latitude, longitude},
        radius,
        type,
    }

    const response = await google.places(query).asPromise()
    const places = response.json.results

    return places
}

const details = async id => {
    const query = {
        placeid: id,
    }

    const response = await google.place(query).asPromise()
    const place = response.json.result

    return place
}

module.exports = {
    search,
    details,
}
