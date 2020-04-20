const { GraphQLObjectType, GraphQLInt } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'pageInfo',
    fields: {
        totalResults: { type: GraphQLInt },
        resultsPerPage: { type: GraphQLInt }
    }
})