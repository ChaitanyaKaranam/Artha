const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'license',
    fields: {
        key: { type: GraphQLString },
        name: { type: GraphQLString },
        spdx_id: { type: GraphQLString },
        url: { type: GraphQLString },
        node_id: { type: GraphQLString }
    }
})