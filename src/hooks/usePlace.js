import {useContext} from "react"
import {PlaceContext} from "../contexts"

const usePlace = () => {
    const placeCtx = useContext(PlaceContext)
    return placeCtx
}

export {usePlace}
