import React from "react"
import {useContext} from "react"
import styled from "styled-components"
import {PlaceContext} from "../contexts"
import Icon from "../images/next.svg"
import {getRandomElement} from "../utils/utils"
import {venueSearch, venueDetails} from "../utils/foursquare"

const StyledIcon = styled(Icon)`
    justify-self: center;
    cursor: pointer;
`

const Next = () => {
    const {setPlace} = useContext(PlaceContext)

    const onClick = async() => {
        let data

        data = await venueSearch()
        const {venues} = data.response

        const {id} = getRandomElement(venues)

        data = await venueDetails(id)
        const {venue} = data.response

        setPlace(venue)
    }

    return <StyledIcon onClick={onClick}/>
}

export default Next
