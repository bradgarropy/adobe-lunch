import React from "react"
import Adobe from "../../images/adobe.svg"
import styled from "styled-components"

const StyledLogo = styled.span(
    ({theme}) => `
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        color: ${theme.colors.black};
        font-size: 24px;
        gap: 4px;
    `,
)

const Logo = () => {
    return (
        <StyledLogo>
            <Adobe/>
            <span>LUNCH</span>
        </StyledLogo>
    )
}

export default Logo
