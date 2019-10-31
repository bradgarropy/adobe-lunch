import React from "react"
import styled from "styled-components"
import Icon from "../images/next.svg"

const StyledIcon = styled(Icon)`
    justify-self: center;
    cursor: pointer;
`

const Next = () => {
    const onClick = () => {
        console.log("onClick")
    }

    return <StyledIcon onClick={onClick}/>
}

export default Next
