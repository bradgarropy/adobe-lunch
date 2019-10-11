import React from "react"
import PropTypes from "prop-types"

const Venue = ({venue}) => {
    const {name, rating, price} = venue

    return (
        <div>
            <h2>{name}</h2>
            <p>{rating}</p>
            <p>{price}</p>
        </div>
    )
}

Venue.propTypes = {
    venue: PropTypes.object.isRequired,
}

export default Venue
