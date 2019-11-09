const {search} = require("./utils/foursquare")

const handler = async() => {
    const data = await search()

    const response = {
        statusCode: 200,
        body: JSON.stringify(data.response.venues),
    }

    return response
}

module.exports = {
    handler,
}
