import { gql } from 'apollo-boost';

export const ARTHA_QUERY = gql`
query ($search: String!) {
    youtube(q: $search) {
      items {
        id{
          videoId
        }
        snippet {
          title
        }
        channelDetails {
          items {
            snippet {
              title
              thumbnails{
                medium{
                  url
                }
              }
            }
            statistics{
              videoCount
              subscriberCount
            }
          }
        }
        videoDetails{
          items{
            statistics{
              viewCount
              likeCount
            }
            snippet{
              title
              description          
            }
          }
        }
      }
    }
    github(q: $search) {
      items {
        id	
        name
        owner {
          avatar_url
        }
        description
        stargazers_count
        open_issues
        forks
        html_url
      }
    }
    udemy(search: $search) {
      results{
        id
        title      
        url
        price
        image_480x270
        rating{
          num_subscribers
          avg_rating_recent
        } 
      }
    }
  }  
`