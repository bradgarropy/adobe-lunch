import React from "react"
import Button from "../styles/Button"
import Icon from "../images/frown.svg"
import usePlace from "../hooks/usePlace"

const Frown = () => {
    const {reject} = usePlace()

    return (
        <Button secondary onClick={reject}>
            <Icon/>
        </Button>
    )
}

export default Frown
