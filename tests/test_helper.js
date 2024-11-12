const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: 'La sombra de grey',
        author: 'Stallone',
        url: 'http://stalonganiza.com',
        likes: 15
    },
    {
        title: 'El amor en pandemia',
        author: 'Van damme',
        url: 'http://vendame.es',
        likes: 4
    }
]

const nonExistingId = async () => {
    const blog = new Blog({ title: 'willremovethissoon', author: 'algo', url: 'www', likes: 0 })
    await blog.save()
    await blog.deleteOne()

    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs, nonExistingId, blogsInDb
}