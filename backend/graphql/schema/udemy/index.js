const { GraphQLObjectType, GraphQLList } = require('graphql');
const Course = require('./Course');

const query = new GraphQLObjectType({
    name: 'udemy',
    fields: {
        results: { type: GraphQLList(Course) }
    }
})

module.exports = query;