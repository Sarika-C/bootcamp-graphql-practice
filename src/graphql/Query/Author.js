const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')

const allAuthors = async() => {
   try { 
       const authors = await Author.query()
       return authors
   } catch (err) {
       console.log(err)
       throw new Error('Unable to retrieve authors')
   }
}

const getAuthorById = async(_obj, {id}, _context) => {
    try {
        const author = await Author.query().where({id: id})
        return author
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve author')
    }
}

const getAuthorsByFirstName = async(_obj, {firstName}, _context) => {
    try {
        const authors = await Author.query().where({firstName: firstName})
        return authors
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve authors')
    }
}

const getAuthorsByLastName = async(_obj, {lastName}, _context) => {
    try {
        const authors = await Author.query().where({lastName: lastName})
        return author
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve authors')
    }
}

const resolver = {
    Query: {
        allAuthors,
        getAuthorById,
        getAuthorsByFirstName,
        getAuthorsByLastName,
    }
}

module.exports = resolver