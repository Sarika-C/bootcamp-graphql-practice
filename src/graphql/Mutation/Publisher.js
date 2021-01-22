const Publisher = require('../../models/Publisher')

const addPublisher = async(_obj, {input}, _context) => {
    try {
        const publisher = await Publisher.query().insert({
            company: input.company,
            phoneNumber: input.phoneNumber,
            numBooksPublished: input.numBooksPublished
        })
        return publisher
    } catch (err) {
        console.log(err)
        throw new Error('Unable to insert publisher')
    }
}

const resolver = {
    Mutation: {
        addPublisher,
    }
}

module.exports = resolver