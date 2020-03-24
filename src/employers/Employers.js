import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function Employers() {
    return (
        <>
        <h1>Employers</h1>
        <p>Dealing with a third party in recruitment can be challenging and you want to be able to select your chosen recruitment partner
            with confidence. RecruiterRate aggregates and ranks the best recruiters to use in your area, and allows you to get in touch with the.
        </p>
        <Link to="/signup"><Button variant="danger">Sign Up</Button></Link>

        </>
    )
}