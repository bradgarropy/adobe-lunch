import React from "react"
import {useContext} from "react"
import PropTypes from "prop-types"
import {NearbyPlacesContext} from "../contexts"

const PopularityList = ({places = []}) => {
    const {nearbyPlaces} = useContext(NearbyPlacesContext)

    if (!nearbyPlaces.length) {
        return null
    }

    return (
        <ol>
            {places.map(place => {
                const {id, name} = nearbyPlaces.find(
                    nearbyPlace => nearbyPlace.id === place.fields.id,
                )

                return <li key={id}>{name}</li>
            })}
        </ol>
    )
}

PopularityList.propTypes = {
    places: PropTypes.arrayOf(PropTypes.object),
}

export default PopularityList
