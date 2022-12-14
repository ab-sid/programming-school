import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCourseDetails = () => {
    const singleCourseDetails = useLoaderData();
    const { author, title, details, image_url, _id } = singleCourseDetails;
    return (
        <div>
            <Card className='mt-5'>
                <Card.Header>
                    <div className='d-flex justify-content-between'>
                        <div><h5>Auther Name: {author.name ? author.name : 'Aurthor Name Not Found'}</h5></div>
                        <div><Button variant="outline-secondary">Download PDF</Button>{' '}</div>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/check_out/${_id}`}>
                        <Button variant="outline-primary">Get premium access</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourseDetails;