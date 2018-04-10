import React from 'react';
import './SideBar.css';
import ArticleList from '../ArticleList/ArticleList';

const SideBar = () => {
    return (
        <div className='side-bar-container col-3'>
            <div className='side-bar-log-reg'>
                <button className='col-5 btn'>Register</button>
                <button className='col-5 btn'>Login</button>
            </div>
            <ArticleList />

        </div>
    )
}


export default SideBar;