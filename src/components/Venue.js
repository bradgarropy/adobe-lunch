import React from "react"
import PropTypes from "prop-types"

const Venue = ({venue}) => {
    console.log(venue)

    const {
        name,
        rating,
        price,
        bestPhoto,
        url,
        contact,
        hours,
        location,
        menu,
        categories,
    } = venue

    return (
        <div>
            <img
                src={`${bestPhoto.prefix}300x300${bestPhoto.suffix}`}
                alt={name}
            />

            <a href={url}>{name}</a>

            {categories.map(category => (
                <p key={category.id}>{category.shortName}</p>
            ))}

            {rating && <p>{rating}</p>}
            {price && <p>{"💲".repeat(price.tier)}</p>}

            <p>{contact.formattedPhone}</p>

            <a href={`https://facebook.com/${contact.facebookUsername}`}>
                Facebook
            </a>
            <a href={`https://twitter.com/${contact.twitter}`}>Twitter</a>
            <a href={`https://instagram.com/${contact.instagram}`}>Instagram</a>

            {hours && <p>{hours.status}</p>}

            <p>{location.formattedAddress[0]}</p>
            <p>{location.formattedAddress[1]}</p>

            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    name,
                )}`}
            >
                Directions
            </a>

            {menu && <a href={menu.url}>Menu</a>}
        </div>
    )
}

Venue.propTypes = {
    venue: PropTypes.object.isRequired,
}

export default Venue
