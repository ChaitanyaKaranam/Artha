import React from 'react';
import {  useParams, useHistory } from 'react-router-dom';
import useInput from '../hooks/Input';

const Learn = () => {
    const { id } = useParams();
    return(
        <div className="cover">
            <Nav/>
            <Hero id={id}/>
            <div className="contentSection lightBlue cover">
                <h3>Youtube</h3>
            </div>
        </div>
    )
}

const Nav = () => {
    const history = useHistory();
    const search = useInput('');
    function onSubmit(e){
        e.preventDefault();
        history.push(`/${search.value}`);
    }
    return(
        <nav className="nav">
            <ul>
                <h2 className="vertical-align-self">Artha</h2>
                <form onSubmit={onSubmit} className="vertical-align-self right">
                    <input className="input search search-icon" placeholder="What do you want to learn today?" {...search}/>
                </form>
            </ul>
        </nav>
    )
}

const Hero = ({ id }) => {
    return(
        <div className="heroSection vertical-align">
            <div>
                <h1 className="heroHeading">{id}</h1>
                <p className="heroSubHeading">Start learning {id} from the best curated content</p>
            </div>
            <div className="vendorSection horizontal-align vertical-align">
                <img alt="youtube" src="/images/youtube.png" width="140"/>
                <img alt="github" src="/images/github.png" width="100"/>
                <img alt="udemy" src="/images/udemy.png" width="100"/>
            </div>
        </div>
    )
}

export default Learn;