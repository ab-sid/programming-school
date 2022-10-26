import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummer from '../NewsSummer/NewsSummer';
import './CourseDetails.css';


const CourseDetails = () => {
    const allNews = useLoaderData();
    // console.log(news);


    return (
        <div className='card-details'>
            {allNews.map(news => <NewsSummer key={news._id} news={news}></NewsSummer>)}
        </div>
    );
};

export default CourseDetails;