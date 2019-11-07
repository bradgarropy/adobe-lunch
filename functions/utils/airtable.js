const fetch = require("node-fetch")
const {queryParams} = require("./utils")

const BASE_ID = "app5z2r9qwmnLFp9B"
const BASE_NAME = "places"
const API = `https://api.airtable.com/v0/${BASE_ID}/${BASE_NAME}`

const list = async filter => {
    const params = {
        filterByFormula: encodeURIComponent(filter),
    }

    const query = queryParams(params)
    const url = `${API}?${query}`

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`,
    }

    const options = {
        method: "GET",
        headers,
    }

    const response = await fetch(url, options)
    const {records} = await response.json()

    return records
}

const create = async id => {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`,
    }

    const data = {
        records: [
            {
                fields: {
                    id,
                    accepted: 0,
                    rejected: 0,
                },
            },
        ],
    }

    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(data),
    }

    const response = await fetch(API, options)
    const {records} = await response.json()

    return records
}

const update = async(id, fields) => {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`,
    }

    const data = {
        records: [
            {
                id,
                fields,
            },
        ],
    }

    const options = {
        method: "PATCH",
        headers,
        body: JSON.stringify(data),
    }

    const response = await fetch(API, options)
    const {records} = await response.json()

    return records
}

module.exports = {
    list,
    create,
    update,
}
