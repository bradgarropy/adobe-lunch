import React from "react"
import PropTypes from "prop-types"
import Place from "../components/Place"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"

const PlaceTemplate = ({pageContext}) => {
    console.log(pageContext)

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
}

export default PlaceTemplate
