const BASE = "https://api.foursquare.com/v2"
const GROUP = "venues"
const ENDPOINT = "search"
const VERSION = "20191010"

const venueSearch = async({
    latitude = "30.401964",
    longitude = "-97.723780",
    intent = "browse",
    radius = 1600,
    limit = 50,
    categoryId = "4d4b7105d754a06374d81259",
} = {}) => {
    const api = `${BASE}/${GROUP}/${ENDPOINT}`

    const params = {
        client_id: process.env.GATSBY_CLIENT_ID,
        client_secret: process.env.GATSBY_CLIENT_SECRET,
        v: VERSION,
        ll: `${latitude},${longitude}`,
        intent,
        radius,
        limit,
        categoryId,
    }

    const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join("&")

    const url = `${api}?${query}`

    const response = await fetch(url)
    const data = await response.json()

    return data
}

const venueDetails = () => {}

export {venueSearch, venueDetails}
