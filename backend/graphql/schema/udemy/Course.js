const { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLFloat } = require('graphql');
const PriceDetails = require('./PriceDetail');
const Instructor = require('./Instructor');

module.exports = new GraphQLObjectType({
    name: 'course',
    fields: {
        _class: { type: GraphQLString },
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        url: { type: GraphQLString },
        is_paid: { type: GraphQLBoolean },
        price: { type: GraphQLString },
        price_detail: { type: PriceDetails },
        price_serve_tracking_id: { type: GraphQLString },
        visible_instructors: { type: GraphQLList(Instructor)},
        image_125_H: { type: GraphQLString },
        image_240x135: { type: GraphQLString },
        is_practice_test_course: { type: GraphQLBoolean },
        image_480x270: { type: GraphQLString },
        published_title: { type: GraphQLString },
        predictive_score: { type: GraphQLFloat },
        relevancy_score: { type: GraphQLFloat },
        input_features: { type: GraphQLString },
        lecture_search_result: { type: GraphQLString },
        headline: { type: GraphQLString }
    }
})