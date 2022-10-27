import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCategory = ({ course }) => {

    const { course_name, image } = course;
    return (
        <div>
            <Card className='mt-3 mb-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title><Link to={`/course/${course.id}`}>{course_name}</Link></Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCategory;