import React from "react"
import {graphql} from "gatsby"
import {useContext} from "react"
import PropTypes from "prop-types"
import Place from "../components/Place"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"
import {PlaceContext} from "../contexts"

const PlaceTemplate = ({pageContext, data}) => {
    console.log(pageContext)
    console.log(data)
    const {setPlace} = useContext(PlaceContext)
    setPlace(data.place)

    return (
        <>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            <Place/>
        </>
    )
}

PlaceTemplate.propTypes = {
    pageContext: PropTypes.object,
    data: PropTypes.object,
}

export default PlaceTemplate

export const query = graphql`
    query NearbyPlaceDetails($id: String!) {
        place(alternative_id: {eq: $id}) {
            name
            alternative_id
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
