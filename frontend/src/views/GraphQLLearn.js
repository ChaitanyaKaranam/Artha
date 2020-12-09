import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { ARTHA_QUERY } from '../queries'
import useInput from '../hooks/Input';
import FeaturedVideo from '../components/youtube/Featured';
import YoutubeCard from '../components/youtube/YoutubeCard';
import RepoCard from '../components/github/RepoCard';
import CourseCard from '../components/udemy/CourseCard';

const Learn = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(ARTHA_QUERY, {
        variables: { search: id },
        fetchPolicy: "no-cache"
    });


    function renderError() {
        if (error) return `Error! ${error}`;
    }

    function renderContent() {
        if (loading) {
            return (
                <div className="contentSection lightBlue">
                    <h3>Loading...</h3>
                </div>
            )
        }
    
        return (
            <>
                <div className="contentSection lightBlue">
                    <Youtube id={id} youtube={data.youtube} />
                </div>
                <div className="contentSection lightBlue">
                    <Github id={id} github={data.github} />
                </div>
                <div className="contentSection lightBlue">
                    <Udemy id={id} udemy={data.udemy} />
                </div>
                { renderError() }
            </>
        )
    }

    return (
        <div className="cover">
            <Nav />
            <Hero id={id} />
            {renderContent()}
        </div>
    )
}

const Nav = () => {
    const history = useHistory();
    const search = useInput('');
    function onSubmit(e) {
        e.preventDefault();
        history.push(`/${search.value}`);
    }
    return (
        <nav className="nav">
            <ul>
                <h2 className="vertical-align-self"><Link to="/">Artha</Link></h2>
                <form onSubmit={onSubmit} className="vertical-align-self right">
                    <input className="input search search-icon" placeholder="What do you want to learn today?" {...search} />
                </form>
            </ul>
        </nav>
    )
}

const Hero = ({ id }) => {
    return (
        <div className="heroSection vertical-align">
            <div>
                <h1 className="heroHeading">{id}</h1>
                <p className="heroSubHeading">Start learning {id} from the best curated content</p>
            </div>
            <div className="vendorSection horizontal-align vertical-align">
                <img alt="youtube" src="/images/youtube.png" width="140" />
                <img alt="github" src="/images/github.png" width="100" />
                <img alt="udemy" src="/images/udemy.png" width="100" />
            </div>
        </div>
    )
}

const Youtube = ({ id, youtube }) => {

    const [featuredVideo, setFeaturedVideo] = useState(null);
    const [videoDetails, setVideoDetails] = useState(null);
    const [channelDetails, setChannelDetails] = useState(null);

    useEffect(() => {
        if (youtube['items'] && Array.isArray(youtube['items']) && youtube['items'].length > 0) {
            setFeaturedVideo(youtube['items'][0]['id']['videoId'])
            setVideoDetails(formatVideoDetails(youtube['items'][0]['videoDetails'], id));
            setChannelDetails(formatChannelDetails(youtube['items'][0]['channelDetails']))
        }
    }, [id, youtube])

    function formatVideoDetails(item, id) {
        let vd = {};
        let { snippet, statistics } = item['items'][0]
        vd['id'] = id;
        vd['title'] = snippet.title;
        vd['description'] = snippet.description;
        vd['likeCount'] = statistics['likeCount'];
        vd['viewCount'] = statistics['viewCount'];
        return vd;
    }

    function formatChannelDetails(item) {
        let cd = {};
        let { snippet, statistics } = item['items'][0]
        cd['title'] = snippet.title;
        cd['thumbnail'] = snippet['thumbnails']['medium']['url'];
        cd['subscriberCount'] = statistics['subscriberCount'];
        cd['videoCount'] = statistics['videoCount'];
        return cd;
    }

    function renderVideos() {
        if (youtube && Array.isArray(youtube['items'])) {
            if (youtube['items'].length === 0) {
                return <h3>Cannot find any YouTube Videos on this Topic</h3>
            }
            return youtube['items'].map(({ videoDetails, channelDetails, id: { videoId } }) => {
                let vd = formatVideoDetails(videoDetails, videoId);
                let cd = formatChannelDetails(channelDetails);
                return <YoutubeCard key={videoId} videoDetails={vd} onClick={() => {
                    setFeaturedVideo(videoId);
                    setVideoDetails(vd);
                    setChannelDetails(cd);
                }} />
            })
        } else {
            return <div>Loading...</div>
        }
    }

    return (
        <div>
            <h2 className="sectionHeading">Tutorials</h2>
            <p className="sectionSubHeading">Check out some free tutorials on {id} from YouTube</p>
            <div>
                {youtube && Array.isArray(youtube['items']) && youtube['items'].length > 0 ?
                    <FeaturedVideo videoId={featuredVideo} videoDetails={videoDetails} channelDetails={channelDetails} />
                    :
                    <></>
                }
            </div>
            <div className="videosSection sectionDivider">
                {renderVideos()}
            </div>
        </div>
    )
}

const Github = ({ id, github }) => {

    function renderRepoCards() {
        if (github && Array.isArray(github.items)) {
            if (github.items.length === 0) {
                return <h3>Cannot find any GitHub repos on this Topic</h3>
            }
            return github.items.map((
                { id, owner: { avatar_url: thumbnail }, name, description, forks, stargazers_count: stars, open_issues: issues, html_url }
            ) => {
                return <RepoCard key={id} thumbnail={thumbnail} name={name} description={description} forks={forks} stars={stars} issues={issues} onClick={() => {
                    window.open(html_url)
                }} />
            })
        }
    }

    return (
        <div>
            <h2 className="sectionHeading">Open Source Projects</h2>
            <p className="sectionSubHeading">Explore open source projects on {id}</p>
            <div className="repoSection">
                {renderRepoCards()}
            </div>
        </div>
    )
}

const Udemy = ({ id, udemy }) => {

    function renderCourses() {
        if (udemy.results && Array.isArray(udemy.results) && udemy.results.length > 0) {
            return udemy.results.map(({
                id,
                image_480x270: thumbnail,
                title,
                price,
                rating: {
                    num_subscribers,
                    avg_rating_recent
                },
                url
            }) => {
                return <CourseCard key={id} thumbnail={thumbnail} title={title} price={price} num_subscribers={num_subscribers} avg_rating_recent={avg_rating_recent} onClick={() => { window.open(`https://udemy.com${url}`) }} />
            })
        }
    }

    return (
        <div>
            <h2 className="sectionHeading">Courses</h2>
            <p className="sectionSubHeading">Check out some courses on {id} from Udemy</p>
            <div className="courseSection">
                {renderCourses()}
            </div>
        </div>
    )
}


export default Learn;