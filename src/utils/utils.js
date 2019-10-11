const getRandomElement = array => {
    const index = Math.floor(Math.random() * array.length)
    const element = array[index]

    return element
}

export {getRandomElement}
