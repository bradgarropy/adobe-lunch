import React from "react"
import {useState} from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Location from "../components/Location"
import {getRandomElement} from "../utils/utils"
import locations from "../data/locations"

const Index = () => {
    const [location, setLocation] = useState()

    const onClick = () => {
        const location = getRandomElement(locations)
        setLocation(location)
    }

    return (
        <Layout>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            <button onClick={onClick}>TELL ME WHERE TO EAT</button>
            {location && <Location location={location}/>}
        </Layout>
    )
}

export default Index
