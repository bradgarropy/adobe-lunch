import React from "react"
import {usePlace} from "../hooks"
import Button from "../styles/Button"
import Icon from "../images/frown.svg"

const Frown = () => {
    const {reject} = usePlace()

    return (
        <Button secondary onClick={reject}>
            <Icon />
        </Button>
    )
}

export default Frown
