const { GraphQLObjectType, GraphQLString } = require('graphql');

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve() {
                return 'Welcome to Artha GraphQL api'
            }
        }
    }
})

module.exports = rootQuery;