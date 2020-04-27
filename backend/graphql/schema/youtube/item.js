const { GraphQLString, GraphQLObjectType, GraphQLInt } = require('graphql');
const axios = require('axios');
const { YOUTUBE_API_URL, TEST_YOUTUBE_CHANNEL_DATA, TEST_YOUTUBE_VIDEO_DATA } = require('../../../config');
const channelDetails = require('./channel');
const videoDetails = require('./video');

module.exports = new GraphQLObjectType({
    name: 'item',
    fields: {
        kind: { type: GraphQLString },
        etag: { type: GraphQLString },
        id: { type: new GraphQLObjectType({
            name: 'id',
            fields: {
                kind: { type: GraphQLString },
                playlistId: { type: GraphQLString },
                videoId: { type: GraphQLString }
            }
        })},
        snippet: {
            type: new GraphQLObjectType({
                name: 'snippet',
                fields: () => ({
                    publishedAt: { type: GraphQLString },
                    channelId: { type: GraphQLString },
                    title: { type: GraphQLString },
                    description: { type: GraphQLString },
                    thumbnails: { type: new GraphQLObjectType({
                        name: 'thumbnails',
                        fields: {
                            default: {
                                type: new GraphQLObjectType({
                                    name: 'default',
                                    fields: {
                                        url: { type: GraphQLString },
                                        width: { type: GraphQLInt },
                                        height: { type: GraphQLInt }
                                    }
                                })
                            },
                            medium: {
                                type: new GraphQLObjectType({
                                    name: 'medium',
                                    fields: {
                                        url: { type: GraphQLString },
                                        width: { type: GraphQLInt },
                                        height: { type: GraphQLInt }
                                    }
                                })
                            },
                            high: {
                                type: new GraphQLObjectType({
                                    name: 'high',
                                    fields: {
                                        url: { type: GraphQLString },
                                        width: { type: GraphQLInt },
                                        height: { type: GraphQLInt }
                                    }
                                })
                            }
                        }
                    })},
                    channelTitle: { type: GraphQLString },
                    liveBroadcastContent: { type: GraphQLString },
                })
            })
        },
        channelDetails: {
            type: channelDetails,
            resolve(source, args){
                if(process.env.NODE_ENV === 'test'){
                    return TEST_YOUTUBE_CHANNEL_DATA;
                }
                return axios.get(`${YOUTUBE_API_URL}/channels?part=snippet%2Cstatistics&key=${process.env.YOUTUBE_API_KEY}&id=${source.snippet.channelId}`)
                    .then(response => {
                        return response.data;
                    })
            }
        },
        videoDetails: {
            type: videoDetails,
            resolve(source, args){
                if(process.env.NODE_ENV === 'test'){
                    return TEST_YOUTUBE_VIDEO_DATA;
                }
                return axios.get(`${YOUTUBE_API_URL}/videos?key=${process.env.YOUTUBE_API_KEY}&part=snippet%2CcontentDetails%2Cstatistics&id=${source.id.videoId}`)
                    .then(response => {
                        return response.data;
                    })
            }
        }
    }
})