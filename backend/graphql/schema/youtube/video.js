const { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'videoDetails',
    fields: {
        kind: { type: GraphQLString },
        etag: { type: GraphQLString },
        items: { type: GraphQLList(new GraphQLObjectType({
            name: 'vidoe_item',
            fields: {
                kind: { type: GraphQLString },
                etag: { type: GraphQLString },
                id: { type: GraphQLString },
                snippet: {
                    type: new GraphQLObjectType({
                        name: 'video_snippet',
                        fields: () => ({
                            title: { type: GraphQLString },
                            description: { type: GraphQLString },
                            publishedAt: { type: GraphQLString },
                            thumbnails: { type: new GraphQLObjectType({
                                name: 'video_thumbnails',
                                fields: {
                                    default: {
                                        type: new GraphQLObjectType({
                                            name: 'video_default',
                                            fields: {
                                                url: { type: GraphQLString },
                                                width: { type: GraphQLInt },
                                                height: { type: GraphQLInt }
                                            }
                                        })
                                    },
                                    medium: {
                                        type: new GraphQLObjectType({
                                            name: 'video_medium',
                                            fields: {
                                                url: { type: GraphQLString },
                                                width: { type: GraphQLInt },
                                                height: { type: GraphQLInt }
                                            }
                                        })
                                    },
                                    high: {
                                        type: new GraphQLObjectType({
                                            name: 'video_high',
                                            fields: {
                                                url: { type: GraphQLString },
                                                width: { type: GraphQLInt },
                                                height: { type: GraphQLInt }
                                            }
                                        })
                                    }
                                }
                            })},
                            localized: { type: new GraphQLObjectType({
                                name: 'video_localized',
                                fields: {
                                    title: { type: GraphQLString },
                                    description: { type: GraphQLString }
                                }
                            })},
                            country: { type: GraphQLString }
                        })
                    })
                },
                statistics: { type: new GraphQLObjectType({
                    name: 'video_statistics',
                    fields: {
                        viewCount: { type: GraphQLInt },
                        commentCount: { type: GraphQLInt },
                        likeCount: { type: GraphQLInt },
                        dislikeCount: { type: GraphQLInt },
                        favoriteCount: { type: GraphQLInt },
                    }
                })}
            }
        }))}
    }
})