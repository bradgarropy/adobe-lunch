const {search, details} = require("./utils/foursquare")

const handler = async() => {
    const data = await search()
    const places = data.response.venues

    const promises = places.slice(0, 5).map(place => details(place.id))
    const resolved = await Promise.all(promises)
    const nearby = resolved.map(data => data.response.venue)

    const response = {
        statusCode: 200,
        body: JSON.stringify(nearby),
    }

    return response
}

module.exports = {
    handler,
}
