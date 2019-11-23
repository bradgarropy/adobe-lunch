const path = require("path")

const createPlace = (place, createPage) => {
    console.log(place)

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
            // const data = await details(nearbyPlace.id)
            // const place = data.response.venue
            createPlace(nearbyPlace, createPage)
        })

        resolve()
    })

    return promise
}

module.exports = {
    createPages,
}
