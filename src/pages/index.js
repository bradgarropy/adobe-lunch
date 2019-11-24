import React from "react"
import {useContext} from "react"
import styled from "styled-components"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"
import {NearbyPlacesContext} from "../contexts"
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
        <Foursquare/>
    </StyledEmpty>
)

const IndexPage = () => {
    const {suggest} = useContext(NearbyPlacesContext)

    const onClick = () => suggest()

    return (
        <>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            <Empty/>
            <Button onClick={onClick}>TELL ME</Button>
        </>
    )
}

export default IndexPage
