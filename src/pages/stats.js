import React from "react"
import {useContext} from "react"
import styled from "styled-components"
import Meta from "../components/SEO/Meta"
import BarChart from "../components/BarChart"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"
import {NearbyPlacesContext, PopularityContext} from "../contexts"

const adjust = entries => {
    if (!entries.length) {
        return []
    }

    const values = entries.map(entry => entry.value)
    const minimum = Math.min(...values)

    if (minimum >= 0) {
        return entries
    }

    const adjusted = entries.map(entry => {
        const value = entry.value + Math.abs(minimum)

        const adjusted = {...entry, value}
        return adjusted
    })

    return adjusted
}

const Charts = styled.div`
    display: grid;
    gap: 50px;
`

const Chart = styled.div`
    display: grid;
    justify-items: center;
`

const Stats = () => {
    const {nearbyPlaces} = useContext(NearbyPlacesContext)
    const {mostPopular, leastPopular} = useContext(PopularityContext)

    if (!mostPopular.length || !leastPopular.length) {
        return null
    }

    const popular = mostPopular.map(({id, accepted, rejected}) => {
        const {name} = nearbyPlaces.find(nearbyPlace => nearbyPlace.id === id)
        const value = accepted - rejected

        const entry = {
            label: name,
            value,
        }

        return entry
    })

    const adjustedPopular = adjust(popular)

    const unpopular = leastPopular.map(({id, accepted, rejected}) => {
        const {name} = nearbyPlaces.find(nearbyPlace => nearbyPlace.id === id)
        const value = rejected - accepted

        const entry = {
            label: name,
            value,
        }

        return entry
    })

    const adjustedUnpopular = adjust(unpopular)

    return (
        <>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            <Charts>
                <Chart>
                    <h1>Most Popular</h1>
                    <BarChart entries={adjustedPopular} sort/>
                </Chart>

                <Chart>
                    <h1>Least Popular</h1>
                    <BarChart entries={adjustedUnpopular} sort/>
                </Chart>
            </Charts>
        </>
    )
}

export default Stats
