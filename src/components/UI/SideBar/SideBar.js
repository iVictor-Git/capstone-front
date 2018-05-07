import React from 'react';
import classes from './SideBar.css';
import ArticleList from './ArticleList/ArticleList';

const SideBar = () => {
    return (
        <div className={classes.SideBar}>
            <ArticleList />
        </div>

    )
}


export default SideBar;