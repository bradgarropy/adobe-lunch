import React from "react"
import PropTypes from "prop-types"
import {createContext, useState, useContext} from "react"
import {NearbyPlacesContext} from "./index"
import serverless from "../utils/serverless"
import {queryParams, LATITUDE, LONGITUDE} from "../utils/utils"

const PlaceContext = createContext()

const PlaceProvider = ({children}) => {
    const [place, setPlace] = useState()
    const {suggest} = useContext(NearbyPlacesContext)

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
        suggest()
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
