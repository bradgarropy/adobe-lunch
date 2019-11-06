import {useContext} from "react"
import {PlaceContext} from "../contexts"
import {
    getRandomElement,
    queryParams,
    LATITUDE,
    LONGITUDE,
} from "../utils/utils"
import {venueSearch, venueDetails} from "../utils/foursquare"
import tracker from "../utils/tracker"

const usePlace = () => {
    const {place, setPlace} = useContext(PlaceContext)

    const accept = () => {
        tracker.accept(place.id)

        const {lat, lng} = place.location

        const params = {
            api: 1,
            origin: `${LATITUDE},${LONGITUDE}`,
            destination: `${lat},${lng}`,
            travelmode: "walking",
            dir_action: "navigate",
        }

        const api = "https://www.google.com/maps/dir/"
        const query = queryParams(params)
        const url = `${api}?${query}`

        window.open(url)
    }

    const reject = async() => {
        tracker.reject(place.id)

        let data

        data = await venueSearch()
        const {venues} = data.response

        const {id} = getRandomElement(venues)

        data = await venueDetails(id)
        const {venue} = data.response

        setPlace(venue)
    }

    const value = {
        place,
        accept,
        reject,
    }

    return value
}

export default usePlace
