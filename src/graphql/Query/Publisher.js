const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')

const allPublishers = async() => {
   try { 
       const publishers = await Publisher.query()
       return publishers
   } catch (err) {
       console.log(err)
       throw new Error('Unable to retrieve publishers')
   }
}

const getPublisherById = async(_obj, {id}, _context) => {
    try {
        const publisher = await Publisher.query().where({id: id})
        return publisher
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve publisher')
    }
}

const getPublishersByCompany = async(_obj, {company}, _context) => {
    try {
        const publishers = await Publisher.query().where({company: company})
        return publishers
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve publishers')
    }
}

const resolver = {
    Query: {
        allPublishers,
        getPublisherById,
        getPublishersByCompany,
    }
}

module.exports = resolver