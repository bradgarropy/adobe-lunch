import React from "react"
import {useState} from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Venue from "../components/Venue"
import {getRandomElement} from "../utils/utils"
import {venueSearch, venueDetails} from "../utils/foursquare"
import Button from "../styles/Button"
import Foursquare from "../images/foursquare.svg"

const StyledEmpty = styled.div`
    display: grid;
    justify-items: center;
    gap: 10px;
    color: ${({theme}) => theme.colors.black75};
`

const Empty = () => (
    <StyledEmpty>
        <p>Where to eat?</p>
        <Foursquare />
    </StyledEmpty>
)

const Index = () => {
    const [venue, setVenue] = useState()

    const onClick = async () => {
        let data

        data = await venueSearch()
        const {venues} = data.response

        const {id} = getRandomElement(venues)

        data = await venueDetails(id)
        const {venue} = data.response

        setVenue(venue)
    }

    return (
        <Layout>
            <Meta title="Adobe Lunch" />
            <Facebook />
            <Twitter />

            {venue ? (
                <Venue venue={venue} />
            ) : (
                <>
                    <Empty />
                    <Button onClick={onClick}>TELL ME</Button>
                </>
            )}
        </Layout>
    )
}

export default Index
