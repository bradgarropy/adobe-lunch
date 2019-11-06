import {list, create, update} from "../utils/airtable"

const accept = async id => {
    let records = await list(`{id}="${id}"`)

    if (!records.length) {
        records = await create(id)
    }

    const record = records[0]
    update(record.id, {accepted: record.fields.accepted + 1})

    return
}

const reject = async id => {
    let records = await list(`{id}="${id}"`)

    if (!records.length) {
        records = await create(id)
    }

    const record = records[0]
    update(record.id, {rejected: record.fields.rejected + 1})

    return
}

export default {accept, reject}
