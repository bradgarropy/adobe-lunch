const {getRandomElement} = require("./utils/utils")
const {search, details} = require("./utils/foursquare")

const handler = async req => {
    const options = JSON.parse(req.body)

    const data = await search(options)

    const places = data.response.venues
    const place = getRandomElement(places)
    const placeDetails = await details(place.id)

    const response = {
        statusCode: 200,
        body: JSON.stringify(placeDetails),
    }

    return response
}

module.exports = {
    handler,
}
