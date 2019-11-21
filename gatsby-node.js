const path = require("path")

const createPlace = (id, createPage) => {
    const options = {
        path: `/place/${id}`,
        component: path.resolve("src/templates/place.js"),
        context: {id},
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

        nearbyPlaces.forEach(nearbyPlace => {
            createPlace(nearbyPlace.id, createPage)
        })

        resolve()
    })

    return promise
}

module.exports = {
    createPages,
}
