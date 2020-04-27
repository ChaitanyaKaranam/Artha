import React from 'react';

export default ({ videoDetails }) => {
    return (
        <div className="videoStatistics">
            <div>
                <img alt="likes" src="/images/like.png" />
                <span>
                    {new Intl.NumberFormat('en-IN').format(videoDetails.likeCount)}
                </span>
            </div>
            <div>
                <img alt="views" src="/images/eye.png" />
                <span>
                    {new Intl.NumberFormat('en-IN').format(videoDetails.viewCount)}
                </span>
            </div>
        </div>
    )
}