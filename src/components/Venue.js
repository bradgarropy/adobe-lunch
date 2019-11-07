import React from "react"
import styled from "styled-components"
import {useSwipeable} from "react-swipeable"
import Frown from "./Frown"
import Smile from "./Smile"
import Rating from "./Rating"
import PriceMeter from "./PriceMeter"
import A from "../styles/A"
import usePlace from "../hooks/usePlace"

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
    grid-template-columns: repeat(2, 1fr);
    justify-self: stretch;
    gap: 24px;
    margin: 50px 0 0 0;
`

const Venue = () => {
    const {place, accept, reject} = usePlace()

    const {
        bestPhoto,
        name,
        categories,
        price,
        rating,
        ratingColor,
        menu,
    } = place

    const options = {
        onSwipedLeft: reject,
        onSwipedRight: accept,
    }

    const handlers = useSwipeable(options)

    return (
        <StyledVenue {...handlers}>
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
                <Smile/>
                <Frown/>
            </Actions>
        </StyledVenue>
    )
}

export default Venue
