const getLocation = () => {
    const promise = new Promise(resolve => {
        const success = position => {
            const location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }

            resolve(location)
        }

        const options = {enableHighAccuracy: true}

        navigator.geolocation.getCurrentPosition(success, null, options)
    })

    return promise
}

export {getLocation}
