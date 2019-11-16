import React from "react"
import PropTypes from "prop-types"

const PopularityList = ({places}) => {
    return (
        <ol>
            {places.map(place => (
                <li key={place.fields.id}>{place.fields.id}</li>
            ))}
        </ol>
    )
}

PopularityList.propTypes = {
    places: PropTypes.arrayOf(PropTypes.object),
}

export default PopularityList
