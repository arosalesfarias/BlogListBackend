const { test, after, describe, beforeEach } = require('node:test')
const { initialBlogs, nonExistingId, blogsInDb } = require('../tests/test_helper')
const Blog = require('../models/blog')
const mongoose = require('mongoose')
const supertest = require('supertest')
const assert = require('node:assert')
const app = require('../app')

const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({})
    const promiseArray = initialBlogs.map(blog => new Blog(blog).save())
    await Promise.all(promiseArray)
})

describe('Api Test', () => {
    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })
    test('there are two blogs', async () => {
        const response = await blogsInDb()
        assert.strictEqual(response.length, initialBlogs.length)
    })
})

after(async () => {
    await mongoose.connection.close()
})