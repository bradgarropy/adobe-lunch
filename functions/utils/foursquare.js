const fetch = require("node-fetch")
const {queryParams, LATITUDE, LONGITUDE} = require("./utils")

const BASE = "https://api.foursquare.com/v2"
const GROUP = "venues"
const VERSION = "20191010"

const search = async({
    latitude = LATITUDE,
    longitude = LONGITUDE,
    intent = "browse",
    radius = 1600,
    limit = 50,
    categoryId = "4d4b7105d754a06374d81259",
} = {}) => {
    const api = `${BASE}/${GROUP}/search`

    const params = {
        client_id: process.env.FOURSQUARE_CLIENT_ID,
        client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
        v: VERSION,
        ll: `${latitude},${longitude}`,
        intent,
        radius,
        limit,
        categoryId,
    }

    const query = queryParams(params)

    const url = `${api}?${query}`

    const response = await fetch(url)
    const data = await response.json()

    return data
}

const details = async id => {
    const api = `${BASE}/${GROUP}`

    const params = {
        client_id: process.env.FOURSQUARE_CLIENT_ID,
        client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
        v: VERSION,
    }

    const query = queryParams(params)

    const url = `${api}/${id}?${query}`

    const response = await fetch(url)
    const data = await response.json()

    return data
}

module.exports = {search, details}
