import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import Navigation from "./Navigation"

const StyledHeader = styled.header`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation/>
        </StyledHeader>
    )
}

export default Header
