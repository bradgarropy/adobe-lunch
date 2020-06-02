import React from "react"
import Empty from "../components/Empty"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"
import ButtonLink from "../styles/ButtonLink"

const IndexPage = () => {
    return (
        <>
            <Meta title="Adobe Lunch" />
            <Facebook />
            <Twitter />

            <Empty />
            <ButtonLink to="/place">TELL ME</ButtonLink>
        </>
    )
}

export default IndexPage
