const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const search = require('./youtube');
const axios = require('axios');
const { YOUTUBE_API_URL, YOUTUBE_MAX_RESULTS } = require('../../config');

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve() {
                return 'Welcome to Artha GraphQL api'
            }
        },
        youtube: {
            type: search,
            args: { q : { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parentValue, { q }) {
                return axios.get(`${YOUTUBE_API_URL}/search?part=snippet&q=${q}&maxResults=${YOUTUBE_MAX_RESULTS}&order=viewCount&key=${process.env.YOUTUBE_API_KEY}`)
                    .then(response => {
                        return response.data;
                    })
            }
        }
    }
})

module.exports = rootQuery;