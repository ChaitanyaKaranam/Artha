const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const youtube = require('./youtube');
const github = require('./github');
const udemy = require('./udemy');
const axios = require('axios');
const { YOUTUBE_API_URL, YOUTUBE_MAX_RESULTS, GITHUB_API_URL, GITHUB_MAX_RESULTS, UDEMY_API_URL, UDEMY_MAX_RESULTS, TEST_YOUTUBE_SEARCH_DATA, TEST_UDEMY_SEARCH_DATA, TEST_GITHUB_SEARCH_DATA } = require('../../config');

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
            type: youtube,
            args: { q : { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parentValue, { q }) {
                if(process.env.NODE_ENV === 'test'){
                    return TEST_YOUTUBE_SEARCH_DATA;
                }
                return axios.get(`${YOUTUBE_API_URL}/search?part=snippet&q=${q}%20tutorial&type=video&maxResults=${YOUTUBE_MAX_RESULTS}&order=viewCount&key=${process.env.YOUTUBE_API_KEY}`)
                    .then(response => {
                        return response.data;
                    })
            }
        },
        github: {
            type: github,
            args: { q: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parentValue, { q }) {
                if(process.env.NODE_ENV === 'test'){
                    return TEST_GITHUB_SEARCH_DATA
                }
                return  axios.get(`${GITHUB_API_URL}/search/repositories?q=${q}&sort=stars&per_page=${GITHUB_MAX_RESULTS}`, { headers: { Authorization: `token ${process.env.GITHUB_API_KEY}` } })
                    .then(response => {
                        return response.data;
                    })
            }
        },
        udemy: {
            type: udemy,
            args: { search: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parentValue, { search }) {
                if(process.env.NODE_ENV === 'test'){
                    return TEST_UDEMY_SEARCH_DATA
                }
                return axios.get(`${UDEMY_API_URL}/courses?search=${search}&page_size=${UDEMY_MAX_RESULTS}`, { 
                        headers: { Authorization: `Basic ${Buffer.from(`${process.env.UDEMY_CLIENT_ID}:${process.env.UDEMY_CLIENT_PASSWORD}`).toString('base64')}`}}
                    )
                    .then(response => {
                        return response.data;
                    })
            }
        }
    }
})

module.exports = rootQuery;