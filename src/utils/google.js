import {queryParams} from "./utils"

const BASE = "https://maps.googleapis.com/maps/api"
const GROUP = "place"

const placeSearch = async ({
    latitude = "30.401964",
    longitude = "-97.723780",
    radius = 1600,
    type = "restaurant",
} = {}) => {
    const api = `${BASE}/${GROUP}/nearbysearch/json`

    const params = {
        key: process.env.GATSBY_PLACES_API_KEY,
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

const placeDetails = async id => {
    const api = `${BASE}/${GROUP}/details/json`

    const params = {
        key: process.env.GATSBY_PLACES_API_KEY,
        place_id: id,
    }

    const query = queryParams(params)
    const url = `${api}?${query}`

    const response = await fetch(url)
    const data = await response.json()

    return data
}

const placePhotos = async ({
    reference = "",
    width = 300,
    height = 300,
} = {}) => {
    const api = `${BASE}/${GROUP}/photo`

    const params = {
        key: process.env.GATSBY_PLACES_API_KEY,
        photo_reference: reference,
        maxwidth: width,
        maxheight: height,
    }

    const query = queryParams(params)
    const url = `${api}?${query}`

    const response = await fetch(url)
    const data = await response.json()

    return data
}

export {placeSearch, placeDetails, placePhotos}
