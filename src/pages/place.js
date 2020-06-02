import React from "react"
import Meta from "../components/SEO/Meta"
import Place from "../components/Place/Place"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"

const PlacePage = () => {
    return (
        <>
            <Meta title="Adobe Lunch" />
            <Facebook />
            <Twitter />

            <Place />
        </>
    )
}

export default PlacePage
