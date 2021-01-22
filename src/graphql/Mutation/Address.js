const Address = require('../../models/Address')

const addAddress = async(_obj, {input}, _context) => {
    try {
        const address = await Address.query().insert({
            street: input.street,
            city: input.city,
            state: input.state,
            zip: input.zip
        })
        return address
    } catch (err) {
        console.log(err)
        throw new Error('Unable to insert address')
    }
}

const resolver = {
    Mutation: {
        addAddress,
    }
}

module.exports = resolver