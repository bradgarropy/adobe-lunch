import React from "react"
import styled from "styled-components"
import {useSwipeable} from "react-swipeable"
import Photo from "./Photo"
import Frown from "../Frown"
import Quota from "../Quota"
import Smile from "../Smile"
import Rating from "./Rating"
import {usePlace} from "../../hooks"
import PriceMeter from "./PriceMeter"
import Link from "../../styles/Link"

const StyledPlace = styled.div`
    display: grid;
    justify-items: start;
    justify-content: center;
`

const PlaceTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 0 0;
`

const PlaceCategories = styled.span`
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

const Place = () => {
    const {place, accept, reject} = usePlace()
    console.log("place", place)

    const options = {
        onSwipedLeft: reject,
        onSwipedRight: accept,
    }

    const handlers = useSwipeable(options)

    if (!place) {
        return null
    }

    if (place.meta.code === 429) {
        return <Quota />
    }

    const {
        bestPhoto,
        name,
        categories,
        price,
        rating,
        ratingColor,
        menu,
    } = place

    return (
        <StyledPlace {...handlers}>
            <Photo photo={bestPhoto} />

            <PlaceTitle>{name}</PlaceTitle>

            <PlaceCategories>
                {categories.map(category => category.shortName).join(", ")}
            </PlaceCategories>

            <Ratings>
                <PriceMeter price={price} />
                <Rating rating={rating} color={ratingColor} />
            </Ratings>

            {menu && (
                <Link href={menu.url} target="_blank" rel="noopener noreferrer">
                    Menu
                </Link>
            )}

            <Actions>
                <Smile />
                <Frown />
            </Actions>
        </StyledPlace>
    )
}

export default Place