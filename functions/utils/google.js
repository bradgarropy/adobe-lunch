const fetch = require("node-fetch")
const {queryParams, LATITUDE, LONGITUDE} = require("./utils")

const BASE = "https://maps.googleapis.com/maps/api"
const GROUP = "place"

const search = async({
    latitude = LATITUDE,
    longitude = LONGITUDE,
    radius = 1600,
    type = "restaurant",
} = {}) => {
    const api = `${BASE}/${GROUP}/nearbysearch/json`

    const params = {
        key: process.env.GOOGLE_PLACES_API_KEY,
        location: `${latitude},${longitude}`,
        radius,
        type,
    }

    const query = queryParams(params)
    const url = `${api}?${query}`

    const response = await fetch(url)
    const data = await response.json()

    return data
}

const details = async id => {
    const api = `${BASE}/${GROUP}/details/json`

    const params = {
        key: process.env.GOOGLE_PLACES_API_KEY,
        place_id: id,
    }

    const query = queryParams(params)
    const url = `${api}?${query}`

    const response = await fetch(url)
    const data = await response.json()

    return data
}

const photo = async({reference = "", width = 300, height = 300} = {}) => {
    const api = `${BASE}/${GROUP}/photo`

    const params = {
        key: process.env.GOOGLE_PLACES_API_KEY,
        photo_reference: reference,
        maxwidth: width,
        maxheight: height,
    }

    const query = queryParams(params)
    const url = `${api}?${query}`

    const response = await fetch(url)
    console.log(response)
    const data = await response.text()

    return data
}

module.exports = {
    search,
    details,
    photo,
}
