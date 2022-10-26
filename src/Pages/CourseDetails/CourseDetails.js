import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h1>hiiiiiiiiiiii</h1>
        </div>
    );
};

export default CourseDetails;