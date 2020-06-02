import React from "react"
import styled from "styled-components"
import Foursquare from "../images/foursquare.svg"

const StyledQuota = styled.div`
    display: grid;
    justify-items: center;
    text-align: center;
    gap: 2rem;
    color: ${({theme}) => theme.colors.black75};
`

const Quota = () => (
    <StyledQuota>
        <Foursquare />

        <div>
            <p>Looks like we&apos;re too popular.</p>
            <p>Please try again tomorrow.</p>
        </div>
    </StyledQuota>
)

export default Quota
