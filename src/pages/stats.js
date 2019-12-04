import React from "react"
import {graphql} from "gatsby"
import {useContext} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"
import PopularityList from "../components/PopularityList"
import PopularityChart from "../components/PopularityChart"
import {NearbyPlacesContext} from "../contexts"

const Charts = styled.div`
    display: grid;
    gap: 50px;
`

const Chart = styled.div`
    display: grid;
    justify-items: center;
`

const Stats = ({data}) => {
    const entries = data.allAirtable.edges.map(edge => edge.node.data)
    console.log(data)
    console.log(entries)

    return (
        <>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            <Charts>
                <Chart>
                    <h1>Popularity List</h1>
                    <PopularityList entries={entries}/>
                </Chart>

                <Chart>
                    <h1>Popularity Chart</h1>
                    <PopularityChart entries={entries}/>
                </Chart>
            </Charts>
        </>
    )
}

Stats.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Stats

export const query = graphql`
    {
        allAirtable {
            edges {
                node {
                    data {
                        accepted
                        id
                        rejected
                        popularity
                    }
                }
            }
        }
    }
`
