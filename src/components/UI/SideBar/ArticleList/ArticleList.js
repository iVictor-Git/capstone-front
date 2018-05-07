import React from 'react';
import './ArticleList.css';
import Article from '../Article/Article';

const ArticleList = () => {

    const articles = [1, 2, 3, 4, 5, 6, 7].map((article, index) => {
        return (
            <Article key={index} text={'test'} />)
    });

    return (
        <div className=''>
            <div className=''>
                {articles}
            </div>
        </div>
    );
}

export default ArticleList;