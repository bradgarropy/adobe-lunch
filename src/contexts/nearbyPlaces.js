import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import {createContext, useState} from "react"

const nearbyPlacesQuery = graphql`
    query NearbyPlaces {
        allPlace(filter: {alternative_id: {ne: null}}) {
            nodes {
                id: alternative_id
                name
                categories {
                    shortName
                }
                location {
                    lat
                    lng
                }
            }
        }
    }
`

const NearbyPlacesContext = createContext()

const NearbyPlacesProvider = ({children}) => {
    const {allPlace} = useStaticQuery(nearbyPlacesQuery)
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
