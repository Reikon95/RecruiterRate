import React from 'react';
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NavBarComp from '../navbar/Navbar.js';
export default function LandingPage() {
    return (
        <>
            <NavBarComp />
            <div className="landingPageBody">
                <h1>Say goodbye to smoke and mirrors.</h1>
                <h1>Say hello to simple hiring!</h1>
                <h3>RecruiterRate is a simple platform to discover and review recruiters. For too long, the industry has suffered from
        cowboys, chancers and chaos. We're here to bring some unbiased clarity to a market.</h3>
                <h3>Ready to get started?</h3>
                <a href="/signup"><Button variant="danger">Sign Up</Button></a>
                <br />
                <a href="/login" className="linkElement">Already have an account? Log in</a>
            </div>
        </>
    )
}