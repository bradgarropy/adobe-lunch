import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {format} from "../utils/number"

const StyledRating = styled.span(
    ({theme, color}) => `
        font-size: 16px;
        font-weight: bold;
        padding: 2px 8px;
        color: ${theme.colors.white};
        background-color: ${color ? `#${color}` : theme.colors.black90};
    `,
)

const Rating = ({rating, color}) => {
    return (
        <StyledRating color={color}>
            {rating ? format(rating) : "N/A"}
        </StyledRating>
    )
}

Rating.propTypes = {
    rating: PropTypes.number,
    color: PropTypes.string,
}

export default Rating
