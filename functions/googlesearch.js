const {search} = require("./utils/google")

const handler = async() => {
    const data = await search()

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    }

    return response
}

module.exports = {
    handler,
}
