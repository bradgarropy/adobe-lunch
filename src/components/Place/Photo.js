import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledPhoto = styled.img`
    justify-self: center;
    width: 300px;
    height: 300px;
`

const Placeholder = styled.div(
    ({theme}) => `
        display: grid;
        align-content: center;
        justify-content: center;
        justify-self: center;
        font-size: 16px;
        font-weight: bold;
        width: 300px;
        height: 300px;
        color: ${theme.colors.white};
        background-color: ${theme.colors.black90};
    `,
)

const Photo = ({photo}) => {
    if (!photo) {
        return <Placeholder>No Photo</Placeholder>
    }

    const {prefix, suffix} = photo

    return <StyledPhoto src={`${prefix}300x300${suffix}`} alt={name}/>
}

Photo.propTypes = {
    photo: PropTypes.object,
}

export default Photo
