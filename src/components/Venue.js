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
        name,
        rating,
        ratingColor,
        price,
        bestPhoto,
        menu,
        categories,
    } = venue

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
                <PriceMeter price={price}/>
                <Rating rating={rating} color={ratingColor}/>
            </Ratings>

            <Actions>
                <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        name,
                    )}`}
                >
                    <Button>DIRECTIONS</Button>
                </a>

                {menu ? (
                    <a href={menu.url}>
                        <Button secondary>MENU</Button>
                    </a>
                ) : null}
            </Actions>
        </StyledVenue>
    )
}

Venue.propTypes = {
    venue: PropTypes.object.isRequired,
}

export default Venue
