import React from "react"
import styled from "styled-components"
import BuiltBy from "./BuiltBy"

const StyledFooter = styled.footer`
    display: grid;
    justify-content: end;
    color: ${({theme}) => theme.colors.black};
`

const Footer = () => {
    return (
        <StyledFooter>
            <BuiltBy/>
        </StyledFooter>
    )
}

export default Footer
