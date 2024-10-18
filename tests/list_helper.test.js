const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
})

const listWithOneBlog = [
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
    }
]

const bigList = [
    {
        _id: '5a422aa71b54a676234d17f0',
        title: 'Level 0',
        author: 'Don Satur',
        url: 'https://donsatur.io',
        likes: 5,
        __v: 0
    },
    {
        _id: '5a422aa71b54a676234d17f1',
        title: 'Level 1',
        author: 'Don Satur',
        url: 'https://donsatur.io',
        likes: 8,
        __v: 0
    }, {
        _id: '5a422aa71b54a676234d17f2',
        title: 'Level 2',
        author: 'Don Satur',
        url: 'https://donsatur.io',
        likes: 65,
        __v: 0
    }, {
        _id: '5a422aa71b54a676234d17f3',
        title: 'Level 3',
        author: 'Don Satur',
        url: 'https://donsatur.io',
        likes: 12,
        __v: 0
    }, {
        _id: '5a422aa71b54a676234d17f4',
        title: 'Level 4',
        author: 'Don Satur',
        url: 'https://donsatur.io',
        likes: 2,
        __v: 0
    }, {
        _id: '5a422aa71b54a676234d17f5',
        title: 'Level 5',
        author: 'Don Satur',
        url: 'https://donsatur.io',
        likes: 51,
        __v: 0
    }, {
        _id: '5a422aa71b54a676234d17f6',
        title: 'Level 6',
        author: 'Don Satur',
        url: 'https://donsatur.io',
        likes: 33,
        __v: 0
    },
    {
        _id: '5a422aa71b54a676234d17f7',
        title: 'Level 7',
        author: 'Don Satur',
        url: 'https://donsatur.io',
        likes: 12,
        __v: 0
    }, {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Level 8',
        author: 'Don Satur',
        url: 'https://donsatur.io',
        likes: 21,
        __v: 0
    },
    {
        _id: '5a422aa71b54a676234d17f9',
        title: 'Level 9',
        author: 'Don Satur',
        url: 'https://donsatur.io',
        likes: 100,
        __v: 0
    }
]

describe('Total Likes', () => {
    test('when list has only one blog, equals the likes of that', () => {
        assert.strictEqual(listHelper.totalLikes(listWithOneBlog), listWithOneBlog[0].likes)
    })
    test('of empty list is zero', () => {
        assert.strictEqual(listHelper.totalLikes([]), 0)
    })
    test('of a bigger list is calculated right', () => {
        assert.strictEqual(listHelper.totalLikes(bigList), 309)
    })
})

describe('Favorite Blog', () => {
    test('of a bigger list returns the last one', () => {
        assert.deepStrictEqual(listHelper.favoriteBlog(bigList), bigList.at(-1))
    })
    test('of a empty list returns undefined', () => {
        assert.strictEqual(listHelper.favoriteBlog([]), undefined)
    })
    const withoutLikes = [
        {
            _id: '5a422aa71b54a676234d17f0',
            title: '1',
            author: 'Example',
            url: 'https://example.io',
            likes: 0,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f1',
            title: '2',
            author: 'Example',
            url: 'https://example.io',
            likes: 0,
            __v: 0
        }
    ]
    test('of a list without likes returns the last one', () => {
        assert.strictEqual(listHelper.favoriteBlog(withoutLikes), withoutLikes.at(-1))
    })
})