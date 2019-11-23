import {navigate} from "gatsby"
import {useContext} from "react"
import {NearbyPlacesContext} from "../contexts"
import {
    getRandomElement,
    queryParams,
    LATITUDE,
    LONGITUDE,
} from "../utils/utils"
import serverless from "../utils/serverless"

const usePlace = place => {
    console.log(place)
    const {nearbyPlaces} = useContext(NearbyPlacesContext)

    const accept = () => {
        serverless.accept(place.id)

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
        console.log(place)
        serverless.reject(place.id)

        const {id} = getRandomElement(nearbyPlaces)
        navigate(`/place/${id}`)
    }

    const value = {
        accept,
        reject,
    }

    return value
}

export default usePlace
