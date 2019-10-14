import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Placeholder = styled.span`
    opacity: 0.2;
`

const PriceMeter = ({price}) => {
    if (!price) {
        return null
    }

    const {tier} = price

    return (
        <p>
            <span>{"💲".repeat(tier)}</span>
            <Placeholder>{"💲".repeat(4 - tier)}</Placeholder>
        </p>
    )
}

PriceMeter.propTypes = {
    price: PropTypes.object,
}

export default PriceMeter
