import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <footer className='footer bg-dark text-white text-center mt-5'>
            <div className='footer-social py-4'>
                <Link to='/facebook'><FaFacebook size={28} style={{ color: '#4267B2' }}></FaFacebook></Link>
                <Link to='/twitter'><FaTwitter size={28} style={{ color: '#1DA1F2' }}></FaTwitter></Link>
                <Link to='/instagram'><FaInstagram size={28} style={{ color: '#8a3ab9' }}></FaInstagram></Link>
                <Link to='/youtube'><FaYoutube size={28} style={{ color: '#FF0000' }}></FaYoutube></Link>
            </div>
            <div className='footer-nav d-flex justify-content-center'>
                <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
            </div>
            <div className='pt-3 copyright'>
                <p className='pb-4'><small>Programming School@2022 All Rights Reserved</small></p>
            </div>
        </footer>
    );
};

export default Footer;