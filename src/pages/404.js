import React from "react"
import {Link} from "gatsby"
import SEO from "@bradgarropy/gatsby-plugin-seo"

const NotFoundPage = () => {
    return (
        <>
            <SEO title="You lost?" />

            <h1>🤔 You lost?</h1>

            <p>
                There&apos;s nothing here. Why don&apos;t you try{" "}
                <Link to="/">over here</Link>?
            </p>
        </>
    )
}

export default NotFoundPage
