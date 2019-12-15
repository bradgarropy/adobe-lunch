import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Logo from "./Logo"

const StyledHeader = styled.header`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledLink to="/">
                <Logo/>
            </StyledLink>
        </StyledHeader>
    )
}

export default Header
