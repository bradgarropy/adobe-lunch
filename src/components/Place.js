import React from "react"
import styled from "styled-components"
import {useSwipeable} from "react-swipeable"
import Frown from "./Frown"
import Smile from "./Smile"
import Rating from "./Rating"
import PriceMeter from "./PriceMeter"
import Link from "../styles/Link"
import usePlace from "../hooks/usePlace"

const StyledPlace = styled.div`
    display: grid;
    justify-items: start;
    justify-content: center;
`

const PlacePhoto = styled.img`
    justify-self: center;
`

const PlaceTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 0 0;
`

const PlaceCategories = styled.span(
    ({theme}) => `
        font-size: 14px;
        color: ${theme.colors.black75};
        margin: 0 0 10px 0;
    `,
)

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
        <StyledPlace {...handlers}>
            <PlacePhoto
                src={`${bestPhoto.prefix}300x300${bestPhoto.suffix}`}
                alt={name}
            />

            <PlaceTitle>{name}</PlaceTitle>

            <PlaceCategories>
                {categories.map(category => category.shortName).join(", ")}
            </PlaceCategories>

            <Ratings>
                <PriceMeter price={price}/>
                <Rating rating={rating} color={ratingColor}/>
            </Ratings>

            {menu && (
                <Link href={menu.url} target="_blank" rel="noopener noreferrer">
                    Menu
                </Link>
            )}

            <Actions>
                <Smile/>
                <Frown/>
            </Actions>
        </StyledPlace>
    )
}

export default Venue
