import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const Graph = ({ search }) => {
    return(
        <Query
            query={
                gql`
                query ($search: String!) {
                    youtube(q: $search) {
                      items {
                        snippet {
                          title
                          thumbnails {
                            medium {
                              url
                            }
                          }
                        }
                        channelDetails {
                          items {
                            snippet {
                              title
                              thumbnails {
                                medium {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    github(q: $search) {
                      items {
                        name
                        full_name
                        owner {
                          avatar_url
                          url
                        }
                        description
                        stargazers_count
                        open_issues
                        issues_url
                        forks
                        organization{
                          name
                          bio
                          avatar_url
                          public_repos
                        }
                      }
                    }
                    udemy(search: $search) {
                      results{
                        title
                        url
                        price
                        image_480x270
                        rating{
                          num_subscribers
                          avg_rating_recent
                          estimated_content_length
                        }
                       visible_instructors{
                        name
                      } 
                      }
                    }
                  }
                `
            }
            variables={{ search }}
        >
            {({ loading, error, data }) => {
                if(loading) return null;
                console.log(data);
                return(
                    <div>
                        Graphql apollo
                    </div>
                )
            }}
        </Query>
    )
}

export default Graph;