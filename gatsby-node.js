const path = require("path")
const {details} = require("./src/utils/serverless")

const createPlace = (place, createPage) => {
    const options = {
        path: `/place/${place.id}`,
        component: path.resolve("src/templates/place.js"),
        context: {place},
    }

    createPage(options)
}

const createPages = ({graphql, actions}) => {
    const {createPage} = actions

    const promise = new Promise(async resolve => {
        const {data} = await graphql(`
            {
                allPlaces(filter: {alternative_id: {ne: null}}) {
                    nodes {
                        id: alternative_id
                    }
                }
            }
        `)

        const nearbyPlaces = data.allPlaces.nodes

        nearbyPlaces.forEach(async nearbyPlace => {
            const place = await details(nearbyPlace.id)
            console.log(place)
            createPlace(place, createPage)
        })

        resolve()
    })

    return promise
}

module.exports = {
    createPages,
}
