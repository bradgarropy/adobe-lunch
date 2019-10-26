import React from "react"
import styled from "styled-components"
import Adobe from "../images/adobe.svg"

const StyledHeader = styled.header`
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    color: ${({theme}) => theme.colors.black};
    padding: 12px 16px;
    font-size: 24px;
    gap: 4px;
`

const Header = () => {
    return (
        <StyledHeader>
            <Adobe/>
            <span>LUNCH</span>
        </StyledHeader>
    )
}

export default Header
