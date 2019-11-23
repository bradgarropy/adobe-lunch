import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import {createContext, useState} from "react"

const NearbyPlacesContext = createContext()

const NearbyPlacesProvider = ({children}) => {
    const {allPlace} = useStaticQuery(query)
    const [nearbyPlaces] = useState(allPlace.nodes)

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

const query = graphql`
    {
        allPlace(filter: {alternative_id: {ne: null}}) {
            nodes {
                id: alternative_id
            }
        }
    }
`
