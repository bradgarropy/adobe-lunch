import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Dollar = styled.span`
    font-weight: bold;
    letter-spacing: 3px;
    color: ${({theme, empty}) =>
        empty ? theme.colors.black90 : theme.colors.black};
`

const PriceMeter = ({price}) => {
    const tier = !price ? 0 : price.tier

    return (
        <span>
            <Dollar>{"$".repeat(tier)}</Dollar>
            <Dollar empty>{"$".repeat(4 - tier)}</Dollar>
        </span>
    )
}

PriceMeter.propTypes = {
    price: PropTypes.object,
}

export default PriceMeter
