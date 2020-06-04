import React from "react"
import PropTypes from "prop-types"
import {createContext, useState, useEffect} from "react"
import serverless from "../utils/serverless"
import {getLocation} from "../utils/location"
import {queryParams} from "../utils/utils"

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

    const accept = async () => {
        const {id, location} = place.response.venue

        const origin = await getLocation()

        const params = {
            api: 1,
            origin: `${origin.latitude},${origin.longitude}`,
            destination: `${location.lat},${location.lng}`,
            travelmode: "walking",
            dir_action: "navigate",
        }

        const api = "https://www.google.com/maps/dir/"
        const query = queryParams(params)
        const url = `${api}?${query}`

        serverless.accept(id)
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
