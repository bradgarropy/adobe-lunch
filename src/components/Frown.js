import React from "react"
import {useContext} from "react"
import {PlaceContext} from "../contexts"
import Button from "../styles/Button"
import Icon from "../images/frown.svg"

const Frown = () => {
    const {reject} = useContext(PlaceContext)

    return (
        <Button secondary onClick={reject}>
            <Icon/>
        </Button>
    )
}

export default Frown
