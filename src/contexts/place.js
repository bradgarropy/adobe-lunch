import React from "react"
import PropTypes from "prop-types"
import {createContext, useState, useEffect} from "react"
import serverless from "../utils/serverless"
import {queryParams, LATITUDE, LONGITUDE} from "../utils/utils"

const PlaceContext = createContext()

const PlaceProvider = ({children}) => {
    const [place, setPlace] = useState()

    useEffect(() => {
        const fetch = async () => {
            const newPlace = await serverless.suggestion()
            setPlace(newPlace)
        }

        fetch()
    }, [])

    const accept = () => {
        const {id, location} = place.response.venue
        const {lat, lng} = location

        serverless.accept(id)

        const params = {
            api: 1,
            origin: `${LATITUDE},${LONGITUDE}`,
            destination: `${lat},${lng}`,
            travelmode: "walking",
            dir_action: "navigate",
        }

        const api = "https://www.google.com/maps/dir/"
        const query = queryParams(params)
        const url = `${api}?${query}`

        window.open(url)
    }

    const reject = async () => {
        const {id} = place.response.venue
        serverless.reject(id)

        const newPlace = await serverless.suggestion()
        setPlace(newPlace)
    }

    const context = {
        place,
        setPlace,
        accept,
        reject,
    }

    return (
        <PlaceContext.Provider value={context}>
            {children}
        </PlaceContext.Provider>
    )
}

PlaceProvider.propTypes = {
    children: PropTypes.node,
}

export {PlaceContext, PlaceProvider}
