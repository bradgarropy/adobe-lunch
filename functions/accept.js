const {list, create, update} = require("./utils/airtable")

const handler = async event => {
    const {id} = JSON.parse(event.body)

    let records = await list(`{id}="${id}"`)

    if (!records.length) {
        records = await create(id)
    }

    const record = records[0]
    const updatedRecords = await update(record.id, {
        accepted: record.fields.accepted + 1,
    })

    const response = {
        statusCode: 200,
        body: JSON.stringify(updatedRecords[0]),
    }

    return response
}

module.exports = {
    handler,
}
