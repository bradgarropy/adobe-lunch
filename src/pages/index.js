import React from "react"
import {useState} from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Venue from "../components/Venue"
import {getRandomElement} from "../utils/utils"
import {venueSearch} from "../utils/foursquare"

const Index = () => {
    const [venue, setVenue] = useState()

    const onClick = async() => {
        const data = await venueSearch()
        const {venues} = data.response

        const venue = getRandomElement(venues)
        console.log(venue)

        setVenue(venue)
    }

    return (
        <Layout>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            <button onClick={onClick}>TELL ME WHERE TO EAT</button>
            {venue && <Venue venue={venue}/>}
        </Layout>
    )
}

export default Index
