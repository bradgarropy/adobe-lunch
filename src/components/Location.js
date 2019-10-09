import React from "react"
import PropTypes from "prop-types"

const Location = ({location}) => {
    const {name, rating, price} = location

    return (
        <div>
            <h2>{name}</h2>
            <p>{rating}</p>
            <p>{price}</p>
        </div>
    )
}

Location.propTypes = {
    location: PropTypes.object.isRequired,
}

export default Location
