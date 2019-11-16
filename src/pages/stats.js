import React from "react"
import {useContext} from "react"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"
import PopularityList from "../components/PopularityList"
import {PopularityContext} from "../contexts"

const Stats = () => {
    const {mostPopular, leastPopular} = useContext(PopularityContext)

    return (
        <>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            <h1>Most Popular</h1>
            <PopularityList places={mostPopular}/>

            <h1>Least Popular</h1>
            <PopularityList places={leastPopular}/>
        </>
    )
}

export default Stats
