import React from 'react';
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
export default function LandingPage() {

    return (
        <div className="landingPageBody">
            <Navbar bg="light" expand="lg" fixed="top" >
                <Navbar.Brand href="#">RECRUITER_RATE</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Recruiters">Recruiters</Nav.Link>
                    <Nav.Link href="/Employers">Employers</Nav.Link>
                    <Nav.Link href="/Jobseekers">Jobseekers</Nav.Link>
                    <Nav.Link href="/AboutUs">About Us</Nav.Link>
                    <Nav.Link href="/FAQs">FAQs</Nav.Link>
                </Nav>
            </Navbar>
            <h1>Say goodbye to smoke and mirrors.</h1>
            <h1>Say hello to simple hiring!</h1>
            <h3>RecruiterRate is a simple platform to discover and review recruiters. For too long, the industry has suffered from
        cowboys, chancers and chaos. We're here to bring some unbiased clarity to a market.</h3>
            <h3>Ready to get started?</h3>
            <Link to="/signup"><Button variant="danger">Sign Up</Button></Link>
            <br />
            <Link to="/login">Already have an account? Log in</Link>
        </div>
    )
}