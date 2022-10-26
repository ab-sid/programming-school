import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    All Courses:{courses.length}
                    <div>
                        {
                            courses.map(course => <p key={course.id}>
                                <Link to={`/course/${course.id}`}>{course.course_name}</Link>
                            </p>)
                        }
                    </div>
                </Col>
                <Col lg='9'>main content</Col>
            </Row>
        </Container>
    );
};

export default Courses;