import React from "react"
import {useContext} from "react"
import {PlaceContext} from "../contexts"
import Button from "../styles/Button"
import Icon from "../images/smile.svg"

const Smile = () => {
    const {accept} = useContext(PlaceContext)

    return (
        <Button onClick={accept}>
            <Icon/>
        </Button>
    )
}

export default Smile
