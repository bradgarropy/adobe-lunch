import React from "react"
import {useContext} from "react"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Empty from "../components/Empty"
import Place from "../components/Place"
import {NearbyPlacesContext, PlaceContext} from "../contexts"
import serverless from "../utils/serverless"
import {getRandomElement} from "../utils/utils"
import Button from "../styles/Button"

const Index = () => {
    const {nearbyPlaces} = useContext(NearbyPlacesContext)
    const {place, setPlace} = useContext(PlaceContext)

    const onClick = async() => {
        const {id} = getRandomElement(nearbyPlaces)

        const newPlace = await serverless.details(id)
        setPlace(newPlace)
    }

    return (
        <>
            <Meta title="Adobe Lunch"/>
            <Facebook/>
            <Twitter/>

            {place ? (
                <Place/>
            ) : (
                <>
                    <Empty/>
                    <Button onClick={onClick}>TELL ME</Button>
                </>
            )}
        </>
    )
}

export default Index
