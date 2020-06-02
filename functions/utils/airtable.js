const Airtable = require("airtable")

const BASE_ID = "app5z2r9qwmnLFp9B"
const BASE_NAME = "places"

const airtable = Airtable.base(BASE_ID)

const list = async ({limit = 100, filter = "", sort = []}) => {
    const options = {
        maxRecords: limit,
        filterByFormula: filter,
        sort,
    }

    const records = await airtable(BASE_NAME).select(options).firstPage()

    return records
}

const create = async id => {
    const record = {
        fields: {
            id,
            accepted: 0,
            rejected: 0,
        },
    }

    const records = await airtable(BASE_NAME).create([record])
    return records
}

const update = async (id, fields) => {
    const update = {
        id,
        fields,
    }

    const records = await airtable(BASE_NAME).update([update])
    return records
}

module.exports = {
    list,
    create,
    update,
}
