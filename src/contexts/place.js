import React from "react"
import PropTypes from "prop-types"
import {createContext, useState, useContext} from "react"
import {navigate} from "gatsby"
import {NearbyPlacesContext} from "./index"
import {
    getRandomElement,
    queryParams,
    LATITUDE,
    LONGITUDE,
} from "../utils/utils"
import serverless from "../utils/serverless"

const PlaceContext = createContext()

const PlaceProvider = ({children}) => {
    const [place, setPlace] = useState()
    const {nearbyPlaces} = useContext(NearbyPlacesContext)

    const accept = () => {
        serverless.accept(place.id)

        const {lat, lng} = place.location

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

    const reject = async() => {
        serverless.reject(place.id)

        const {id} = getRandomElement(nearbyPlaces)
        navigate(`/place/${id}`)
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
