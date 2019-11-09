const {details} = require("./utils/google")

const handler = async event => {
    const {id} = JSON.parse(event.body)

    const data = await details(id)

    const response = {
        statusCode: 200,
        body: JSON.stringify(data.result),
    }

    return response
}

module.exports = {
    handler,
}
