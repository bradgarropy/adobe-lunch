import React from "react"
import styled from "styled-components"
import BG from "../../images/bg.svg"

const StyledBuildBy = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 5px;

    svg {
        width: 24px;
        height: auto;
        display: block;
    }
`

const BuiltBy = () => {
    return (
        <StyledBuildBy>
            <span>built by</span>

            <a href="https://bradgarropy.com">
                <BG/>
            </a>
        </StyledBuildBy>
    )
}

export default BuiltBy
