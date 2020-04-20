const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const item = require('./item');

const query = new GraphQLObjectType({
    name: 'search',
    fields: {
        kind: { type: GraphQLString },
        etag: { type: GraphQLString },
        nextPageToken: { type: GraphQLString },
        regionCode: { type: GraphQLString },
        pageInfo: { type:  new GraphQLObjectType({
            name: 'pageInfo',
            fields: {
                totalResults: { type: GraphQLInt },
                resultsPerPage: { type: GraphQLInt }
            }
        })},
        items: { type: new GraphQLList(item)}
    }
})

module.exports = query;