import React from 'react';

export default (props) => {
    let {
        thumbnail,
        name,
        description,
        forks,
        stars,
        issues,
        onClick
    } = props;

    return (
        <div className="repoCard" onClick={() => onClick()}>
            <div className="header">
                <img alt="repo image" src={thumbnail} width={30}/>
                <h4>{name}</h4>
            </div>
            <p>{description}</p>
            <div className="statistics">
                <div>
                    <img alt="forks" src="/images/repo-forked.png" />
                    <span>{forks}</span>
                </div>
                <div>
                    <img alt="stars" src="/images/star-github.png" />
                    <span>{stars}</span>
                </div>
                <div>
                    <img alt="issues" src="/images/issue-opened.png" />
                    <span>{issues}</span>
                </div>
            </div>
        </div>
    )
}