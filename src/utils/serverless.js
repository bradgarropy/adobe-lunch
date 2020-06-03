const suggestion = async () => {
    const response = await fetch("/api/suggestion")
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

    fetch("/api/accept", options)
    return
}

const reject = async id => {
    const data = {id}

    const options = {
        "method": "POST",
        "Content-Type": "application/json",
        "body": JSON.stringify(data),
    }

    fetch("/api/reject", options)
    return
}

const mostpopular = async () => {
    const response = await fetch("/api/mostpopular")
    const json = await response.json()

    return json
}

const leastpopular = async () => {
    const response = await fetch("/api/leastpopular")
    const json = await response.json()

    return json
}

export default {
    suggestion,
    accept,
    reject,
    mostpopular,
    leastpopular,
}
