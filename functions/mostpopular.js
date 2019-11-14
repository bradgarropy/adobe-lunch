const {list} = require("./utils/airtable")

const handler = async() => {
    const options = {
        limit: 5,
        sort: [
            {
                field: "accepted",
                direction: "desc",
            },
            {
                field: "rejected",
                direction: "asc",
            },
        ],
    }

    const records = await list(options)

    const response = {
        statusCode: 200,
        body: JSON.stringify(records),
    }

    return response
}

module.exports = {
    handler,
}
