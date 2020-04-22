const { GraphQLString, GraphQLObjectType, GraphQLInt } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'price_details',
    fields: {
        amount: { type: GraphQLInt },
        currency: { type: GraphQLString },
        price_string: { type: GraphQLString },
        currency_symbol: { type: GraphQLString }
    }
})