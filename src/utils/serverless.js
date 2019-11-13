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

const googlesearch = async() => {
    const response = await fetch("/.netlify/functions/googlesearch")
    const json = await response.json()

    return json
}

const googledetails = async id => {
    const data = {id}

    const options = {
        "method": "POST",
        "Content-Type": "application/json",
        "body": JSON.stringify(data),
    }

    const response = await fetch("/.netlify/functions/googledetails", options)
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

export default {
    accept,
    reject,
    search,
    details,
    googlesearch,
    googledetails,
}
