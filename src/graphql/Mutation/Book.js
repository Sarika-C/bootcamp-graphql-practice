const Book = require('../../models/Book')

const addBook = async(_obj, {input}, _context) => {
    try {
        const book = await Book.query().insert({
            title: input.title,
            language: input.language,
            numPages: input.numPages,
            datePublished: input.datePublished,
            bestseller: input.bestseller
        })
        return author
    } catch (err) {
        console.log(err)
        throw new Error('Unable to insert book')
    }
}

const resolver = {
    Mutation: {
        addBook,
    }
}

module.exports = resolver