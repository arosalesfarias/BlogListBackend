const Blog = require('../models/blog')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (arr) => {
    const sumLikes = (sum, item) => {
        return sum + item.likes
    }

    return arr.reduce(sumLikes, 0)
}

const favoriteBlog = (arr) => {
    const maxLikes = (maxItem, item) =>
        item.likes >= maxItem.likes? item : maxItem
    
    return arr.length === 0? undefined : arr.reduce(maxLikes,{likes: 0})
}

module.exports = {
    dummy, totalLikes, favoriteBlog
}