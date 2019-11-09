const {details} = require("./utils/foursquare")

const handler = async event => {
    const {id} = JSON.parse(event.body)

    const data = await details(id)

    const response = {
        statusCode: 200,
        body: JSON.stringify(data.response.venue),
    }

    return response
}

module.exports = {
    handler,
}
