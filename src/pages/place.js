import React from "react"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import {usePlace} from "../hooks"
import Place from "../components/Place/Place"

const PlacePage = () => {
    const {place} = usePlace()

    if (!place) {
        return null
    }

    return (
        <>
            <SEO title="Adobe Lunch" />

            <Place />
        </>
    )
}

export default PlacePage
