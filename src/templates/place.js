import React from "react"
import {graphql} from "gatsby"
import {useContext} from "react"
import PropTypes from "prop-types"
import Place from "../components/Place/Place"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"
import {PlaceContext} from "../contexts"

const PlaceTemplate = ({data}) => {
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
            location {
                lat
                lng
            }
            menu {
                url
            }
        }
    }
`
