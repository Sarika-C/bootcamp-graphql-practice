const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')

const allAddresses = async() => {
   try { 
       const addresses = await Address.query()
       return addresses
   } catch (err) {
       console.log(err)
       throw new Error('Unable to retrieve addresses')
   }
}

const getAddressById = async(_obj, {id}, _context) => {
    try {
        const address = await Address.query().where({id: id})
        return address
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve address')
    }
}

const getAddressesByStreet = async(_obj, {street}, _context) => {
    try {
        const addresses = await Address.query().where({street: street})
        return addresses
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve addresses')
    }
}

const getAddressesByCity = async(_obj, {city}, _context) => {
    try {
        const addresses = await Address.query().where({city: city})
        return addresses
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve addresses')
    }
}

const getAddressesByState = async(_obj, {state}, _context) => {
    try {
        const addresses = await Address.query().where({state: state})
        return addresses
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve addresses')
    }
}

const getAddressesByZip = async(_obj, {zip}, _context) => {
    try {
        const addresses = await Address.query().where({zip: zip})
        return addresses
    } catch (err) {
        console.log(err)
        throw new Error('Unable to retrieve addresses')
    }
}

const resolver = {
    Query: {
        allAddresses,
        getAddressById,
        getAddressesByStreet,
        getAddressesByCity,
        getAddressesByState,
        getAddressesByZip,
    }
}

module.exports = resolver