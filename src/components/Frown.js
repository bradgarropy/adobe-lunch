import React from "react"
import {useContext} from "react"
import {PlaceContext} from "../contexts"
import Button from "../styles/Button"
import Icon from "../images/frown.svg"
import {getRandomElement} from "../utils/utils"
import {venueSearch, venueDetails} from "../utils/foursquare"

const Frown = () => {
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

    return (
        <Button secondary onClick={onClick}>
            <Icon/>
        </Button>
    )
}

export default Frown
