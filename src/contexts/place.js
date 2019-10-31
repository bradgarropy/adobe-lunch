import React from "react"
import PropTypes from "prop-types"
import {createContext, useState} from "react"

const PlaceContext = createContext()

const PlaceProvider = ({children}) => {
    const [place, setPlace] = useState()

    const context = {
        place,
        setPlace,
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
