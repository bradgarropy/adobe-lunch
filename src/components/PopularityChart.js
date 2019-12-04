import React from "react"
import {useContext} from "react"
import PropTypes from "prop-types"
import BarChart from "./BarChart"
import {NearbyPlacesContext} from "../contexts"

const PopularityChart = ({entries = []}) => {
    const {nearbyPlaces} = useContext(NearbyPlacesContext)

    if (!nearbyPlaces.length) {
        return null
    }

    const chartEntries = entries
        .map(entry => {
            const place = nearbyPlaces.find(
                nearbyPlace => nearbyPlace.id === entry.id,
            )

            if (!place) {
                return null
            }

            const chartEntry = {
                label: place.name,
                value: entry.popularity,
            }

            return chartEntry
        })
        .filter(entry => entry)

    return <BarChart entries={chartEntries} sort/>
}

PopularityChart.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
}

export default PopularityChart
