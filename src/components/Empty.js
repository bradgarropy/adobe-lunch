import React from "react"
import styled from "styled-components"
import Foursquare from "../images/foursquare.svg"

const StyledEmpty = styled.div(
    ({theme}) => `
        display: grid;
        justify-items: center;
        gap: 10px;
        color: ${theme.colors.black75};
        margin-bottom: 50px;
    `,
)

const Empty = () => (
    <StyledEmpty>
        <p>Where to eat?</p>
        <Foursquare/>
    </StyledEmpty>
)

export default Empty
