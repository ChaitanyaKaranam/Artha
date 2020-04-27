import React from 'react';

export default ({
    thumbnail,
    title,
    price,
    avg_rating_recent: rating,
    num_subscribers: subscribers,
    onClick
}) => {
    return (
        <div className="courseCard" onClick={() => { onClick() }}>
            <img alt="course" src={thumbnail} />
            <div className="courseDetails">
                <span className="title">{title}</span>
                <div className="details">
                    <div className="ratings">
                        <img alt="udemy rating" src="/images/star.svg" width="30"/>
                        <span className="grey-text">{rating.toFixed(1)}</span>
                        <span className="grey-text">{`(${new Intl.NumberFormat('en-IN').format(subscribers)})`}</span>
                    </div>
                    <h2>{price}</h2>
                </div>
            </div>
        </div>
    )
}
