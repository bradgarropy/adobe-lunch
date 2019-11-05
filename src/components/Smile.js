import React from "react"
import Button from "../styles/Button"
import Icon from "../images/smile.svg"
import usePlace from "../hooks/usePlace"

const Smile = () => {
    const {accept} = usePlace()

    return (
        <Button onClick={accept}>
            <Icon/>
        </Button>
    )
}

export default Smile
