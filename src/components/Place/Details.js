import React from "react"
import styled from "styled-components"
import Photo from "./Photo"
import Rating from "./Rating"
import {usePlace} from "../../hooks"
import Link from "../../styles/Link"
import PriceMeter from "./PriceMeter"

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

const Details = () => {
    const {place} = usePlace()
    const {venue} = place.response

    const {
        bestPhoto,
        name,
        categories,
        price,
        rating,
        ratingColor,
        menu,
    } = venue

    return (
        <>
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
        </>
    )
}

export default Details
