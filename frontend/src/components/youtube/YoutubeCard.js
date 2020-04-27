import React from 'react';
import Statistics from './Statistics';

export default ({ videoDetails, onClick }) => {

    let { id, title, channelTitle } = videoDetails;

    return (
        <div className="youtubeCard" onClick={() => onClick()}>
            <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="youtube" width={300}/>
            <div className="videoDetails">
                <h4>{title}</h4>
                <span className="grey-text">{channelTitle}</span>
                <Statistics videoDetails={videoDetails}/>
            </div>
        </div>
    )
}