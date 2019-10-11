const getRandomElement = array => {
    console.log(array)
    const index = Math.floor(Math.random() * array.length)
    console.log(index)
    const element = array[index]
    console.log(element)

    return element
}

export {getRandomElement}
