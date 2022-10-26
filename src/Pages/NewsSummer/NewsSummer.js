import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './NewsSummer.css';

const NewsSummer = ({ news }) => {
    console.log(news);
    const { image_url, title, details } = news;
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'}<Link>ReadMore</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                    <Button variant="primary">Get premium access</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsSummer;