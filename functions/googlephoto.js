const {photo} = require("./utils/google")

const handler = async event => {
    const {reference} = JSON.parse(event.body)

    const data = await photo({reference})

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    }

    return response
}

module.exports = {
    handler,
}
