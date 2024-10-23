const Blog = require('../models/blog')
const _ = require('lodash')

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
        item.likes >= maxItem.likes ? item : maxItem

    return arr.length === 0 ? undefined : arr.reduce(maxLikes, { likes: 0 })
}

const mostBlogs = (arr) => {
    //Group by blogs per author and count
    const autoresContados = _.countBy(arr, 'author')

    //Transform Object in List Objects of Author and blogs's quantity
    const autoresList = Object.entries(autoresContados).map(([author, blogs])=> ({author, blogs}))

    //Find Author max blogs and return
    return _.maxBy(autoresList, 'blogs')
}

module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs
}