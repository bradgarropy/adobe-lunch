import React from "react"
import {Fragment} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {percent} from "../utils/number"

const StyledBarChart = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: end;
    align-items: center;
    gap: 20px;
    width: 50vw;
`

const Label = styled.span`
    justify-self: end;
`

const Bar = styled.div(
    ({theme, percent}) => `
        justify-self: start;
        background-color: ${theme.colors.red};
        min-width: 1%;
        width: ${percent}%;
        height: 40px;
    `,
)

const BarChart = ({entries, sort = false, direction = "desc"}) => {
    if (!entries.length) {
        return null
    }

    if (sort) {
        entries.sort((a, b) => (a.value > b.value ? -1 : 1))

        if (direction === "asc") {
            entries.reverse()
        }
    }

    const maximum = Math.max(...entries.map(entry => entry.value))

    return (
        <StyledBarChart>
            {entries.map((entry, index) => {
                return (
                    <Fragment key={index}>
                        <Label>{entry.label}</Label>
                        <Bar percent={percent(entry.value, maximum)}/>
                    </Fragment>
                )
            })}
        </StyledBarChart>
    )
}

BarChart.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
    sort: PropTypes.bool,
    direction: PropTypes.oneOf(["asc", "desc"]),
}

export default BarChart
