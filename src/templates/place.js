import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import Place from "../components/Place"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"

const PlaceTemplate = ({data}) => {
    const {place} = data

    return (
        <>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            <Place place={place}/>
        </>
    )
}

PlaceTemplate.propTypes = {
    data: PropTypes.object,
}

export default PlaceTemplate

export const query = graphql`
    query($id: String!) {
        place(alternative_id: {eq: $id}) {
            name
            id: alternative_id
            bestPhoto {
                prefix
                suffix
            }
            categories {
                shortName
            }
            price {
                tier
            }
            rating
            ratingColor
            menu {
                url
            }
        }
    }
`
