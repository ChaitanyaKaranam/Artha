import React from 'react';
import Statistics from './Statistics';

export default ({ videoId, videoDetails, channelDetails }) => {
    return (
        <div className="featuredVideoSection">
            {
                !videoId ?
                <div>Loading...</div>
                :
                <>
                    <iframe title="Youtube Video" width="100%" height="600px" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                    <div className="featuredVideoData">
                        <div className="featuredHeader">
                            <h2>{videoDetails.title}</h2>
                            <br /><br />
                            <Statistics videoDetails={videoDetails}/>
                        </div>
                        <p>{videoDetails.description}</p>
                        <div className="channelStatistics">
                            <div>
                                <img src={channelDetails.thumbnail} alt="channel" width="100"/>
                            </div>
                            <div className="channelInfo">
                                <h4>{channelDetails.title}</h4>
                                <span>{new Intl.NumberFormat('en-IN').format(channelDetails.subscriberCount)}&nbsp;&nbsp;<span className="grey-text">Subscribers</span></span>
                                <span>{new Intl.NumberFormat('en-IN').format(channelDetails.videoCount)}&nbsp;&nbsp;<span className="grey-text">Videos</span></span>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}