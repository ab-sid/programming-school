import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummery = ({ news }) => {
    console.log(news);
    const { image_url, title, details, _id } = news;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 200 ?
                                <p>{details.slice(0, 200) + '...'}<Link to={`/single_course_details/${_id}`}>ReadMore</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                    <Link to={`/single_course_details/${_id}`}>
                        <Button variant="primary">Get premium access</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSummery;