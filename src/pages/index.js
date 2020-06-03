import React from "react"
import {navigate} from "gatsby"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Button from "../styles/Button"
import Empty from "../components/Empty"

const IndexPage = () => {
    const onClick = () => navigate("/place")

    return (
        <>
            <SEO title="Adobe Lunch" />

            <Empty />
            <Button onClick={onClick}>TELL ME</Button>
        </>
    )
}

export default IndexPage
