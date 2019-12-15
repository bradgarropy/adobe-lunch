import React from "react"
import {useContext} from "react"
import Empty from "../components/Empty"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"
import {NearbyPlacesContext} from "../contexts"
import Button from "../styles/Button"

const IndexPage = () => {
    const {suggest} = useContext(NearbyPlacesContext)

    const onClick = () => suggest()

    return (
        <>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            <Empty/>
            <Button onClick={onClick}>TELL ME</Button>
        </>
    )
}

export default IndexPage
