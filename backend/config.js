const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_MAX_RESULTS = 10;
const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_MAX_RESULTS = 10;
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

module.exports = {
    YOUTUBE_API_URL,
    YOUTUBE_MAX_RESULTS,
    GITHUB_API_URL,
    GITHUB_MAX_RESULTS,
    UDEMY_API_URL,
    UDEMY_MAX_RESULTS,
    TEST_YOUTUBE_SEARCH_DATA,
    TEST_YOUTUBE_VIDEO_DATA,
    TEST_YOUTUBE_CHANNEL_DATA
}