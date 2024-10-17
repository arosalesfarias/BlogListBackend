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

module.exports = {
    dummy, totalLikes
}