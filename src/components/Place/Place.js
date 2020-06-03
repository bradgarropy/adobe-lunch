import React from "react"
import styled from "styled-components"
import {useSwipeable} from "react-swipeable"
import Quota from "./Quota"
import Actions from "./Actions"
import Details from "./Details"
import {usePlace} from "../../hooks"

const StyledPlace = styled.div`
    display: grid;
    justify-items: start;
    justify-content: center;
`

const Place = () => {
    const {place, accept, reject} = usePlace()
    const {code} = place.meta

    const options = {
        onSwipedLeft: reject,
        onSwipedRight: accept,
    }

    const handlers = useSwipeable(options)

    if (code === 429) {
        return <Quota />
    }

    return (
        <StyledPlace {...handlers}>
            <Details />
            <Actions />
        </StyledPlace>
    )
}

export default Place
