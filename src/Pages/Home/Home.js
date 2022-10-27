import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import logo from '../../assets/logo/logo.png';



const Home = () => {
    return (
        <div className='home-container2 mt-5'>
            <Container>
                <Row>
                    <Col lg='8'>
                        <div className='logo-content d-flex'>
                            <img className='rounded' src={logo} alt="" srcset="" />
                            <h1 className='ms-3'>Programming School</h1>
                        </div>
                        <div className='mt-5'>
                            <h2>Education</h2>
                            <h2 className='text-warning'>Programming Languages</h2>
                            <h2 className='text-success'>with online class</h2>
                        </div>

                    </Col>
                    <Col lg='4'>
                        <div className='box-1 bg-success rounded p-3 mb-3'>
                            <h4 className='text-white'>Power Elite<br />Author</h4>
                        </div>
                        <div className='box-2 bg-warning rounded p-3 mb-3'>
                            <h4 className='text-white'>20+ <br />Unique Demos</h4>
                        </div>
                        <div className='box-3 bg-primary rounded p-3'>
                            <h4 className='text-white'>100+ <br />Features</h4>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Home;