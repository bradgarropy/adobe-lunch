import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const Facebook = ({
    url = "https://adobe-lunch.netlify.com",
    type = "website",
    title = "Adobe Lunch",
    description = "🥪 Adobe Lunch",
    image = "https://adobe-lunch.netlify.com/facebook.png",
}) => {
    return (
        <Helmet>
            <meta property="og:url" content={url}/>
            <meta property="og:type" content={type}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
        </Helmet>
    )
}

Facebook.propTypes = {
    url: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Facebook
