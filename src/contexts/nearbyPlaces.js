import React from "react"
import PropTypes from "prop-types"
import {createContext, useState} from "react"
import {navigate, useStaticQuery, graphql} from "gatsby"
import {getRandomElement} from "../utils/utils"

const NearbyPlacesContext = createContext()

const NearbyPlacesProvider = ({children}) => {
    const {allPlace} = useStaticQuery(query)
    const [nearbyPlaces] = useState(allPlace.nodes)

    const suggest = () => {
        const {id} = getRandomElement(nearbyPlaces)
        navigate(`/place/${id}`)
    }

    const context = {
        nearbyPlaces,
        suggest,
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

const query = graphql`
    {
        allPlace(filter: {alternative_id: {ne: null}}) {
            nodes {
                id: alternative_id
            }
        }
    }
`
