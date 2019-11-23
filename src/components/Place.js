import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {useSwipeable} from "react-swipeable"
import Frown from "./Frown"
import Smile from "./Smile"
import Rating from "./Rating"
import PriceMeter from "./PriceMeter"
import usePlace from "../hooks/usePlace"
import A from "../styles/A"

const StyledPlace = styled.div`
    display: grid;
    justify-items: start;
    justify-content: center;
`

const PlacePhoto = styled.img`
    justify-self: center;
    width: 300px;
    height: 300px;
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

const Place = ({place}) => {
    const {accept, reject} = usePlace(place)

    const options = {
        onSwipedLeft: reject,
        onSwipedRight: accept,
    }

    const handlers = useSwipeable(options)

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
                <A href={menu.url} target="_blank" rel="noopener noreferrer">
                    Menu
                </A>
            )}

            <Actions>
                <Smile/>
                <Frown/>
            </Actions>
        </StyledPlace>
    )
}

Place.propTypes = {
    place: PropTypes.object.isRequired,
}

export default Place
