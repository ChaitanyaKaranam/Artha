import React from 'react';
import useInput from '../hooks/Input';
import { useHistory } from "react-router-dom";

const Home = () => {
    const search = useInput('');
    const history = useHistory();

    function onSubmit(e){
        e.preventDefault();
        history.push(`/${search.value}`);
    }


    return(
        <div className="home cover">
            <h2>Artha</h2>
            <form onSubmit={onSubmit} className="grid cover">
                <div className="vertical-align-self">
                    <div className="grid section-divider horizontal-align">
                        <h1 className="heroHeading">What do you want to learn today?</h1>
                        <input className="input search search-icon search-lg" {...search} placeholder="Technologies, Programming Languages, System Design, Coding Challenges, Design Challenges"/>
                        <img alt="learn now" src="/images/learning.svg" width="200"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Home;