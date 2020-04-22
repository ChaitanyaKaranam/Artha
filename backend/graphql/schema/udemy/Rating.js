const {  GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLFloat } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'rating',
    fields: {
        _class: { type: GraphQLString },
        id: { type: GraphQLInt },
        num_subscribers: { type: GraphQLInt },
        avg_rating_recent: { type: GraphQLFloat },
        estimated_content_length: { type: GraphQLInt }
    }
})