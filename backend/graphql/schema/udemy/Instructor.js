const { GraphQLString, GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'instructor',
    fields: {
        _class: { type: GraphQLString },
        title: { type: GraphQLString },
        name: { type: GraphQLString },
        display_name: { type: GraphQLString },
        job_title: { type: GraphQLString },
        image_50x50: { type: GraphQLString },
        image_100x100: { type: GraphQLString },
        initials: { type: GraphQLString },
        url: { type: GraphQLString }
    }
});