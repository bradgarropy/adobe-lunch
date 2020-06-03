import React from "react"
import styled from "styled-components"
import Frown from "./Frown"
import Smile from "./Smile"

const StyledActions = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-self: stretch;
    gap: 24px;
    margin: 50px 0 0 0;
`

const Actions = () => {
    return (
        <StyledActions>
            <Smile />
            <Frown />
        </StyledActions>
    )
}

export default Actions
