import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledRating = styled.span`
    font-size: 16px;
    font-weight: bold;
    padding: 2px 8px;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({color}) => `#${color}`};
`

const Rating = ({rating, color}) => (
    <StyledRating color={color}>{rating}</StyledRating>
)

Rating.propTypes = {
    rating: PropTypes.number,
    color: PropTypes.string,
}

export default Rating
