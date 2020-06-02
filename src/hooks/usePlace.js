import {useContext} from "react"
import {PlaceContext} from "../contexts"

const usePlace = () => {
    const placeCtx = useContext(PlaceContext)
    console.log("placeCtx", placeCtx)
    return placeCtx
}

export {usePlace}
