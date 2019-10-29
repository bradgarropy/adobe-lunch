import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Rating from "./Rating"
import PriceMeter from "./PriceMeter"
import Button from "../styles/Button"

const StyledVenue = styled.div`
    display: grid;
    justify-items: start;
    justify-content: center;
`

const VenueTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 0 0;
`

const VenueCategories = styled.span`
    font-size: 14px;
    color: ${({theme}) => theme.colors.black75};
    margin: 0 0 10px 0;
`

const Ratings = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-self: stretch;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 130px 0;
`

const Actions = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-self: stretch;
    justify-content: space-between;
`

const Venue = ({venue}) => {
    console.log(venue)

    const {
        bestPhoto,
        name,
        categories,
        price,
        rating,
        ratingColor,
        location,
        menu,
    } = venue

    const {lat, lng} = location

    return (
        <StyledVenue>
            <img
                src={`${bestPhoto.prefix}300x300${bestPhoto.suffix}`}
                alt={name}
            />

            <VenueTitle>{name}</VenueTitle>

            <VenueCategories>
                {categories.map(category => category.shortName).join(", ")}
            </VenueCategories>

            <Ratings>
                <PriceMeter price={price} />
                <Rating rating={rating} color={ratingColor} />
            </Ratings>

            <Actions>
                <a
                    href={`https://www.google.com/maps/dir/?api=1&origin=30.401964,-97.723780&destination=${lat},${lng}&travelmode=walking&dir_action=navigate`}
                >
                    <Button>DIRECTIONS</Button>
                </a>

                {menu && (
                    <a href={menu.url}>
                        <Button secondary>MENU</Button>
                    </a>
                )}
            </Actions>
        </StyledVenue>
    )
}

Venue.propTypes = {
    venue: PropTypes.object.isRequired,
}

export default Venue
