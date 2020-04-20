const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'channel',
    fields: {
        kind: { type: GraphQLString },
        etag: { type: GraphQLString },
        items: { type: GraphQLList(new GraphQLObjectType({
            name: 'channel_item',
            fields: {
                kind: { type: GraphQLString },
                etag: { type: GraphQLString },
                id: { type: GraphQLString },
                snippet: {
                    type: new GraphQLObjectType({
                        name: 'channel_snippet',
                        fields: () => ({
                            title: { type: GraphQLString },
                            description: { type: GraphQLString },
                            customUrl: { type: GraphQLString },
                            publishedAt: { type: GraphQLString },
                            thumbnails: { type: new GraphQLObjectType({
                                name: 'channel_thumbnails',
                                fields: {
                                    default: {
                                        type: new GraphQLObjectType({
                                            name: 'channel_default',
                                            fields: {
                                                url: { type: GraphQLString },
                                                width: { type: GraphQLInt },
                                                height: { type: GraphQLInt }
                                            }
                                        })
                                    },
                                    medium: {
                                        type: new GraphQLObjectType({
                                            name: 'channel_medium',
                                            fields: {
                                                url: { type: GraphQLString },
                                                width: { type: GraphQLInt },
                                                height: { type: GraphQLInt }
                                            }
                                        })
                                    },
                                    high: {
                                        type: new GraphQLObjectType({
                                            name: 'channel_high',
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
                                name: 'localized',
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
                    name: 'statistics',
                    fields: {
                        viewCount: { type: GraphQLInt },
                        commentCount: { type: GraphQLInt },
                        subscriberCount: { type: GraphQLInt },
                        hiddenSubscriberCount: { type: GraphQLBoolean },
                        videoCount: { type: GraphQLInt },
                    }
                })}
            }
        }))}
    },
})