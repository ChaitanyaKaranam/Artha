const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_MAX_RESULTS = 10;
const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_MAX_RESULTS = 9;
const UDEMY_API_URL = 'https://www.udemy.com/api-2.0';
const UDEMY_MAX_RESULTS = 10;


const TEST_YOUTUBE_SEARCH_DATA = {
    "kind": "youtube#searchListResponse",
    "etag": "oY-b9vq6IvyXvswGwwtqjTxwR_o",
    "nextPageToken": "CAoQAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 981453,
        "resultsPerPage": 10
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "_34qHpuPIBZY2jfzp-TYFRlk9d0",
            "id": {
                "kind": "youtube#video",
                "videoId": "Ke90Tje7VS0"
            },
            "snippet": {
                "publishedAt": "2018-07-16T16:51:44Z",
                "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
                "title": "React Tutorial - Learn React - React Crash Course [2019]",
                "description": "React Tutorial with Examples - Learn React from scratch with this React Crash Course 2019. LIMITED TIME: Get the full course for $29 (reg price $149) ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Programming with Mosh",
                "liveBroadcastContent": "none",
                "publishTime": "2018-07-16T16:51:44Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "5Kz0PkcuJkCUAxeg9FDW6PNqM60",
            "id": {
                "kind": "youtube#video",
                "videoId": "DLX62G4lc44"
            },
            "snippet": {
                "publishedAt": "2018-12-18T16:21:19Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "Learn React JS - Full Course for Beginners - Tutorial 2019",
                "description": "React.js is a JavaScript library for building dynamic web applications. Upon completion of this course, you'll know everything you need in order to build web ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/DLX62G4lc44/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/DLX62G4lc44/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2018-12-18T16:21:19Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ujuEmQxUGvGLCAwg5Ew4vPBOdco",
            "id": {
                "kind": "youtube#video",
                "videoId": "MhkGQAoc7bc"
            },
            "snippet": {
                "publishedAt": "2016-02-02T17:00:01Z",
                "channelId": "UCVTlvUkGslCV_h-nSAId8Sw",
                "title": "REACT JS TUTORIAL #1 - Reactjs Javascript Introduction &amp; Workspace Setup",
                "description": "This React JS Course will help you get quickly up to pace with React.js development. React is an AMAZING Javascript framework that allows you to build ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/MhkGQAoc7bc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/MhkGQAoc7bc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/MhkGQAoc7bc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "LearnCode.academy",
                "liveBroadcastContent": "none",
                "publishTime": "2016-02-02T17:00:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "pGkf-oSnOFf22635-jxbjhtY97M",
            "id": {
                "kind": "youtube#video",
                "videoId": "sBws8MSXN7A"
            },
            "snippet": {
                "publishedAt": "2019-01-03T21:20:36Z",
                "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
                "title": "React JS Crash Course",
                "description": "In this crash course you will learn what React JS is and the fundamentals such as components, state, props, JSX, events, etc. Modern React Front To Back - 13.5 ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/sBws8MSXN7A/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/sBws8MSXN7A/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/sBws8MSXN7A/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Traversy Media",
                "liveBroadcastContent": "none",
                "publishTime": "2019-01-03T21:20:36Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "e3M10DGZPhXhsdnaWiEpic_5zxA",
            "id": {
                "kind": "youtube#video",
                "videoId": "6ZnfsJ6mM5c"
            },
            "snippet": {
                "publishedAt": "2017-12-13T16:00:00Z",
                "channelId": "UCSJbGtTlrDami-tDGPUV9-w",
                "title": "React Native Tutorial for Beginners - Getting Started",
                "description": "React Native is a great library that allows you to build native mobile apps. Time to get started! Join the full React Native course: https://acad.link/react-native ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6ZnfsJ6mM5c/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6ZnfsJ6mM5c/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6ZnfsJ6mM5c/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Academind",
                "liveBroadcastContent": "none",
                "publishTime": "2017-12-13T16:00:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "9iDnvaZ_sYlDLFRdu1fpxZB2JEI",
            "id": {
                "kind": "youtube#video",
                "videoId": "JPT3bFIwJYA"
            },
            "snippet": {
                "publishedAt": "2016-08-11T15:00:01Z",
                "channelId": "UCSJbGtTlrDami-tDGPUV9-w",
                "title": "ReactJS Basics - #1 What is React?",
                "description": "This ReactJS Tutorial dives into the Question what ReactJS actually is and why you might want to use it. Join the full React.js course: https://acad.link/reactjs Also ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/JPT3bFIwJYA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/JPT3bFIwJYA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/JPT3bFIwJYA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Academind",
                "liveBroadcastContent": "none",
                "publishTime": "2016-08-11T15:00:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "rTTOiaICUoGRuXjfnpCdYfrs9-Q",
            "id": {
                "kind": "youtube#video",
                "videoId": "1w-oQ-i1XB8"
            },
            "snippet": {
                "publishedAt": "2016-04-18T17:00:01Z",
                "channelId": "UCVTlvUkGslCV_h-nSAId8Sw",
                "title": "Redux Tutorial #1 - React js tutorial - How Redux Works",
                "description": "This Redux tutorial series will show you the schematics of a Redux application. Redux is AWESOME, but it takes a bit to get it setup. There really aren't a lot of ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/1w-oQ-i1XB8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/1w-oQ-i1XB8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/1w-oQ-i1XB8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "LearnCode.academy",
                "liveBroadcastContent": "none",
                "publishTime": "2016-04-18T17:00:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Pxg8U1iP7yD48GTgAmcgfxwyE3c",
            "id": {
                "kind": "youtube#video",
                "videoId": "93p3LxR9xfM"
            },
            "snippet": {
                "publishedAt": "2018-03-17T13:50:15Z",
                "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
                "title": "Redux Crash Course With React",
                "description": "In this video we will talk about what Redux is and build a React app from scratch and add all of the boilerplate for Redux and work with the store/state, actions, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/93p3LxR9xfM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/93p3LxR9xfM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/93p3LxR9xfM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Traversy Media",
                "liveBroadcastContent": "none",
                "publishTime": "2018-03-17T13:50:15Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "DKaHSqps-E7von9JyZvVVbShkWg",
            "id": {
                "kind": "youtube#video",
                "videoId": "-AbaV3nrw6E"
            },
            "snippet": {
                "publishedAt": "2016-06-28T00:05:55Z",
                "channelId": "UCJbPGzawDH1njbqV-D5HqKw",
                "title": "React JS Tutorials for Beginners - 1 - Getting Started",
                "description": "Facebook - https://www.facebook.com/TheNewBoston-464114846956315/ GitHub - https://github.com/buckyroberts Google+ ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-AbaV3nrw6E/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-AbaV3nrw6E/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-AbaV3nrw6E/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "thenewboston",
                "liveBroadcastContent": "none",
                "publishTime": "2016-06-28T00:05:55Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "PaSlOZiss7ykd5SWGhmLPu1_6Xo",
            "id": {
                "kind": "youtube#video",
                "videoId": "qSRrxpdMpVc"
            },
            "snippet": {
                "publishedAt": "2019-08-21T15:33:20Z",
                "channelId": "UCSJbGtTlrDami-tDGPUV9-w",
                "title": "React Native Tutorial for Beginners - Crash Course 2020",
                "description": "Free React Native Introduction for Beginners: Get Started with React Native and learn how to build an iOS and Android app! Join the full React Native course: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qSRrxpdMpVc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qSRrxpdMpVc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qSRrxpdMpVc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Academind",
                "liveBroadcastContent": "none",
                "publishTime": "2019-08-21T15:33:20Z"
            }
        }
    ]
}

const TEST_YOUTUBE_VIDEO_DATA = {
    "kind": "youtube#videoListResponse",
    "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/-anAx15Eqv0CmDDS7iSHLbQ70bo\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [
        {
            "kind": "youtube#video",
            "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/VEedJobTWEypMFrZgnSP6oYYGo4\"",
            "id": "Ke90Tje7VS0",
            "snippet": {
                "publishedAt": "2018-07-16T16:51:44.000Z",
                "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
                "title": "React Tutorial - Learn React - React Crash Course [2019]",
                "description": "React Tutorial with Examples - Learn React from scratch with this React Crash Course 2019. \n🔥LIMITED TIME: Get the full course for $29 (reg price $149) : http://bit.ly/2KVl2A3\n🔥Subscribe for more videos like this: https://goo.gl/6PYaGF\n\nWant to learn more from me? Check out my blog and courses: \n\nhttp://programmingwithmosh.com \nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani\n\nTABLE OF CONTENT\n\n00:00 Introduction\n01:14 What is React\n05:48 Setting Up the Development Environment \n09:27 Your First React App\n16:03 Hello World\n22:26 Components\n24:06 Setting Up the Project\n26:15 Your First React Component\n31:38 Specifying Children\n35:56 Embedding Expressions\n40:49 Setting Attributes\n46:36 Rendering Classes Dynamically\n50:57 Rendering Lists\n54:58 Conditional Rendering\n1:01:04 Handling Events\n1:03:56 Binding Event Handlers\n1:08:34 Updating the State\n1:10:51 What Happens When State Changes \n1:12:58 Passing Event Arguments\n1:17:31 Composing Components\n1:21:18 Passing Data to Components\n1:24:31 Passing Children\n1:27:44 Debugging React Apps\n1:31:55 Props vs State\n1:34:22 Raising and Handling Events\n1:39:16 Updating the State\n1:43:57 Single Source of Truth\n1:47:55 Removing the Local State\n1:54:44 Multiple Components in Sync \n2:00:39 Lifting the State Up\n2:06:18 Stateless Functional Components\n2:08:49 Destructuring Arguments\n2:10:52 Lifecycle Hooks\n2:12:32 Mounting Phase \n2:18:09 Updating Phase \n2:22:31 Unmounting Phase",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Programming with Mosh",
                "tags": [
                    "react tutorial",
                    "learn react",
                    "react course",
                    "reactjs tutorial",
                    "react crash course",
                    "react js tutorial",
                    "reactjs course",
                    "react tutorial for beginners",
                    "reactjs tutorial for beginners",
                    "react.js",
                    "reactJS",
                    "react js",
                    "react",
                    "learn reactjs",
                    "tutorial",
                    "angular",
                    "javascript",
                    "es6",
                    "crash course",
                    "programming with mosh",
                    "code with mosh",
                    "web development",
                    "mosh hamedani"
                ],
                "categoryId": "22",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "React Tutorial - Learn React - React Crash Course [2019]",
                    "description": "React Tutorial with Examples - Learn React from scratch with this React Crash Course 2019. \n🔥LIMITED TIME: Get the full course for $29 (reg price $149) : http://bit.ly/2KVl2A3\n🔥Subscribe for more videos like this: https://goo.gl/6PYaGF\n\nWant to learn more from me? Check out my blog and courses: \n\nhttp://programmingwithmosh.com \nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani\n\nTABLE OF CONTENT\n\n00:00 Introduction\n01:14 What is React\n05:48 Setting Up the Development Environment \n09:27 Your First React App\n16:03 Hello World\n22:26 Components\n24:06 Setting Up the Project\n26:15 Your First React Component\n31:38 Specifying Children\n35:56 Embedding Expressions\n40:49 Setting Attributes\n46:36 Rendering Classes Dynamically\n50:57 Rendering Lists\n54:58 Conditional Rendering\n1:01:04 Handling Events\n1:03:56 Binding Event Handlers\n1:08:34 Updating the State\n1:10:51 What Happens When State Changes \n1:12:58 Passing Event Arguments\n1:17:31 Composing Components\n1:21:18 Passing Data to Components\n1:24:31 Passing Children\n1:27:44 Debugging React Apps\n1:31:55 Props vs State\n1:34:22 Raising and Handling Events\n1:39:16 Updating the State\n1:43:57 Single Source of Truth\n1:47:55 Removing the Local State\n1:54:44 Multiple Components in Sync \n2:00:39 Lifting the State Up\n2:06:18 Stateless Functional Components\n2:08:49 Destructuring Arguments\n2:10:52 Lifecycle Hooks\n2:12:32 Mounting Phase \n2:18:09 Updating Phase \n2:22:31 Unmounting Phase"
                },
                "defaultAudioLanguage": "en"
            },
            "contentDetails": {
                "duration": "PT2H25M27S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "2018537",
                "likeCount": "32029",
                "dislikeCount": "483",
                "favoriteCount": "0",
                "commentCount": "3083"
            }
        }
    ]
}

const TEST_YOUTUBE_CHANNEL_DATA = {
    "kind": "youtube#channelListResponse",
    "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/Vw6WNpBBeb_41VBQsaegVMoxgP4\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [
        {
            "kind": "youtube#channel",
            "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/VAFe3mIxuID6bsLV0o33mPuIsNk\"",
            "id": "UC8butISFwT-Wl7EV0hUK0BQ",
            "snippet": {
                "title": "freeCodeCamp.org",
                "description": "We're an open source community of busy people who learn to code and build projects for nonprofits.",
                "customUrl": "freecodecamp",
                "publishedAt": "2014-12-16T21:18:48.000Z",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/a/AATXAJykB-vkpK4WB_3--wQUc1GVwYkSrLXrYOOPKg=s88-c-k-c0xffffffff-no-rj-mo",
                        "width": 88,
                        "height": 88
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/a/AATXAJykB-vkpK4WB_3--wQUc1GVwYkSrLXrYOOPKg=s240-c-k-c0xffffffff-no-rj-mo",
                        "width": 240,
                        "height": 240
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/a/AATXAJykB-vkpK4WB_3--wQUc1GVwYkSrLXrYOOPKg=s800-c-k-c0xffffffff-no-rj-mo",
                        "width": 800,
                        "height": 800
                    }
                },
                "localized": {
                    "title": "freeCodeCamp.org",
                    "description": "We're an open source community of busy people who learn to code and build projects for nonprofits."
                },
                "country": "US"
            },
            "statistics": {
                "viewCount": "78853218",
                "commentCount": "0",
                "subscriberCount": "1880000",
                "hiddenSubscriberCount": false,
                "videoCount": "1090"
            }
        }
    ]
}

const TEST_GITHUB_SEARCH_DATA = {
    "total_count": 1320925,
    "incomplete_results": false,
    "items": [
        {
            "id": 28457823,
            "node_id": "MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==",
            "name": "freeCodeCamp",
            "full_name": "freeCodeCamp/freeCodeCamp",
            "private": false,
            "owner": {
                "login": "freeCodeCamp",
                "id": 9892522,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=",
                "avatar_url": "https://avatars0.githubusercontent.com/u/9892522?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/freeCodeCamp",
                "html_url": "https://github.com/freeCodeCamp",
                "followers_url": "https://api.github.com/users/freeCodeCamp/followers",
                "following_url": "https://api.github.com/users/freeCodeCamp/following{/other_user}",
                "gists_url": "https://api.github.com/users/freeCodeCamp/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/freeCodeCamp/subscriptions",
                "organizations_url": "https://api.github.com/users/freeCodeCamp/orgs",
                "repos_url": "https://api.github.com/users/freeCodeCamp/repos",
                "events_url": "https://api.github.com/users/freeCodeCamp/events{/privacy}",
                "received_events_url": "https://api.github.com/users/freeCodeCamp/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/freeCodeCamp/freeCodeCamp",
            "description": "freeCodeCamp.org's open source codebase and curriculum. Learn to code at home.",
            "fork": false,
            "url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp",
            "forks_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks",
            "keys_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/teams",
            "hooks_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/hooks",
            "issue_events_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/events{/number}",
            "events_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/events",
            "assignees_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/assignees{/user}",
            "branches_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/branches{/branch}",
            "tags_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/tags",
            "blobs_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages",
            "stargazers_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/stargazers",
            "contributors_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors",
            "subscribers_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscribers",
            "subscription_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscription",
            "commits_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/{+path}",
            "compare_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/merges",
            "archive_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/downloads",
            "issues_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues{/number}",
            "pulls_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/labels{/name}",
            "releases_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/releases{/id}",
            "deployments_url": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/deployments",
            "created_at": "2014-12-24T17:49:19Z",
            "updated_at": "2020-04-27T11:47:36Z",
            "pushed_at": "2020-04-27T11:24:05Z",
            "git_url": "git://github.com/freeCodeCamp/freeCodeCamp.git",
            "ssh_url": "git@github.com:freeCodeCamp/freeCodeCamp.git",
            "clone_url": "https://github.com/freeCodeCamp/freeCodeCamp.git",
            "svn_url": "https://github.com/freeCodeCamp/freeCodeCamp",
            "homepage": "https://www.freecodecamp.org",
            "size": 125782,
            "stargazers_count": 310264,
            "watchers_count": 310264,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": false,
            "has_downloads": true,
            "has_wiki": false,
            "has_pages": true,
            "forks_count": 23977,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 243,
            "license": {
                "key": "bsd-3-clause",
                "name": "BSD 3-Clause \"New\" or \"Revised\" License",
                "spdx_id": "BSD-3-Clause",
                "url": "https://api.github.com/licenses/bsd-3-clause",
                "node_id": "MDc6TGljZW5zZTU="
            },
            "forks": 23977,
            "open_issues": 243,
            "watchers": 310264,
            "default_branch": "master",
            "permissions": {
                "admin": false,
                "push": false,
                "pull": true
            },
            "score": 1
        },
        {
            "id": 10270250,
            "node_id": "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
            "name": "react",
            "full_name": "facebook/react",
            "private": false,
            "owner": {
                "login": "facebook",
                "id": 69631,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
                "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/facebook",
                "html_url": "https://github.com/facebook",
                "followers_url": "https://api.github.com/users/facebook/followers",
                "following_url": "https://api.github.com/users/facebook/following{/other_user}",
                "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
                "organizations_url": "https://api.github.com/users/facebook/orgs",
                "repos_url": "https://api.github.com/users/facebook/repos",
                "events_url": "https://api.github.com/users/facebook/events{/privacy}",
                "received_events_url": "https://api.github.com/users/facebook/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/facebook/react",
            "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
            "fork": false,
            "url": "https://api.github.com/repos/facebook/react",
            "forks_url": "https://api.github.com/repos/facebook/react/forks",
            "keys_url": "https://api.github.com/repos/facebook/react/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/facebook/react/teams",
            "hooks_url": "https://api.github.com/repos/facebook/react/hooks",
            "issue_events_url": "https://api.github.com/repos/facebook/react/issues/events{/number}",
            "events_url": "https://api.github.com/repos/facebook/react/events",
            "assignees_url": "https://api.github.com/repos/facebook/react/assignees{/user}",
            "branches_url": "https://api.github.com/repos/facebook/react/branches{/branch}",
            "tags_url": "https://api.github.com/repos/facebook/react/tags",
            "blobs_url": "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/facebook/react/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/facebook/react/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/facebook/react/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/facebook/react/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/facebook/react/languages",
            "stargazers_url": "https://api.github.com/repos/facebook/react/stargazers",
            "contributors_url": "https://api.github.com/repos/facebook/react/contributors",
            "subscribers_url": "https://api.github.com/repos/facebook/react/subscribers",
            "subscription_url": "https://api.github.com/repos/facebook/react/subscription",
            "commits_url": "https://api.github.com/repos/facebook/react/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/facebook/react/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/facebook/react/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/facebook/react/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/facebook/react/contents/{+path}",
            "compare_url": "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/facebook/react/merges",
            "archive_url": "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/facebook/react/downloads",
            "issues_url": "https://api.github.com/repos/facebook/react/issues{/number}",
            "pulls_url": "https://api.github.com/repos/facebook/react/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/facebook/react/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/facebook/react/labels{/name}",
            "releases_url": "https://api.github.com/repos/facebook/react/releases{/id}",
            "deployments_url": "https://api.github.com/repos/facebook/react/deployments",
            "created_at": "2013-05-24T16:15:54Z",
            "updated_at": "2020-04-27T11:47:22Z",
            "pushed_at": "2020-04-27T11:34:50Z",
            "git_url": "git://github.com/facebook/react.git",
            "ssh_url": "git@github.com:facebook/react.git",
            "clone_url": "https://github.com/facebook/react.git",
            "svn_url": "https://github.com/facebook/react",
            "homepage": "https://reactjs.org",
            "size": 154147,
            "stargazers_count": 147605,
            "watchers_count": 147605,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": true,
            "forks_count": 28549,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 560,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 28549,
            "open_issues": 560,
            "watchers": 147605,
            "default_branch": "master",
            "permissions": {
                "admin": false,
                "push": false,
                "pull": true
            },
            "score": 1
        },
        {
            "id": 29028775,
            "node_id": "MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ==",
            "name": "react-native",
            "full_name": "facebook/react-native",
            "private": false,
            "owner": {
                "login": "facebook",
                "id": 69631,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
                "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/facebook",
                "html_url": "https://github.com/facebook",
                "followers_url": "https://api.github.com/users/facebook/followers",
                "following_url": "https://api.github.com/users/facebook/following{/other_user}",
                "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
                "organizations_url": "https://api.github.com/users/facebook/orgs",
                "repos_url": "https://api.github.com/users/facebook/repos",
                "events_url": "https://api.github.com/users/facebook/events{/privacy}",
                "received_events_url": "https://api.github.com/users/facebook/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/facebook/react-native",
            "description": "A framework for building native apps with React.",
            "fork": false,
            "url": "https://api.github.com/repos/facebook/react-native",
            "forks_url": "https://api.github.com/repos/facebook/react-native/forks",
            "keys_url": "https://api.github.com/repos/facebook/react-native/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/facebook/react-native/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/facebook/react-native/teams",
            "hooks_url": "https://api.github.com/repos/facebook/react-native/hooks",
            "issue_events_url": "https://api.github.com/repos/facebook/react-native/issues/events{/number}",
            "events_url": "https://api.github.com/repos/facebook/react-native/events",
            "assignees_url": "https://api.github.com/repos/facebook/react-native/assignees{/user}",
            "branches_url": "https://api.github.com/repos/facebook/react-native/branches{/branch}",
            "tags_url": "https://api.github.com/repos/facebook/react-native/tags",
            "blobs_url": "https://api.github.com/repos/facebook/react-native/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/facebook/react-native/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/facebook/react-native/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/facebook/react-native/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/facebook/react-native/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/facebook/react-native/languages",
            "stargazers_url": "https://api.github.com/repos/facebook/react-native/stargazers",
            "contributors_url": "https://api.github.com/repos/facebook/react-native/contributors",
            "subscribers_url": "https://api.github.com/repos/facebook/react-native/subscribers",
            "subscription_url": "https://api.github.com/repos/facebook/react-native/subscription",
            "commits_url": "https://api.github.com/repos/facebook/react-native/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/facebook/react-native/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/facebook/react-native/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/facebook/react-native/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/facebook/react-native/contents/{+path}",
            "compare_url": "https://api.github.com/repos/facebook/react-native/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/facebook/react-native/merges",
            "archive_url": "https://api.github.com/repos/facebook/react-native/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/facebook/react-native/downloads",
            "issues_url": "https://api.github.com/repos/facebook/react-native/issues{/number}",
            "pulls_url": "https://api.github.com/repos/facebook/react-native/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/facebook/react-native/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/facebook/react-native/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/facebook/react-native/labels{/name}",
            "releases_url": "https://api.github.com/repos/facebook/react-native/releases{/id}",
            "deployments_url": "https://api.github.com/repos/facebook/react-native/deployments",
            "created_at": "2015-01-09T18:10:16Z",
            "updated_at": "2020-04-27T11:02:49Z",
            "pushed_at": "2020-04-27T10:23:43Z",
            "git_url": "git://github.com/facebook/react-native.git",
            "ssh_url": "git@github.com:facebook/react-native.git",
            "clone_url": "https://github.com/facebook/react-native.git",
            "svn_url": "https://github.com/facebook/react-native",
            "homepage": "https://reactnative.dev",
            "size": 509208,
            "stargazers_count": 86665,
            "watchers_count": 86665,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": true,
            "forks_count": 19302,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 828,
            "license": {
                "key": "other",
                "name": "Other",
                "spdx_id": "NOASSERTION",
                "url": null,
                "node_id": "MDc6TGljZW5zZTA="
            },
            "forks": 19302,
            "open_issues": 828,
            "watchers": 86665,
            "default_branch": "master",
            "permissions": {
                "admin": false,
                "push": false,
                "pull": true
            },
            "score": 1
        },
        {
            "id": 63537249,
            "node_id": "MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==",
            "name": "create-react-app",
            "full_name": "facebook/create-react-app",
            "private": false,
            "owner": {
                "login": "facebook",
                "id": 69631,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
                "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/facebook",
                "html_url": "https://github.com/facebook",
                "followers_url": "https://api.github.com/users/facebook/followers",
                "following_url": "https://api.github.com/users/facebook/following{/other_user}",
                "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
                "organizations_url": "https://api.github.com/users/facebook/orgs",
                "repos_url": "https://api.github.com/users/facebook/repos",
                "events_url": "https://api.github.com/users/facebook/events{/privacy}",
                "received_events_url": "https://api.github.com/users/facebook/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/facebook/create-react-app",
            "description": "Set up a modern web app by running one command.",
            "fork": false,
            "url": "https://api.github.com/repos/facebook/create-react-app",
            "forks_url": "https://api.github.com/repos/facebook/create-react-app/forks",
            "keys_url": "https://api.github.com/repos/facebook/create-react-app/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/facebook/create-react-app/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/facebook/create-react-app/teams",
            "hooks_url": "https://api.github.com/repos/facebook/create-react-app/hooks",
            "issue_events_url": "https://api.github.com/repos/facebook/create-react-app/issues/events{/number}",
            "events_url": "https://api.github.com/repos/facebook/create-react-app/events",
            "assignees_url": "https://api.github.com/repos/facebook/create-react-app/assignees{/user}",
            "branches_url": "https://api.github.com/repos/facebook/create-react-app/branches{/branch}",
            "tags_url": "https://api.github.com/repos/facebook/create-react-app/tags",
            "blobs_url": "https://api.github.com/repos/facebook/create-react-app/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/facebook/create-react-app/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/facebook/create-react-app/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/facebook/create-react-app/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/facebook/create-react-app/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/facebook/create-react-app/languages",
            "stargazers_url": "https://api.github.com/repos/facebook/create-react-app/stargazers",
            "contributors_url": "https://api.github.com/repos/facebook/create-react-app/contributors",
            "subscribers_url": "https://api.github.com/repos/facebook/create-react-app/subscribers",
            "subscription_url": "https://api.github.com/repos/facebook/create-react-app/subscription",
            "commits_url": "https://api.github.com/repos/facebook/create-react-app/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/facebook/create-react-app/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/facebook/create-react-app/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/facebook/create-react-app/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/facebook/create-react-app/contents/{+path}",
            "compare_url": "https://api.github.com/repos/facebook/create-react-app/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/facebook/create-react-app/merges",
            "archive_url": "https://api.github.com/repos/facebook/create-react-app/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/facebook/create-react-app/downloads",
            "issues_url": "https://api.github.com/repos/facebook/create-react-app/issues{/number}",
            "pulls_url": "https://api.github.com/repos/facebook/create-react-app/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/facebook/create-react-app/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/facebook/create-react-app/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/facebook/create-react-app/labels{/name}",
            "releases_url": "https://api.github.com/repos/facebook/create-react-app/releases{/id}",
            "deployments_url": "https://api.github.com/repos/facebook/create-react-app/deployments",
            "created_at": "2016-07-17T14:55:11Z",
            "updated_at": "2020-04-27T11:09:54Z",
            "pushed_at": "2020-04-26T12:49:42Z",
            "git_url": "git://github.com/facebook/create-react-app.git",
            "ssh_url": "git@github.com:facebook/create-react-app.git",
            "clone_url": "https://github.com/facebook/create-react-app.git",
            "svn_url": "https://github.com/facebook/create-react-app",
            "homepage": "https://create-react-app.dev",
            "size": 13744,
            "stargazers_count": 78103,
            "watchers_count": 78103,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": false,
            "has_pages": true,
            "forks_count": 18780,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 633,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 18780,
            "open_issues": 633,
            "watchers": 78103,
            "default_branch": "master",
            "permissions": {
                "admin": false,
                "push": false,
                "pull": true
            },
            "score": 1
        },
        {
            "id": 14098069,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNDA5ODA2OQ==",
            "name": "free-programming-books-zh_CN",
            "full_name": "justjavac/free-programming-books-zh_CN",
            "private": false,
            "owner": {
                "login": "justjavac",
                "id": 359395,
                "node_id": "MDQ6VXNlcjM1OTM5NQ==",
                "avatar_url": "https://avatars1.githubusercontent.com/u/359395?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/justjavac",
                "html_url": "https://github.com/justjavac",
                "followers_url": "https://api.github.com/users/justjavac/followers",
                "following_url": "https://api.github.com/users/justjavac/following{/other_user}",
                "gists_url": "https://api.github.com/users/justjavac/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/justjavac/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/justjavac/subscriptions",
                "organizations_url": "https://api.github.com/users/justjavac/orgs",
                "repos_url": "https://api.github.com/users/justjavac/repos",
                "events_url": "https://api.github.com/users/justjavac/events{/privacy}",
                "received_events_url": "https://api.github.com/users/justjavac/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/justjavac/free-programming-books-zh_CN",
            "description": ":books: 免费的计算机编程类中文书籍，欢迎投稿",
            "fork": false,
            "url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN",
            "forks_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/forks",
            "keys_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/teams",
            "hooks_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/hooks",
            "issue_events_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/issues/events{/number}",
            "events_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/events",
            "assignees_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/assignees{/user}",
            "branches_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/branches{/branch}",
            "tags_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/tags",
            "blobs_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/languages",
            "stargazers_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/stargazers",
            "contributors_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/contributors",
            "subscribers_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/subscribers",
            "subscription_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/subscription",
            "commits_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/contents/{+path}",
            "compare_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/merges",
            "archive_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/downloads",
            "issues_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/issues{/number}",
            "pulls_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/labels{/name}",
            "releases_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/releases{/id}",
            "deployments_url": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/deployments",
            "created_at": "2013-11-04T01:59:19Z",
            "updated_at": "2020-04-27T11:32:12Z",
            "pushed_at": "2020-04-25T10:47:38Z",
            "git_url": "git://github.com/justjavac/free-programming-books-zh_CN.git",
            "ssh_url": "git@github.com:justjavac/free-programming-books-zh_CN.git",
            "clone_url": "https://github.com/justjavac/free-programming-books-zh_CN.git",
            "svn_url": "https://github.com/justjavac/free-programming-books-zh_CN",
            "homepage": "http://weibo.com/justjavac",
            "size": 1044,
            "stargazers_count": 65868,
            "watchers_count": 65868,
            "language": null,
            "has_issues": true,
            "has_projects": false,
            "has_downloads": true,
            "has_wiki": false,
            "has_pages": false,
            "forks_count": 20297,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 141,
            "license": {
                "key": "gpl-3.0",
                "name": "GNU General Public License v3.0",
                "spdx_id": "GPL-3.0",
                "url": "https://api.github.com/licenses/gpl-3.0",
                "node_id": "MDc6TGljZW5zZTk="
            },
            "forks": 20297,
            "open_issues": 141,
            "watchers": 65868,
            "default_branch": "master",
            "permissions": {
                "admin": false,
                "push": false,
                "pull": true
            },
            "score": 1
        },
        {
            "id": 34526884,
            "node_id": "MDEwOlJlcG9zaXRvcnkzNDUyNjg4NA==",
            "name": "ant-design",
            "full_name": "ant-design/ant-design",
            "private": false,
            "owner": {
                "login": "ant-design",
                "id": 12101536,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyMTAxNTM2",
                "avatar_url": "https://avatars3.githubusercontent.com/u/12101536?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/ant-design",
                "html_url": "https://github.com/ant-design",
                "followers_url": "https://api.github.com/users/ant-design/followers",
                "following_url": "https://api.github.com/users/ant-design/following{/other_user}",
                "gists_url": "https://api.github.com/users/ant-design/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/ant-design/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ant-design/subscriptions",
                "organizations_url": "https://api.github.com/users/ant-design/orgs",
                "repos_url": "https://api.github.com/users/ant-design/repos",
                "events_url": "https://api.github.com/users/ant-design/events{/privacy}",
                "received_events_url": "https://api.github.com/users/ant-design/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/ant-design/ant-design",
            "description": "🌈 A UI Design Language and React UI library",
            "fork": false,
            "url": "https://api.github.com/repos/ant-design/ant-design",
            "forks_url": "https://api.github.com/repos/ant-design/ant-design/forks",
            "keys_url": "https://api.github.com/repos/ant-design/ant-design/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/ant-design/ant-design/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/ant-design/ant-design/teams",
            "hooks_url": "https://api.github.com/repos/ant-design/ant-design/hooks",
            "issue_events_url": "https://api.github.com/repos/ant-design/ant-design/issues/events{/number}",
            "events_url": "https://api.github.com/repos/ant-design/ant-design/events",
            "assignees_url": "https://api.github.com/repos/ant-design/ant-design/assignees{/user}",
            "branches_url": "https://api.github.com/repos/ant-design/ant-design/branches{/branch}",
            "tags_url": "https://api.github.com/repos/ant-design/ant-design/tags",
            "blobs_url": "https://api.github.com/repos/ant-design/ant-design/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/ant-design/ant-design/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/ant-design/ant-design/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/ant-design/ant-design/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/ant-design/ant-design/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/ant-design/ant-design/languages",
            "stargazers_url": "https://api.github.com/repos/ant-design/ant-design/stargazers",
            "contributors_url": "https://api.github.com/repos/ant-design/ant-design/contributors",
            "subscribers_url": "https://api.github.com/repos/ant-design/ant-design/subscribers",
            "subscription_url": "https://api.github.com/repos/ant-design/ant-design/subscription",
            "commits_url": "https://api.github.com/repos/ant-design/ant-design/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/ant-design/ant-design/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/ant-design/ant-design/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/ant-design/ant-design/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/ant-design/ant-design/contents/{+path}",
            "compare_url": "https://api.github.com/repos/ant-design/ant-design/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/ant-design/ant-design/merges",
            "archive_url": "https://api.github.com/repos/ant-design/ant-design/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/ant-design/ant-design/downloads",
            "issues_url": "https://api.github.com/repos/ant-design/ant-design/issues{/number}",
            "pulls_url": "https://api.github.com/repos/ant-design/ant-design/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/ant-design/ant-design/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/ant-design/ant-design/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/ant-design/ant-design/labels{/name}",
            "releases_url": "https://api.github.com/repos/ant-design/ant-design/releases{/id}",
            "deployments_url": "https://api.github.com/repos/ant-design/ant-design/deployments",
            "created_at": "2015-04-24T15:37:24Z",
            "updated_at": "2020-04-27T11:46:17Z",
            "pushed_at": "2020-04-27T11:43:07Z",
            "git_url": "git://github.com/ant-design/ant-design.git",
            "ssh_url": "git@github.com:ant-design/ant-design.git",
            "clone_url": "https://github.com/ant-design/ant-design.git",
            "svn_url": "https://github.com/ant-design/ant-design",
            "homepage": "https://ant.design",
            "size": 189374,
            "stargazers_count": 59060,
            "watchers_count": 59060,
            "language": "TypeScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": true,
            "forks_count": 21667,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 471,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 21667,
            "open_issues": 471,
            "watchers": 59060,
            "default_branch": "master",
            "permissions": {
                "admin": false,
                "push": false,
                "pull": true
            },
            "score": 1
        },
        {
            "id": 23083156,
            "node_id": "MDEwOlJlcG9zaXRvcnkyMzA4MzE1Ng==",
            "name": "material-ui",
            "full_name": "mui-org/material-ui",
            "private": false,
            "owner": {
                "login": "mui-org",
                "id": 33663932,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjMzNjYzOTMy",
                "avatar_url": "https://avatars2.githubusercontent.com/u/33663932?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/mui-org",
                "html_url": "https://github.com/mui-org",
                "followers_url": "https://api.github.com/users/mui-org/followers",
                "following_url": "https://api.github.com/users/mui-org/following{/other_user}",
                "gists_url": "https://api.github.com/users/mui-org/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/mui-org/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mui-org/subscriptions",
                "organizations_url": "https://api.github.com/users/mui-org/orgs",
                "repos_url": "https://api.github.com/users/mui-org/repos",
                "events_url": "https://api.github.com/users/mui-org/events{/privacy}",
                "received_events_url": "https://api.github.com/users/mui-org/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/mui-org/material-ui",
            "description": "React components for faster and easier web development. Build your own design system, or start with Material Design.",
            "fork": false,
            "url": "https://api.github.com/repos/mui-org/material-ui",
            "forks_url": "https://api.github.com/repos/mui-org/material-ui/forks",
            "keys_url": "https://api.github.com/repos/mui-org/material-ui/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/mui-org/material-ui/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/mui-org/material-ui/teams",
            "hooks_url": "https://api.github.com/repos/mui-org/material-ui/hooks",
            "issue_events_url": "https://api.github.com/repos/mui-org/material-ui/issues/events{/number}",
            "events_url": "https://api.github.com/repos/mui-org/material-ui/events",
            "assignees_url": "https://api.github.com/repos/mui-org/material-ui/assignees{/user}",
            "branches_url": "https://api.github.com/repos/mui-org/material-ui/branches{/branch}",
            "tags_url": "https://api.github.com/repos/mui-org/material-ui/tags",
            "blobs_url": "https://api.github.com/repos/mui-org/material-ui/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/mui-org/material-ui/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/mui-org/material-ui/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/mui-org/material-ui/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/mui-org/material-ui/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/mui-org/material-ui/languages",
            "stargazers_url": "https://api.github.com/repos/mui-org/material-ui/stargazers",
            "contributors_url": "https://api.github.com/repos/mui-org/material-ui/contributors",
            "subscribers_url": "https://api.github.com/repos/mui-org/material-ui/subscribers",
            "subscription_url": "https://api.github.com/repos/mui-org/material-ui/subscription",
            "commits_url": "https://api.github.com/repos/mui-org/material-ui/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/mui-org/material-ui/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/mui-org/material-ui/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/mui-org/material-ui/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/mui-org/material-ui/contents/{+path}",
            "compare_url": "https://api.github.com/repos/mui-org/material-ui/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/mui-org/material-ui/merges",
            "archive_url": "https://api.github.com/repos/mui-org/material-ui/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/mui-org/material-ui/downloads",
            "issues_url": "https://api.github.com/repos/mui-org/material-ui/issues{/number}",
            "pulls_url": "https://api.github.com/repos/mui-org/material-ui/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/mui-org/material-ui/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/mui-org/material-ui/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/mui-org/material-ui/labels{/name}",
            "releases_url": "https://api.github.com/repos/mui-org/material-ui/releases{/id}",
            "deployments_url": "https://api.github.com/repos/mui-org/material-ui/deployments",
            "created_at": "2014-08-18T19:11:54Z",
            "updated_at": "2020-04-27T11:29:17Z",
            "pushed_at": "2020-04-27T11:42:54Z",
            "git_url": "git://github.com/mui-org/material-ui.git",
            "ssh_url": "git@github.com:mui-org/material-ui.git",
            "clone_url": "https://github.com/mui-org/material-ui.git",
            "svn_url": "https://github.com/mui-org/material-ui",
            "homepage": "https://material-ui.com/",
            "size": 112477,
            "stargazers_count": 56758,
            "watchers_count": 56758,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": false,
            "has_downloads": true,
            "has_wiki": false,
            "has_pages": false,
            "forks_count": 15685,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 398,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 15685,
            "open_issues": 398,
            "watchers": 56758,
            "default_branch": "master",
            "permissions": {
                "admin": false,
                "push": false,
                "pull": true
            },
            "score": 1
        },
        {
            "id": 54173593,
            "node_id": "MDEwOlJlcG9zaXRvcnk1NDE3MzU5Mw==",
            "name": "storybook",
            "full_name": "storybookjs/storybook",
            "private": false,
            "owner": {
                "login": "storybookjs",
                "id": 22632046,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjIyNjMyMDQ2",
                "avatar_url": "https://avatars3.githubusercontent.com/u/22632046?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/storybookjs",
                "html_url": "https://github.com/storybookjs",
                "followers_url": "https://api.github.com/users/storybookjs/followers",
                "following_url": "https://api.github.com/users/storybookjs/following{/other_user}",
                "gists_url": "https://api.github.com/users/storybookjs/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/storybookjs/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/storybookjs/subscriptions",
                "organizations_url": "https://api.github.com/users/storybookjs/orgs",
                "repos_url": "https://api.github.com/users/storybookjs/repos",
                "events_url": "https://api.github.com/users/storybookjs/events{/privacy}",
                "received_events_url": "https://api.github.com/users/storybookjs/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/storybookjs/storybook",
            "description": "📓 UI component dev & test: React, Vue, Angular, React Native, Ember, Web Components & more!",
            "fork": false,
            "url": "https://api.github.com/repos/storybookjs/storybook",
            "forks_url": "https://api.github.com/repos/storybookjs/storybook/forks",
            "keys_url": "https://api.github.com/repos/storybookjs/storybook/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/storybookjs/storybook/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/storybookjs/storybook/teams",
            "hooks_url": "https://api.github.com/repos/storybookjs/storybook/hooks",
            "issue_events_url": "https://api.github.com/repos/storybookjs/storybook/issues/events{/number}",
            "events_url": "https://api.github.com/repos/storybookjs/storybook/events",
            "assignees_url": "https://api.github.com/repos/storybookjs/storybook/assignees{/user}",
            "branches_url": "https://api.github.com/repos/storybookjs/storybook/branches{/branch}",
            "tags_url": "https://api.github.com/repos/storybookjs/storybook/tags",
            "blobs_url": "https://api.github.com/repos/storybookjs/storybook/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/storybookjs/storybook/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/storybookjs/storybook/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/storybookjs/storybook/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/storybookjs/storybook/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/storybookjs/storybook/languages",
            "stargazers_url": "https://api.github.com/repos/storybookjs/storybook/stargazers",
            "contributors_url": "https://api.github.com/repos/storybookjs/storybook/contributors",
            "subscribers_url": "https://api.github.com/repos/storybookjs/storybook/subscribers",
            "subscription_url": "https://api.github.com/repos/storybookjs/storybook/subscription",
            "commits_url": "https://api.github.com/repos/storybookjs/storybook/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/storybookjs/storybook/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/storybookjs/storybook/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/storybookjs/storybook/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/storybookjs/storybook/contents/{+path}",
            "compare_url": "https://api.github.com/repos/storybookjs/storybook/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/storybookjs/storybook/merges",
            "archive_url": "https://api.github.com/repos/storybookjs/storybook/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/storybookjs/storybook/downloads",
            "issues_url": "https://api.github.com/repos/storybookjs/storybook/issues{/number}",
            "pulls_url": "https://api.github.com/repos/storybookjs/storybook/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/storybookjs/storybook/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/storybookjs/storybook/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/storybookjs/storybook/labels{/name}",
            "releases_url": "https://api.github.com/repos/storybookjs/storybook/releases{/id}",
            "deployments_url": "https://api.github.com/repos/storybookjs/storybook/deployments",
            "created_at": "2016-03-18T04:23:44Z",
            "updated_at": "2020-04-27T11:38:49Z",
            "pushed_at": "2020-04-27T11:37:40Z",
            "git_url": "git://github.com/storybookjs/storybook.git",
            "ssh_url": "git@github.com:storybookjs/storybook.git",
            "clone_url": "https://github.com/storybookjs/storybook.git",
            "svn_url": "https://github.com/storybookjs/storybook",
            "homepage": "https://storybook.js.org",
            "size": 279771,
            "stargazers_count": 47472,
            "watchers_count": 47472,
            "language": "TypeScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": false,
            "has_pages": false,
            "forks_count": 4527,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 567,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 4527,
            "open_issues": 567,
            "watchers": 47472,
            "default_branch": "next",
            "permissions": {
                "admin": false,
                "push": false,
                "pull": true
            },
            "score": 1
        },
        {
            "id": 70107786,
            "node_id": "MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==",
            "name": "next.js",
            "full_name": "zeit/next.js",
            "private": false,
            "owner": {
                "login": "zeit",
                "id": 14985020,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjE0OTg1MDIw",
                "avatar_url": "https://avatars0.githubusercontent.com/u/14985020?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/zeit",
                "html_url": "https://github.com/zeit",
                "followers_url": "https://api.github.com/users/zeit/followers",
                "following_url": "https://api.github.com/users/zeit/following{/other_user}",
                "gists_url": "https://api.github.com/users/zeit/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/zeit/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/zeit/subscriptions",
                "organizations_url": "https://api.github.com/users/zeit/orgs",
                "repos_url": "https://api.github.com/users/zeit/repos",
                "events_url": "https://api.github.com/users/zeit/events{/privacy}",
                "received_events_url": "https://api.github.com/users/zeit/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/zeit/next.js",
            "description": "The React Framework",
            "fork": false,
            "url": "https://api.github.com/repos/zeit/next.js",
            "forks_url": "https://api.github.com/repos/zeit/next.js/forks",
            "keys_url": "https://api.github.com/repos/zeit/next.js/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/zeit/next.js/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/zeit/next.js/teams",
            "hooks_url": "https://api.github.com/repos/zeit/next.js/hooks",
            "issue_events_url": "https://api.github.com/repos/zeit/next.js/issues/events{/number}",
            "events_url": "https://api.github.com/repos/zeit/next.js/events",
            "assignees_url": "https://api.github.com/repos/zeit/next.js/assignees{/user}",
            "branches_url": "https://api.github.com/repos/zeit/next.js/branches{/branch}",
            "tags_url": "https://api.github.com/repos/zeit/next.js/tags",
            "blobs_url": "https://api.github.com/repos/zeit/next.js/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/zeit/next.js/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/zeit/next.js/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/zeit/next.js/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/zeit/next.js/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/zeit/next.js/languages",
            "stargazers_url": "https://api.github.com/repos/zeit/next.js/stargazers",
            "contributors_url": "https://api.github.com/repos/zeit/next.js/contributors",
            "subscribers_url": "https://api.github.com/repos/zeit/next.js/subscribers",
            "subscription_url": "https://api.github.com/repos/zeit/next.js/subscription",
            "commits_url": "https://api.github.com/repos/zeit/next.js/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/zeit/next.js/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/zeit/next.js/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/zeit/next.js/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/zeit/next.js/contents/{+path}",
            "compare_url": "https://api.github.com/repos/zeit/next.js/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/zeit/next.js/merges",
            "archive_url": "https://api.github.com/repos/zeit/next.js/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/zeit/next.js/downloads",
            "issues_url": "https://api.github.com/repos/zeit/next.js/issues{/number}",
            "pulls_url": "https://api.github.com/repos/zeit/next.js/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/zeit/next.js/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/zeit/next.js/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/zeit/next.js/labels{/name}",
            "releases_url": "https://api.github.com/repos/zeit/next.js/releases{/id}",
            "deployments_url": "https://api.github.com/repos/zeit/next.js/deployments",
            "created_at": "2016-10-05T23:32:51Z",
            "updated_at": "2020-04-27T10:20:33Z",
            "pushed_at": "2020-04-27T10:03:26Z",
            "git_url": "git://github.com/zeit/next.js.git",
            "ssh_url": "git@github.com:zeit/next.js.git",
            "clone_url": "https://github.com/zeit/next.js.git",
            "svn_url": "https://github.com/zeit/next.js",
            "homepage": "https://nextjs.org",
            "size": 33006,
            "stargazers_count": 47422,
            "watchers_count": 47422,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": false,
            "has_downloads": true,
            "has_wiki": false,
            "has_pages": false,
            "forks_count": 6998,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 510,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 6998,
            "open_issues": 510,
            "watchers": 47422,
            "default_branch": "canary",
            "permissions": {
                "admin": false,
                "push": false,
                "pull": true
            },
            "score": 1
        },
        {
            "id": 36040894,
            "node_id": "MDEwOlJlcG9zaXRvcnkzNjA0MDg5NA==",
            "name": "gatsby",
            "full_name": "gatsbyjs/gatsby",
            "private": false,
            "owner": {
                "login": "gatsbyjs",
                "id": 12551863,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNTUxODYz",
                "avatar_url": "https://avatars1.githubusercontent.com/u/12551863?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/gatsbyjs",
                "html_url": "https://github.com/gatsbyjs",
                "followers_url": "https://api.github.com/users/gatsbyjs/followers",
                "following_url": "https://api.github.com/users/gatsbyjs/following{/other_user}",
                "gists_url": "https://api.github.com/users/gatsbyjs/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/gatsbyjs/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/gatsbyjs/subscriptions",
                "organizations_url": "https://api.github.com/users/gatsbyjs/orgs",
                "repos_url": "https://api.github.com/users/gatsbyjs/repos",
                "events_url": "https://api.github.com/users/gatsbyjs/events{/privacy}",
                "received_events_url": "https://api.github.com/users/gatsbyjs/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/gatsbyjs/gatsby",
            "description": "Build blazing fast, modern apps and websites with React",
            "fork": false,
            "url": "https://api.github.com/repos/gatsbyjs/gatsby",
            "forks_url": "https://api.github.com/repos/gatsbyjs/gatsby/forks",
            "keys_url": "https://api.github.com/repos/gatsbyjs/gatsby/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/gatsbyjs/gatsby/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/gatsbyjs/gatsby/teams",
            "hooks_url": "https://api.github.com/repos/gatsbyjs/gatsby/hooks",
            "issue_events_url": "https://api.github.com/repos/gatsbyjs/gatsby/issues/events{/number}",
            "events_url": "https://api.github.com/repos/gatsbyjs/gatsby/events",
            "assignees_url": "https://api.github.com/repos/gatsbyjs/gatsby/assignees{/user}",
            "branches_url": "https://api.github.com/repos/gatsbyjs/gatsby/branches{/branch}",
            "tags_url": "https://api.github.com/repos/gatsbyjs/gatsby/tags",
            "blobs_url": "https://api.github.com/repos/gatsbyjs/gatsby/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/gatsbyjs/gatsby/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/gatsbyjs/gatsby/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/gatsbyjs/gatsby/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/gatsbyjs/gatsby/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/gatsbyjs/gatsby/languages",
            "stargazers_url": "https://api.github.com/repos/gatsbyjs/gatsby/stargazers",
            "contributors_url": "https://api.github.com/repos/gatsbyjs/gatsby/contributors",
            "subscribers_url": "https://api.github.com/repos/gatsbyjs/gatsby/subscribers",
            "subscription_url": "https://api.github.com/repos/gatsbyjs/gatsby/subscription",
            "commits_url": "https://api.github.com/repos/gatsbyjs/gatsby/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/gatsbyjs/gatsby/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/gatsbyjs/gatsby/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/gatsbyjs/gatsby/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/gatsbyjs/gatsby/contents/{+path}",
            "compare_url": "https://api.github.com/repos/gatsbyjs/gatsby/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/gatsbyjs/gatsby/merges",
            "archive_url": "https://api.github.com/repos/gatsbyjs/gatsby/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/gatsbyjs/gatsby/downloads",
            "issues_url": "https://api.github.com/repos/gatsbyjs/gatsby/issues{/number}",
            "pulls_url": "https://api.github.com/repos/gatsbyjs/gatsby/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/gatsbyjs/gatsby/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/gatsbyjs/gatsby/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/gatsbyjs/gatsby/labels{/name}",
            "releases_url": "https://api.github.com/repos/gatsbyjs/gatsby/releases{/id}",
            "deployments_url": "https://api.github.com/repos/gatsbyjs/gatsby/deployments",
            "created_at": "2015-05-21T22:43:05Z",
            "updated_at": "2020-04-27T11:20:23Z",
            "pushed_at": "2020-04-27T11:43:41Z",
            "git_url": "git://github.com/gatsbyjs/gatsby.git",
            "ssh_url": "git@github.com:gatsbyjs/gatsby.git",
            "clone_url": "https://github.com/gatsbyjs/gatsby.git",
            "svn_url": "https://github.com/gatsbyjs/gatsby",
            "homepage": "https://www.gatsbyjs.org",
            "size": 748907,
            "stargazers_count": 43839,
            "watchers_count": 43839,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": false,
            "has_pages": false,
            "forks_count": 7875,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 772,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 7875,
            "open_issues": 772,
            "watchers": 43839,
            "default_branch": "master",
            "permissions": {
                "admin": false,
                "push": false,
                "pull": true
            },
            "score": 1
        }
    ]
}

const TEST_UDEMY_SEARCH_DATA = {
    "count": 2736,
    "next": "https://www.udemy.com/api-2.0/courses/?page=2&page_size=10&search=react",
    "previous": null,
    "results": [
        {
            "_class": "course",
            "id": 1362070,
            "title": "React - The Complete Guide (incl Hooks, React Router, Redux)",
            "url": "/course/react-the-complete-guide-incl-redux/",
            "is_paid": true,
            "price": "₹12,160",
            "price_detail": {
                "currency": "INR",
                "currency_symbol": "₹",
                "amount": 12160,
                "price_string": "₹12,160"
            },
            "price_serve_tracking_id": "9Lxl2i0zR42TvYYV1E-ptg",
            "visible_instructors": [
                {
                    "_class": "user",
                    "job_title": "Online Education",
                    "display_name": "Academind by Maximilian Schwarzmüller",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/31926668_94e7_6.jpg",
                    "name": "Academind by Maximilian",
                    "title": "Academind by Maximilian Schwarzmüller",
                    "url": "/user/academind/",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/31926668_94e7_6.jpg",
                    "initials": "AS"
                },
                {
                    "_class": "user",
                    "job_title": "Professional Web Developer and Instructor",
                    "display_name": "Maximilian Schwarzmüller",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/13952972_e853.jpg",
                    "name": "Maximilian",
                    "title": "Maximilian Schwarzmüller",
                    "url": "/user/maximilian-schwarzmuller/",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/13952972_e853.jpg",
                    "initials": "MS"
                }
            ],
            "image_125_H": "https://img-a.udemycdn.com/course/125_H/1362070_b9a1_2.jpg",
            "image_240x135": "https://img-a.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-a.udemycdn.com/course/480x270/1362070_b9a1_2.jpg",
            "published_title": "react-the-complete-guide-incl-redux",
            "predictive_score": 5.929254021960543,
            "relevancy_score": 1421.515,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "headline": "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
            "instructor_name": null
        },
        {
            "_class": "course",
            "id": 705264,
            "title": "Modern React with Redux [2020 Update]",
            "url": "/course/react-redux/",
            "is_paid": true,
            "price": "₹11,520",
            "price_detail": {
                "amount": 11520,
                "currency": "INR",
                "price_string": "₹11,520",
                "currency_symbol": "₹"
            },
            "price_serve_tracking_id": "Sn6IvD5TQuOTRCPw5WJbmA",
            "visible_instructors": [
                {
                    "_class": "user",
                    "title": "Stephen Grider",
                    "name": "Stephen",
                    "display_name": "Stephen Grider",
                    "job_title": "Engineering Architect",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/5487312_0554.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/5487312_0554.jpg",
                    "initials": "SG",
                    "url": "/user/sgslo/"
                }
            ],
            "image_125_H": "https://img-a.udemycdn.com/course/125_H/705264_caa9_11.jpg",
            "image_240x135": "https://img-a.udemycdn.com/course/240x135/705264_caa9_11.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-a.udemycdn.com/course/480x270/705264_caa9_11.jpg",
            "published_title": "react-redux",
            "predictive_score": 5.91006227348309,
            "relevancy_score": 1423.7947,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "headline": "Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App.  Includes Hooks!",
            "instructor_name": null
        },
        {
            "_class": "course",
            "id": 959700,
            "title": "The Complete React Native + Hooks Course [2020 Edition]",
            "url": "/course/the-complete-react-native-and-redux-course/",
            "is_paid": true,
            "price": "₹6,080",
            "price_detail": {
                "amount": 6080,
                "currency": "INR",
                "price_string": "₹6,080",
                "currency_symbol": "₹"
            },
            "price_serve_tracking_id": "l5UGcBj1Tkmp1C3AaWpA5A",
            "visible_instructors": [
                {
                    "_class": "user",
                    "title": "Stephen Grider",
                    "name": "Stephen",
                    "display_name": "Stephen Grider",
                    "job_title": "Engineering Architect",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/5487312_0554.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/5487312_0554.jpg",
                    "initials": "SG",
                    "url": "/user/sgslo/"
                }
            ],
            "image_125_H": "https://img-a.udemycdn.com/course/125_H/959700_8bd2_11.jpg",
            "image_240x135": "https://img-a.udemycdn.com/course/240x135/959700_8bd2_11.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-a.udemycdn.com/course/480x270/959700_8bd2_11.jpg",
            "published_title": "the-complete-react-native-and-redux-course",
            "predictive_score": 5.815757814778031,
            "relevancy_score": 1423.2109,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "headline": "Understand React Native with Hooks, Context, and React Navigation.",
            "instructor_name": null
        },
        {
            "_class": "course",
            "id": 1286908,
            "title": "The Complete React Developer Course (w/ Hooks and Redux)",
            "url": "/course/react-2nd-edition/",
            "is_paid": true,
            "price": "₹6,400",
            "price_detail": {
                "amount": 6400,
                "currency": "INR",
                "price_string": "₹6,400",
                "currency_symbol": "₹"
            },
            "price_serve_tracking_id": "At4q0jS9SIaF6xlEZZFIng",
            "visible_instructors": [
                {
                    "_class": "user",
                    "title": "Andrew Mead",
                    "name": "Andrew",
                    "display_name": "Andrew Mead",
                    "job_title": "A Full-stack Developer & Teacher",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/7231684_bc0d_4.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/7231684_bc0d_4.jpg",
                    "initials": "AM",
                    "url": "/user/andrewmead/"
                }
            ],
            "image_125_H": "https://img-a.udemycdn.com/course/125_H/1286908_1773_5.jpg",
            "image_240x135": "https://img-a.udemycdn.com/course/240x135/1286908_1773_5.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-a.udemycdn.com/course/480x270/1286908_1773_5.jpg",
            "published_title": "react-2nd-edition",
            "predictive_score": 5.740950737426506,
            "relevancy_score": 1419.5931,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "headline": "Learn how to build and launch React web applications using React, Redux, Webpack, React-Router, and more!",
            "instructor_name": null
        },
        {
            "_class": "course",
            "id": 1254420,
            "title": "Node with React: Fullstack Web Development",
            "url": "/course/node-with-react-fullstack-web-development/",
            "is_paid": true,
            "price": "₹11,520",
            "price_detail": {
                "amount": 11520,
                "currency": "INR",
                "price_string": "₹11,520",
                "currency_symbol": "₹"
            },
            "price_serve_tracking_id": "ZS9kQivtSraeVeUiFGg7CQ",
            "visible_instructors": [
                {
                    "_class": "user",
                    "title": "Stephen Grider",
                    "name": "Stephen",
                    "display_name": "Stephen Grider",
                    "job_title": "Engineering Architect",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/5487312_0554.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/5487312_0554.jpg",
                    "initials": "SG",
                    "url": "/user/sgslo/"
                }
            ],
            "image_125_H": "https://img-a.udemycdn.com/course/125_H/1254420_f6cb_4.jpg",
            "image_240x135": "https://img-a.udemycdn.com/course/240x135/1254420_f6cb_4.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-a.udemycdn.com/course/480x270/1254420_f6cb_4.jpg",
            "published_title": "node-with-react-fullstack-web-development",
            "predictive_score": 5.69943028291591,
            "relevancy_score": 1398.037,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "headline": "Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.",
            "instructor_name": null
        },
        {
            "_class": "course",
            "id": 1436092,
            "title": "React Native - The Practical Guide 2020",
            "url": "/course/react-native-the-practical-guide/",
            "is_paid": true,
            "price": "₹10,880",
            "price_detail": {
                "amount": 10880,
                "currency": "INR",
                "price_string": "₹10,880",
                "currency_symbol": "₹"
            },
            "price_serve_tracking_id": "HRH-3DH6SpixHyLNqezmDg",
            "visible_instructors": [
                {
                    "_class": "user",
                    "title": "Academind by Maximilian Schwarzmüller",
                    "name": "Academind by Maximilian",
                    "display_name": "Academind by Maximilian Schwarzmüller",
                    "job_title": "Online Education",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/31926668_94e7_6.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/31926668_94e7_6.jpg",
                    "initials": "AS",
                    "url": "/user/academind/"
                },
                {
                    "_class": "user",
                    "title": "Maximilian Schwarzmüller",
                    "name": "Maximilian",
                    "display_name": "Maximilian Schwarzmüller",
                    "job_title": "Professional Web Developer and Instructor",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/13952972_e853.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/13952972_e853.jpg",
                    "initials": "MS",
                    "url": "/user/maximilian-schwarzmuller/"
                }
            ],
            "image_125_H": "https://img-a.udemycdn.com/course/125_H/1436092_2024_4.jpg",
            "image_240x135": "https://img-a.udemycdn.com/course/240x135/1436092_2024_4.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-a.udemycdn.com/course/480x270/1436092_2024_4.jpg",
            "published_title": "react-native-the-practical-guide",
            "predictive_score": 5.6916080386319745,
            "relevancy_score": 1404.16,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "headline": "Use React Native and your React knowledge and take your web development skills to build native iOS and Android Apps",
            "instructor_name": null
        },
        {
            "_class": "course",
            "id": 781532,
            "title": "Advanced React and Redux",
            "url": "/course/react-redux-tutorial/",
            "is_paid": true,
            "price": "₹8,960",
            "price_detail": {
                "amount": 8960,
                "currency": "INR",
                "price_string": "₹8,960",
                "currency_symbol": "₹"
            },
            "price_serve_tracking_id": "r7UuZpxwS7-9A54f4IijCQ",
            "visible_instructors": [
                {
                    "_class": "user",
                    "title": "Stephen Grider",
                    "name": "Stephen",
                    "display_name": "Stephen Grider",
                    "job_title": "Engineering Architect",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/5487312_0554.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/5487312_0554.jpg",
                    "initials": "SG",
                    "url": "/user/sgslo/"
                }
            ],
            "image_125_H": "https://img-a.udemycdn.com/course/125_H/781532_8b4d_6.jpg",
            "image_240x135": "https://img-a.udemycdn.com/course/240x135/781532_8b4d_6.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-a.udemycdn.com/course/480x270/781532_8b4d_6.jpg",
            "published_title": "react-redux-tutorial",
            "predictive_score": 5.663306269481737,
            "relevancy_score": 1400.1002,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "headline": "Detailed walkthroughs on advanced React and Redux concepts - Authentication, Testing, Middlewares, HOC's, and Deployment",
            "instructor_name": null
        },
        {
            "_class": "course",
            "id": 2365628,
            "title": "Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)",
            "url": "/course/complete-react-developer-zero-to-mastery/",
            "is_paid": true,
            "price": "₹12,800",
            "price_detail": {
                "amount": 12800,
                "currency": "INR",
                "price_string": "₹12,800",
                "currency_symbol": "₹"
            },
            "price_serve_tracking_id": "uFoONrCVTYqUfmWQzDjsAQ",
            "visible_instructors": [
                {
                    "_class": "user",
                    "title": "Andrei Neagoie",
                    "name": "Andrei",
                    "display_name": "Andrei Neagoie",
                    "job_title": "Senior Software Developer turned Instructor",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/38516954_b11c_3.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/38516954_b11c_3.jpg",
                    "initials": "AN",
                    "url": "/user/andrei-neagoie/"
                },
                {
                    "_class": "user",
                    "title": "Yihua Zhang",
                    "name": "Yihua",
                    "display_name": "Yihua Zhang",
                    "job_title": "Senior Software Developer",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/66986824_43c4.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/66986824_43c4.jpg",
                    "initials": "YZ",
                    "url": "/user/yihua-zhang-5/"
                }
            ],
            "image_125_H": "https://img-a.udemycdn.com/course/125_H/2365628_0b60_7.jpg",
            "image_240x135": "https://img-a.udemycdn.com/course/240x135/2365628_0b60_7.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-a.udemycdn.com/course/480x270/2365628_0b60_7.jpg",
            "published_title": "complete-react-developer-zero-to-mastery",
            "predictive_score": 5.600646058587747,
            "relevancy_score": 1386.7921,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "headline": "Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase",
            "instructor_name": null
        },
        {
            "_class": "course",
            "id": 1646980,
            "title": "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
            "url": "/course/mern-stack-front-to-back/",
            "is_paid": true,
            "price": "₹9,600",
            "price_detail": {
                "amount": 9600,
                "currency": "INR",
                "price_string": "₹9,600",
                "currency_symbol": "₹"
            },
            "price_serve_tracking_id": "HiIGP7KVTQifoPMH5OwQ8w",
            "visible_instructors": [
                {
                    "_class": "user",
                    "title": "Brad Traversy",
                    "name": "Brad",
                    "display_name": "Brad Traversy",
                    "job_title": "Full Stack Web Developer & Instructor at Traversy Media",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/21681922_4513_5.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/21681922_4513_5.jpg",
                    "initials": "BT",
                    "url": "/user/brad-traversy/"
                }
            ],
            "image_125_H": "https://img-a.udemycdn.com/course/125_H/1646980_23f7_2.jpg",
            "image_240x135": "https://img-a.udemycdn.com/course/240x135/1646980_23f7_2.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-a.udemycdn.com/course/480x270/1646980_23f7_2.jpg",
            "published_title": "mern-stack-front-to-back",
            "predictive_score": 5.597727541145277,
            "relevancy_score": 1387.9415,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "headline": "Build and deploy a social network with Node.js, Express, React, Redux & MongoDB. Fully updated April 2019",
            "instructor_name": null
        },
        {
            "_class": "course",
            "id": 1109926,
            "title": "GraphQL with React: The Complete Developers Guide",
            "url": "/course/graphql-with-react-course/",
            "is_paid": true,
            "price": "₹9,600",
            "price_detail": {
                "amount": 9600,
                "currency": "INR",
                "price_string": "₹9,600",
                "currency_symbol": "₹"
            },
            "price_serve_tracking_id": "058gMnoNQ26B-E4l9QZlPg",
            "visible_instructors": [
                {
                    "_class": "user",
                    "title": "Stephen Grider",
                    "name": "Stephen",
                    "display_name": "Stephen Grider",
                    "job_title": "Engineering Architect",
                    "image_50x50": "https://img-a.udemycdn.com/user/50x50/5487312_0554.jpg",
                    "image_100x100": "https://img-a.udemycdn.com/user/100x100/5487312_0554.jpg",
                    "initials": "SG",
                    "url": "/user/sgslo/"
                }
            ],
            "image_125_H": "https://img-a.udemycdn.com/course/125_H/1109926_7f97_2.jpg",
            "image_240x135": "https://img-a.udemycdn.com/course/240x135/1109926_7f97_2.jpg",
            "is_practice_test_course": false,
            "image_480x270": "https://img-a.udemycdn.com/course/480x270/1109926_7f97_2.jpg",
            "published_title": "graphql-with-react-course",
            "predictive_score": 5.514926969648045,
            "relevancy_score": 1398.7905,
            "input_features": null,
            "lecture_search_result": null,
            "curriculum_lectures": [],
            "order_in_results": null,
            "curriculum_items": [],
            "headline": "Learn and master GraphQL by building real web apps with React and Node",
            "instructor_name": null
        }
    ],
    "aggregations": [
        {
            "id": "price",
            "options": [
                {
                    "key": "price",
                    "value": "price-paid",
                    "count": 2537,
                    "title": "Paid"
                },
                {
                    "key": "price",
                    "value": "price-free",
                    "count": 199,
                    "title": "Free"
                }
            ],
            "title": "Price"
        },
        {
            "id": "instructional_level",
            "options": [
                {
                    "key": "instructional_level",
                    "value": "all",
                    "count": 1214,
                    "title": "All Levels"
                },
                {
                    "key": "instructional_level",
                    "value": "beginner",
                    "count": 913,
                    "title": "Beginner"
                },
                {
                    "key": "instructional_level",
                    "value": "intermediate",
                    "count": 552,
                    "title": "Intermediate"
                },
                {
                    "key": "instructional_level",
                    "value": "expert",
                    "count": 56,
                    "title": "Expert"
                }
            ],
            "title": "Level"
        },
        {
            "id": "features",
            "options": [
                {
                    "key": "has_closed_caption",
                    "value": "true",
                    "count": 1916,
                    "title": "Captions"
                },
                {
                    "key": "has_simple_quiz",
                    "value": "true",
                    "count": 457,
                    "title": "Quizzes"
                },
                {
                    "key": "has_coding_exercises",
                    "value": "true",
                    "count": 49,
                    "title": "Coding Exercises"
                }
            ],
            "title": "Features"
        },
        {
            "id": "language",
            "options": [
                {
                    "key": "language",
                    "value": "en",
                    "count": 1785,
                    "title": "English"
                },
                {
                    "key": "language",
                    "value": "pt",
                    "count": 207,
                    "title": "Português"
                },
                {
                    "key": "language",
                    "value": "es",
                    "count": 169,
                    "title": "Español"
                },
                {
                    "key": "language",
                    "value": "fr",
                    "count": 106,
                    "title": "Français"
                },
                {
                    "key": "language",
                    "value": "tr",
                    "count": 86,
                    "title": "Türkçe"
                },
                {
                    "key": "language",
                    "value": "zh",
                    "count": 85,
                    "title": "中文"
                },
                {
                    "key": "language",
                    "value": "ja",
                    "count": 58,
                    "title": "日本語"
                },
                {
                    "key": "language",
                    "value": "ru",
                    "count": 45,
                    "title": "Русский"
                },
                {
                    "key": "language",
                    "value": "th",
                    "count": 42,
                    "title": "ภาษาไทย"
                },
                {
                    "key": "language",
                    "value": "pl",
                    "count": 41,
                    "title": "Polski"
                },
                {
                    "key": "language",
                    "value": "de",
                    "count": 33,
                    "title": "Deutsch"
                },
                {
                    "key": "language",
                    "value": "it",
                    "count": 26,
                    "title": "Italiano"
                },
                {
                    "key": "language",
                    "value": "hi",
                    "count": 13,
                    "title": "हिन्दी"
                },
                {
                    "key": "language",
                    "value": "ar",
                    "count": 11,
                    "title": "العربية"
                },
                {
                    "key": "language",
                    "value": "ko",
                    "count": 11,
                    "title": "한국어"
                },
                {
                    "key": "language",
                    "value": "vi",
                    "count": 6,
                    "title": "Tiếng Việt"
                },
                {
                    "key": "language",
                    "value": "id",
                    "count": 5,
                    "title": "Bahasa Indonesia"
                },
                {
                    "key": "language",
                    "value": "ur",
                    "count": 4,
                    "title": "اردو"
                },
                {
                    "key": "language",
                    "value": "bn",
                    "count": 1,
                    "title": "Bangla"
                },
                {
                    "key": "language",
                    "value": "nl",
                    "count": 1,
                    "title": "Nederlands"
                },
                {
                    "key": "language",
                    "value": "ro",
                    "count": 1,
                    "title": "Română"
                }
            ],
            "title": "Language"
        },
        {
            "id": "ratings",
            "options": [
                {
                    "key": "ratings",
                    "value": "4.5",
                    "count": 768,
                    "title": "4.5 & up"
                },
                {
                    "key": "ratings",
                    "value": "4.0",
                    "count": 1770,
                    "title": "4.0 & up"
                },
                {
                    "key": "ratings",
                    "value": "3.5",
                    "count": 2202,
                    "title": "3.5 & up"
                },
                {
                    "key": "ratings",
                    "value": "3.0",
                    "count": 2364,
                    "title": "3.0 & up"
                }
            ],
            "title": "Ratings"
        },
        {
            "id": "duration",
            "options": [
                {
                    "key": "duration",
                    "value": "short",
                    "count": 861,
                    "title": "0-2 Hours"
                },
                {
                    "key": "duration",
                    "value": "medium",
                    "count": 838,
                    "title": "3-6 Hours"
                },
                {
                    "key": "duration",
                    "value": "long",
                    "count": 713,
                    "title": "7-16 Hours"
                },
                {
                    "key": "duration",
                    "value": "extraLong",
                    "count": 324,
                    "title": "17+ Hours"
                }
            ],
            "title": "Duration"
        }
    ]
}

const TEST_UDEMY_COURSE_DATA = {
    "_class": "course",
    "id": 1362070,
    "num_subscribers": 244882,
    "avg_rating_recent": 4.63441,
    "estimated_content_length": 2438
}


module.exports = {
    YOUTUBE_API_URL,
    YOUTUBE_MAX_RESULTS,
    GITHUB_API_URL,
    GITHUB_MAX_RESULTS,
    UDEMY_API_URL,
    UDEMY_MAX_RESULTS,
    TEST_YOUTUBE_SEARCH_DATA,
    TEST_YOUTUBE_VIDEO_DATA,
    TEST_YOUTUBE_CHANNEL_DATA,
    TEST_GITHUB_SEARCH_DATA,
    TEST_UDEMY_SEARCH_DATA,
    TEST_UDEMY_COURSE_DATA
}