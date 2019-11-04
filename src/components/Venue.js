import React from "react"
import {useContext} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Next from "./Next"
import Rating from "./Rating"
import PriceMeter from "./PriceMeter"
import {PlaceContext} from "../contexts"
import A from "../styles/A"
import Button from "../styles/Button"
import {queryParams, LATITUDE, LONGITUDE} from "../utils/utils"

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
`

const Actions = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-self: stretch;
    justify-content: space-between;
    margin: 50px 0;
`

const Venue = () => {
    const {place} = useContext(PlaceContext)

    const {
        bestPhoto,
        name,
        categories,
        price,
        rating,
        ratingColor,
        location,
        menu,
    } = place

    const {lat, lng} = location

    const params = {
        api: 1,
        origin: `${LATITUDE},${LONGITUDE}`,
        destination: `${lat},${lng}`,
        travelmode: "walking",
        dir_action: "navigate",
    }

    const api = "https://www.google.com/maps/dir/"
    const query = queryParams(params)
    const url = `${api}?${query}`

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

            {menu && (
                <A href={menu.url} target="_blank" rel="noopener noreferrer">
                    Menu
                </A>
            )}

            <Actions>
                <Button>YES</Button>
                <Button>NO</Button>
            </Actions>

            <Next/>
        </StyledVenue>
    )
}

Venue.propTypes = {
    venue: PropTypes.object.isRequired,
}

export default Venue
