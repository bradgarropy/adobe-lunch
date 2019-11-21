const search = async() => {
    const response = await fetch("/.netlify/functions/search")
    const json = await response.json()

    return json
}

const details = async id => {
    const data = {id}

    const options = {
        "method": "POST",
        "Content-Type": "application/json",
        "body": JSON.stringify(data),
    }

    const response = await fetch("/.netlify/functions/details", options)
    const json = await response.json()

    return json
}

const accept = async id => {
    const data = {id}

    const options = {
        "method": "POST",
        "Content-Type": "application/json",
        "body": JSON.stringify(data),
    }

    fetch("/.netlify/functions/accept", options)
    return
}

const reject = async id => {
    const data = {id}

    const options = {
        "method": "POST",
        "Content-Type": "application/json",
        "body": JSON.stringify(data),
    }

    fetch("/.netlify/functions/reject", options)
    return
}

const mostpopular = async() => {
    const response = await fetch("/.netlify/functions/mostpopular")
    const records = await response.json()

    const mostPopularPlaces = records.map(record => record.fields)
    return mostPopularPlaces
}

const leastpopular = async() => {
    const response = await fetch("/.netlify/functions/leastpopular")
    const records = await response.json()

    const leastPopularPlaces = records.map(record => record.fields)
    return leastPopularPlaces
}

export default {
    search,
    details,
    accept,
    reject,
    mostpopular,
    leastpopular,
}
