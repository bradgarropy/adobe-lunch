const queryParams = params => {
    const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join("&")

    return query
}

module.exports = {queryParams}
