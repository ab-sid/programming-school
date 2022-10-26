import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCourseDetails = () => {
    const singleCourseDetails = useLoaderData();
    const { author, title, details, image_url } = singleCourseDetails;
    return (
        <div>
            <Card className='mt-5'>
                <Card.Header>
                    <div className='d-flex justify-content-between'>
                        <div><h5>Auther Name: {author.name}</h5></div>
                        <div><button>Download PDF</button></div>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="primary">Get premium access</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourseDetails;