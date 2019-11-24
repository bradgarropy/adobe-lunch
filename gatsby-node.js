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
                allPlace(filter: {alternative_id: {ne: null}}) {
                    nodes {
                        id: alternative_id
                    }
                }
            }
        `)

        const places = data.allPlace.nodes
        places.forEach(place => createPlace(place.id, createPage))

        resolve()
    })

    return promise
}

module.exports = {
    createPages,
}
