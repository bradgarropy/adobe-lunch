import React from "react"
import {useContext} from "react"
import Button from "../styles/Button"
import Icon from "../images/smile.svg"
import {PlaceContext} from "../contexts"
import {queryParams, LATITUDE, LONGITUDE} from "../utils/utils"

const Smile = () => {
    const {place} = useContext(PlaceContext)

    const {lat, lng} = place.location

    const params = {
        api: 1,
        origin: `${LATITUDE},${LONGITUDE}`,
        destination: `${lat},${lng}`,
        travelmode: "walking",
        dir_action: "navigate",
    }

    const api = "https://www.google.com/maps/dir/"
    const query = queryParams(params)
    const url = `${api}?${query}`

    const onClick = () => {
        window.open(url)
    }

    return (
        <Button onClick={onClick}>
            <Icon/>
        </Button>
    )
}

export default Smile
