import React from "react"
import styled from "styled-components"
import NavLink from "../../styles/NavLink"

const StyledNav = styled.nav`
    font-size: 16px;
`

const Navigation = () => {
    return (
        <StyledNav>
            <NavLink to="/stats">STATS</NavLink>
        </StyledNav>
    )
}

export default Navigation
