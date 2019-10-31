import React from "react"
import {Link} from "gatsby"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const NotFoundPage = () => {
    return (
        <>
            <Meta title="You lost?"/>
            <Facebook/>
            <Twitter/>

            <h1>🤔 You lost?</h1>

            <p>
                There&apos;s nothing here. Why don&apos;t you try{" "}
                <Link to="/">over here</Link>?
            </p>
        </>
    )
}

export default NotFoundPage
