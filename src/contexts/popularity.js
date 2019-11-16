import React from "react"
import {createContext, useState, useEffect} from "react"
import PropTypes from "prop-types"
import serverless from "../utils/serverless"

const PopularityContext = createContext()

const PopularityProvider = ({children}) => {
    const [mostPopular, setMostPopular] = useState([])
    const [leastPopular, setLeastPopular] = useState([])

    useEffect(() => {
        const execute = async() => {
            const promises = [
                serverless.mostpopular(),
                serverless.leastpopular(),
            ]

            const [newMostPopular, newLeastPopular] = await Promise.all(
                promises,
            )

            setMostPopular(newMostPopular)
            setLeastPopular(newLeastPopular)
        }

        execute()
    }, [])

    const context = {
        mostPopular,
        leastPopular,
    }

    return (
        <PopularityContext.Provider value={context}>
            {children}
        </PopularityContext.Provider>
    )
}

PopularityProvider.propTypes = {
    children: PropTypes.node,
}

export {PopularityContext, PopularityProvider}
