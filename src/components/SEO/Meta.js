import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import {Helmet} from "react-helmet"

const Meta = ({title}) => {
    const data = useStaticQuery(query)

    const {description, keywords} = data.site.siteMetadata

    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="msapplication-TileColor" content="#ff0000" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="manifest" href="/site.webmanifest" />

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />

            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />

            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />

            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#ff0000"
            />
        </Helmet>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
}

export default Meta

const query = graphql`
    {
        site {
            siteMetadata {
                description
                keywords
            }
        }
    }
`
