import React from "react"
import {createContext, useState, useEffect} from "react"
import PropTypes from "prop-types"
import serverless from "../utils/serverless"

const NearbyPlacesContext = createContext()

const NearbyPlacesProvider = ({children}) => {
    const [nearbyPlaces, setNearbyPlaces] = useState([])

    useEffect(() => {
        const execute = async() => {
            const newNearbyPlaces = await serverless.search()
            setNearbyPlaces(newNearbyPlaces)
        }

        execute()
    }, [])

    const context = {
        nearbyPlaces,
    }

    return (
        <NearbyPlacesContext.Provider value={context}>
            {children}
        </NearbyPlacesContext.Provider>
    )
}

NearbyPlacesProvider.propTypes = {
    children: PropTypes.node,
}

export {NearbyPlacesContext, NearbyPlacesProvider}
