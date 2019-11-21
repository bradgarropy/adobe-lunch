import React from "react"
import {useContext, useEffect} from "react"
import PropTypes from "prop-types"
import Place from "../components/Place"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"
import {PlaceContext} from "../contexts"
import serverless from "../utils/serverless"

const PlaceTemplate = ({pageContext}) => {
    const {setPlace} = useContext(PlaceContext)

    useEffect(() => {
        const execute = async() => {
            const newPlace = await serverless.details(pageContext.id)
            setPlace(newPlace)
        }

        execute()
    }, [pageContext.id, setPlace])

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
