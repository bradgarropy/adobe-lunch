const search = async () => {
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

const suggestion = async () => {
    const response = await fetch("/.netlify/functions/suggestion")
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

const mostpopular = async () => {
    const response = await fetch("/.netlify/functions/mostpopular")
    const json = await response.json()

    return json
}

const leastpopular = async () => {
    const response = await fetch("/.netlify/functions/leastpopular")
    const json = await response.json()

    return json
}

export default {
    search,
    details,
    suggestion,
    accept,
    reject,
    mostpopular,
    leastpopular,
}
