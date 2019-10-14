import React from "react"
import {useState} from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Venue from "../components/Venue"
import {getRandomElement} from "../utils/utils"
import {venueSearch, venueDetails} from "../utils/foursquare"

const Index = () => {
    const [venue, setVenue] = useState()

    const onClick = async() => {
        let data

        data = await venueSearch()
        const {venues} = data.response

        const {id} = getRandomElement(venues)

        data = await venueDetails(id)
        const {venue} = data.response

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
