const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')

const allBooks = async() => {
   try { 
       const books = await Book.query()
       return books
   } catch (err) {
       console.log(err)
       throw new Error('Unable to retrieve books')
   }
}

const getBookById = async(_obj, {id}, _context) => {
    try {
        const book = await Book.query().where({id: id})
        return book
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve book')
    }
}

const getBooksByTitle = async(_obj, {title}, _context) => {
    try {
        const books = await Book.query().where({title: title})
        return books
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve books')
    }
}

const getBooksByLanguage = async(_obj, {language}, _context) => {
    try {
        const books = await Book.query().where({language: language})
        return books
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve books')
    }
}

const resolver = {
    Query: {
        allBooks,
        getBookById,
        getBooksByTitle,
        getBooksByLanguage,
    }
}

module.exports = resolver