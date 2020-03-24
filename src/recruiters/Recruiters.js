import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Recruiters() {
    return (
        <>
        <h1>Recruiters</h1>
        <p>You're an expert in your field, and it's time to prove it! If you submit your profile to us you can recieve testimonials
        from happy clients and candidates. Watch yourself rise up the ranks and become the best recruiter in your industry!
        </p>
        <Link to="/signup"><Button variant="danger">Sign Up</Button></Link>

        </>
    )
}