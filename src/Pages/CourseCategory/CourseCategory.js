import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseCategory.css';

const CourseCategory = ({ course }) => {

    const { course_name, image } = course;
    return (
        <div>
            <Card className='mt-3 mb-3 me-2' style={{ width: '18rem' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title><Link to={`/course/${course.id}`}>{course_name}</Link></Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCategory;