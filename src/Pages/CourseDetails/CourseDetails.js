import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../CourseSummery/CourseSummery';
import './CourseDetails.css';


const CourseDetails = () => {
    const allNews = useLoaderData();
    // console.log(news);


    return (
        <div className='card-details'>
            {allNews.map(news => <CourseSummery key={news._id} news={news}></CourseSummery>)}
        </div>
    );
};

export default CourseDetails;
