import React from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container>
            <Row>
                <Col className='d-none d-lg-block' lg='3'>

                    <div className='courses-name mt-3'>
                        {
                            courses.map(course => <p key={course.id}>
                                <Button variant="outline-success">
                                    <Link to={`/course/${course.id}`}>{course.course_name}</Link>
                                </Button>{' '}

                            </p>)
                        }
                    </div>
                </Col>
                <Col lg='9' className='course-cat'>
                    {courses.map(course => <CourseCategory key={course.id} course={course}></CourseCategory>)}
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;