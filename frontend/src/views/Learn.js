import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useInput from '../hooks/Input';
import { searchYoutube, videoData, channelData, searchGithub } from '../api';
import FeaturedVideo from '../components/youtube/Featured';
import YoutubeCard from '../components/youtube/YoutubeCard';
import RepoCard from '../components/github/RepoCard';

const Learn = () => {
    const { id } = useParams();
    return (
        <div className="cover">
            <Nav />
            <Hero id={id} />
            <div className="contentSection lightBlue">
                <Youtube id={id} />
            </div>
            <div className="contentSection lightBlue">
                <Github id={id}/>
            </div>
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
                <h2 className="vertical-align-self">Artha</h2>
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

const Youtube = ({ id }) => {

    const [youtubeData, setYoutubeData] = useState({});
    const [featuredVideo, setFeaturedVideo] = useState('');
    const [videoDetails, setVideoDetails] = useState({});
    const [channelDetails, setChannelDetails] = useState({});

    // Get Youtube search data
    useEffect(() => {
        let fetchData = async () => {
            let response = await searchYoutube(id);

            if (response.data && response.data.items && Array.isArray(response.data.items)) {
                let data = response.data.items;
                let index = 0;
                for (const item of data) {
                    await addVideoDetails(item, data, index);
                    await addChannelDetails(item, data, index);
                    index++;
                }
                setYoutubeData(data);

                if (data && Array.isArray(data) && data.length > 0) {

                    let item = data[0];

                    if (!featuredVideo || featuredVideo !== item['id']['videoId']) {
                        setFeaturedVideo(item['id']['videoId']);
                        if (item['video_details'] && item['video_details']['items'] && Array.isArray(item['video_details']['items']) && item['video_details']['items'].length > 0) {
                            setVideoDetails(formatVideoDetails(item['video_details']));
                        }

                        if (item['channel_details'] && item['channel_details']['items'] && Array.isArray(item['channel_details']['items']) && item['channel_details']['items'].length > 0) {
                            setChannelDetails(formatChannelDetails(item['channel_details']))
                        }
                    }
                }

            }
        }

        fetchData();

    }, [id, featuredVideo]);

    async function addVideoDetails(item, data, index) {
        let video_response = await videoData(item.id.videoId);
        data[index]['video_details'] = video_response.data;
        return;
    }

    async function addChannelDetails(item, data, index) {
        let channel_response = await channelData(item.snippet.channelId);
        data[index]['channel_details'] = channel_response.data;
        return;
    }

    function formatVideoDetails(item) {
        let vd = {};
        let { snippet, statistics, id } = item['items'][0]
        vd['id'] = id;
        vd['title'] = snippet.title;
        vd['channelTitle'] = snippet['channelTitle'];
        vd['description'] = snippet['description'];
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
        if (youtubeData && Array.isArray(youtubeData) && youtubeData.length > 0) {
            return youtubeData.map(({ video_details, channel_details }) => {
                let videoDetails = formatVideoDetails(video_details);
                let channelDetails = formatChannelDetails(channel_details);
                return <YoutubeCard key={videoDetails['id']} videoDetails={videoDetails} onClick={() => {
                    setFeaturedVideo(videoDetails['id']);
                    setVideoDetails(videoDetails);
                    setChannelDetails(channelDetails);
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
                <FeaturedVideo videoId={featuredVideo} videoDetails={videoDetails} channelDetails={channelDetails} />
            </div>
            <div className="videosSection sectionDivider">
                {renderVideos()}
            </div>
        </div>
    )
}

const Github = ({ id }) => {

    const [ githubData, setGithubData ] = useState({});

    useEffect(() => {

        const fetchData = async() => {
            let response = await searchGithub(id);
            console.log(response);

            if(response.data && response.data.items && Array.isArray(response.data.items) && response.data.items.length>0){
                setGithubData(response.data.items)
            }
        }

        fetchData();

    }, [id]);

    function renderRepoCards(){
        if(githubData && Array.isArray(githubData)){
            return githubData.map((
                { id, owner: { avatar_url: thumbnail }, name, description, forks_count: forks, stargazers_count: stars, open_issues: issues, html_url }
            ) => {
                return <RepoCard  key={id} thumbnail={thumbnail} name={name} description={description} forks={forks} stars={stars} issues={issues} onClick={() => {
                    window.open(html_url)
                }}/>
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


export default Learn;