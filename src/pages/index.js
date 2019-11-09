import React from "react"
import {useContext} from "react"
import styled from "styled-components"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Place from "../components/Place"
import {PlaceContext} from "../contexts"
import serverless from "../utils/serverless"
import {getRandomElement} from "../utils/utils"
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

const Index = () => {
    const {place, setPlace} = useContext(PlaceContext)

    const onClick = async() => {
        const places = await serverless.search()
        const {id} = getRandomElement(places)

        const newPlace = await serverless.details(id)
        setPlace(newPlace)
    }

    return (
        <>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            {place ? (
                <Place/>
            ) : (
                <>
                    <Empty/>
                    <Button onClick={onClick}>TELL ME</Button>
                </>
            )}
        </>
    )
}

export default Index
