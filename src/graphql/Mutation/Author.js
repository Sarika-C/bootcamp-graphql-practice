const Author = require('../../models/Author')

const addAuthor = async(_obj, {input}, _context) => {
    try {
        const author = await Author.query().insert({
            firstName: input.firstName,
            lastName: input.lastName,
            age: input.age,
            email: input.email,
            numBooksPublished: input.numBooksPublished 
        })
        return author
    } catch (err) {
        console.log(err)
        throw new Error('Unable to insert author')
    }
}

const resolver = {
    Mutation: {
        addAuthor,
    }
}

module.exports = resolver