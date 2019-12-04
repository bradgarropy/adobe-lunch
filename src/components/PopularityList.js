import React from "react"
import {useContext} from "react"
import PropTypes from "prop-types"
import {NearbyPlacesContext} from "../contexts"
import {format} from "../utils/number"

const PopularityList = ({entries = []}) => {
    const {nearbyPlaces} = useContext(NearbyPlacesContext)

    if (!nearbyPlaces.length) {
        return null
    }

    const sortedEntries = entries.sort((a, b) =>
        a.popularity > b.popularity ? -1 : 1,)

    return (
        <ol>
            {sortedEntries
                .map(entry => {
                    const place = nearbyPlaces.find(
                        nearbyPlace => nearbyPlace.id === entry.id,
                    )

                    if (!place) {
                        return null
                    }

                    const {id, name} = place
                    return (
                        <li key={id}>{`${name} (${format(
                            entry.popularity,
                        )}%)`}</li>
                    )
                })
                .filter(entry => entry)}
        </ol>
    )
}

PopularityList.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
}

export default PopularityList
