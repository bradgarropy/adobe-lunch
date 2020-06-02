import React from "react"
import {usePlace} from "../hooks"
import Button from "../styles/Button"
import Icon from "../images/smile.svg"

const Smile = () => {
    const {accept} = usePlace()

    return (
        <Button onClick={accept}>
            <Icon />
        </Button>
    )
}

export default Smile
